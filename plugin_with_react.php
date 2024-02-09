<?php
/**
 * Plugin Name:       Task To Do
 * Description:       Task To Do platform made by WordPress.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Md Rubel
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       task_to_do
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
require_once __DIR__.'/vendor/autoload.php';

new TaskToDo\Api();
//new Api();

add_action( 'admin_menu', 'task_to_do_init_menu' );

/**
 * Init Admin Menu.
 *
 * @return void
 */
function task_to_do_init_menu() {
    add_menu_page(
        __( 'Task To Do', 'task_to_do'),
        __( 'Task To Do', 'task_to_do'), 'manage_options',
        'tasktodo',
        'task_to_do_admin_page',
        'dashicons-admin-post',
        '2.1' );
}

/**
 * Init Admin Page.
 *
 * @return void
 */
function task_to_do_admin_page() {
    require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
}

add_action( 'admin_enqueue_scripts', 'task_to_do_admin_enqueue_scripts' );

/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
function task_to_do_admin_enqueue_scripts() {
    if( isset( $_GET['page'] ) && $_GET['page'] === 'tasktodo' ){
        wp_enqueue_style( 'jobplace-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
    }
    wp_enqueue_script( 'jobplace-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.0', true );
    wp_localize_script('jobplace-script', 'myVars', array(
        'rest_nonce'           => wp_create_nonce( 'wp_rest' ),
    ));
}


