<?php
/**
 * Amison Consulting Theme Functions
 *
 * @package Amison_Consulting
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}


/**
 * Theme setup.
 */
require_once get_template_directory() . '/inc/theme-setup.php';


/**
 * Enqueue styles and scripts.
 */
require_once get_template_directory() . '/inc/enqueue.php';


/**
 * Register navigation menus.
 */
require_once get_template_directory() . '/inc/navigation.php';