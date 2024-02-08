<?php

namespace TaskToDo\Classes;

class Tasks
{
    function __construct(){

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

        $post_id = wp_insert_post($post_data);

        if ($post_id) {
            return $post_id; // Return the ID of the newly inserted post
        } else {
            return false; // Return false if post insertion failed
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


}