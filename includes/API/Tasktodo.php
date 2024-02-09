<?php

namespace TaskToDo\API;

use TaskToDo\Classes\Tasks;
use WP_REST_Controller;
use WP_REST_Response;
use WP_REST_Server;

class Tasktodo extends WP_REST_Controller
{
    function __construct(){
        $this->namespace = 'tasktodo/v1';
        $this->rest_base = 'createtask';
        $this->id_regex = '/^\d+$/';
    }

    public function register_routes(){
        register_rest_route(
            $this->namespace,
            '/tasks',
            [
                [
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => [ $this, 'task_to_do_get_tasks' ],
                    'permission_callback' => [ $this, 'get_item_permissions_check' ],
                    'args'                => [$this->get_collection_params()],
                ],
            ]
        );

        register_rest_route(
            $this->namespace,
            '/task',
            [
                [
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => [ $this, 'task_to_do_get_single_task' ],
                    'permission_callback' => [ $this, 'get_item_permissions_check' ],
                    'args'                => [$this->get_collection_params()],
                ],
            ]
        );

        register_rest_route(
            $this->namespace,
            '/createtask',
            [
                [
                    'methods'             => WP_REST_Server::CREATABLE,
                    'callback'            => [ $this, 'task_to_do_create_tasks' ],
                    'permission_callback' => [ $this, 'get_item_permissions_check' ],
                    'args'                => [$this->get_collection_params()],
                ],
            ]
        );
        register_rest_route(
            $this->namespace,
            '/edittask',
            [
                [
                    'methods'             => WP_REST_Server::EDITABLE,
                    'callback'            => [ $this, 'task_to_do_edit_tasks' ],
                    'permission_callback' => [ $this, 'get_item_permissions_check' ],
                    'args'                => [$this->get_collection_params()],
                ],
            ]
        );
        register_rest_route(
            $this->namespace,
            '/taskdelete',
            [
                [
                    'methods'             => WP_REST_Server::DELETABLE,
                    'callback'            => [ $this, 'task_to_do_delete_tasks' ],
                    'permission_callback' => [ $this, 'get_item_permissions_check' ],
                    'args'                => [$this->get_collection_params()],
                ],
            ]
        );
        register_rest_route(
            $this->namespace,
            '/updatestatus',
            [
                [
                    'methods'             => WP_REST_Server::EDITABLE,
                    'callback'            => [ $this, 'task_to_do_update_task_status' ],
                    'permission_callback' => [ $this, 'get_item_permissions_check' ],
                    'args'                => [$this->get_collection_params()],
                ],
            ]
        );

    }

    public function task_to_do_get_single_task( $request ){

        $data = $request->get_params();
        $post_id = isset( $data['id'] ) ? sanitize_text_field( $data['id'] ) : "";
        $data = Tasks::get_single_task_by_id( $post_id );
        return $data;
    }
    public function task_to_do_update_task_status( $request ){

        $data = $request->get_params();
        $post_id = isset( $data['id'] ) ? sanitize_text_field( $data['id'] ) : "";
        $post_status = isset( $data['status'] ) ? sanitize_text_field( $data['status'] ) : "";

        $insert_id = Tasks::update_task_status_by_id( $post_id, $post_status );
        if( $insert_id ){
            $smg = 'Task Status Updated Successfully';
        }else{
            $smg = 'Task Status Update Failed';
        }
//        error_log( print_r( ['$data'=>$data], true ) );
        return $smg;
    }

    public function task_to_do_get_tasks( $request ){
        $data = Tasks::get_posts_by_status( $post_status='', $limit=20 );

        return $data;
    }

    public function task_to_do_create_tasks( $request ){

        $data = $request->get_params(); // Get JSON data from the request
//        error_log( print_r( [ '$data'=>$data ], true ) );
        $post_author = 1;
        $post_title = isset( $data['title'] ) ? sanitize_text_field( $data['title'] ) : "";
        $post_content = isset( $data['description'] ) ? sanitize_text_field( $data['description'] ) : "";
        $post_duration = isset( $data['duration'] ) ? sanitize_text_field( $data['duration'] ) : "";
        $post_status = isset( $data['status'] ) ? sanitize_text_field( $data['status'] ) : "";

        $insert_id = Tasks::insert_task( $post_author, $post_title, $post_content, $post_duration, $post_status );
        if( $insert_id ){
            $smg = 'Task Successfully Created';
        }else{
            $smg = 'Task Create Failed';
        }

        return new WP_REST_Response( $smg, 200 );
    }

    public function task_to_do_edit_tasks( $request ){

        $data = $request->get_params(); // Get JSON data from the request
        $post_author = 1;
        $post_title = isset( $data['title'] ) ? sanitize_text_field( $data['title'] ) : "";
        $post_id = isset( $data['id'] ) ? sanitize_text_field( $data['id'] ) : "";
        $post_content = isset( $data['description'] ) ? sanitize_text_field( $data['description'] ) : "";
        $post_duration = isset( $data['duration'] ) ? sanitize_text_field( $data['duration'] ) : "";
        $post_status = isset( $data['status'] ) ? sanitize_text_field( $data['status'] ) : "";

        $insert_id = Tasks::update_task_by_id( $post_id, $post_title, $post_content, $post_duration, $post_status );
        if( $insert_id ){
            $smg = 'Task Successfully Updated';
        }else{
            $smg = 'Task Update Failed';
        }

        return new WP_REST_Response( $smg, 200 );
    }

    public function task_to_do_delete_tasks( $request ){
        $data = $request->get_params();
        $post_id = isset( $data['id'] ) ? sanitize_text_field( $data['id'] ) : "";

        $is_delete = Tasks::delete_task_by_id( $post_id );

        if( $is_delete ){
            $smg = 'Task successfully Removed';
        }else{
            $smg = 'Task remove Failed';
        }
        return new WP_REST_Response( $smg, 200 );
    }



    /**
     * Checks if the current user has permissions to access the item.
     *
     * This function checks if the current user has the 'manage_options' capability,
     * which typically grants access to manage options and settings within WordPress.
     *
     * @param WP_REST_Request $request The request object.
     * @return bool Whether the current user has permissions to access the item.
     */
    public function get_item_permissions_check( $request ){
        if( current_user_can( 'manage_options' ) ){
            return true;
        }
        return false;
    }



}