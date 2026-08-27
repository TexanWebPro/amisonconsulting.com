<?php
/**
 * Navigation registration.
 *
 * @package Amison_Consulting
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}


/**
 * Register theme navigation locations.
 */
function amison_register_navigation_menus() {

    register_nav_menus(
        array(
            'primary' => __( 'Primary Navigation', 'amison-consulting' ),
            'footer'  => __( 'Footer Navigation', 'amison-consulting' ),
        )
    );
}

add_action( 'after_setup_theme', 'amison_register_navigation_menus' );