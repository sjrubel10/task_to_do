<?php

namespace TaskToDo\Classes;

class Tasks
{
    function __construct(){
        //code
    }

    public static function insert_task( $post_author, $post_title, $post_content, $post_duration, $post_status = 'pending', $post_type = 'task') {
        $post_data = array(
            'post_author' => $post_author,
            'post_title' => $post_title,
            'post_content' => $post_content,
            'post_date_gmt' => $post_duration,
            'post_status' => $post_status,
            'post_type' => $post_type
        );

        $post_id = wp_insert_post( $post_data );

        if ( $post_id ) {
            return $post_id;
        } else {
            return false;
        }
    }

    public static function update_task_by_id( $post_id, $post_title, $post_content, $post_duration, $post_status = 'pending', $post_type = 'task') {
        // Check if the post ID exists
        if ( !$post_id || !get_post( $post_id ) ) {
            return false;
        }

        $post_data = array(
            'ID' => $post_id,
            'post_title' => $post_title,
            'post_content' => $post_content,
            'post_date_gmt' => $post_duration,
            'post_status' => $post_status,
            'post_type' => $post_type
        );

        $updated = wp_update_post( $post_data );

        if ($updated) {
            return $updated;
        } else {
            return false;
        }
    }


    public static function update_task_status_by_id( $post_id, $post_status, $post_type = 'task') {
        // Check if the post ID exists
        if ( !$post_id || !get_post( $post_id ) ) {
            return false;
        }

        $post_data = array(
            'ID' => $post_id,
            'post_status' => $post_status,
            'post_type' => $post_type
        );

        $updated = wp_update_post( $post_data );

        if ($updated) {
            return $updated;
        } else {
            return false;
        }
    }

    public static function delete_task_by_id( $post_id ) {
        // Check if the post ID exists
        if (!$post_id || !get_post($post_id)) {
            return false;
        }

        $deleted = wp_delete_post( $post_id, true );

        if ( $deleted ) {
            return true;
        } else {
            return false;
        }
    }

    public static function get_posts_by_status( $post_status, $limit ){
        global $wpdb;
        $post_type = 'task';
        if( empty( $post_status ) ){
            $need_ststus_query = '';
            $is_post_status = '';
        }else{
            $need_ststus_query = " AND `post_status` = %s ";
            $is_post_status = $post_status;
        }

        $query = $wpdb->prepare(
            "SELECT `ID`, `post_author`, `post_title`, `post_content`, `post_date_gmt`, `post_status` FROM $wpdb->posts WHERE post_type = %s $need_ststus_query ORDER BY ID DESC",
            $post_type, $is_post_status
        );

        if ($limit != -1) {
            $query .= $wpdb->prepare(" LIMIT %d", $limit );
        }

        $posts = $wpdb->get_results( $query, ARRAY_A );

        return $posts;
    }

    public static function get_single_task_by_id( $post_id ) {
        global $wpdb;
        $post_type = 'task';
        if ( !$post_id || !get_post( $post_id ) ) {
            return false;
        }
        $query = $wpdb->prepare(
            "SELECT `ID`, `post_author`, `post_title`, `post_content`, `post_date_gmt`, `post_status` FROM $wpdb->posts WHERE `ID` = %d AND `post_type` = %s",
            $post_id, $post_type
        );

        $post = $wpdb->get_row( $query, ARRAY_A );

        return $post;
    }


}