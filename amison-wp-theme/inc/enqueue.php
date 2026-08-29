<?php
/**
 * Enqueue theme assets.
 *
 * @package Amison_Consulting
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}


/**
 * Enqueue frontend assets.
 */
function amison_enqueue_assets() {

    $theme_version = wp_get_theme()->get( 'Version' );

    wp_enqueue_style(
        'amison-style',
        get_template_directory_uri() . '/assets/css/tailwind-build-artifact.css',
        array(),
        $theme_version
    );

    wp_enqueue_style(
        'amison-theme-fonts',
        get_template_directory_uri() . '/assets/css/fonts.css',
        array(),
        $theme_version
    );

    wp_enqueue_script(
        'amison-main',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        $theme_version,
        true
    );
}

add_action( 'wp_enqueue_scripts', 'amison_enqueue_assets' );