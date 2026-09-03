<?php
/**
 * Theme setup.
 *
 * @package Amison_Consulting
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}


/**
 * Set up theme defaults and register support for WordPress features.
 */
function amison_theme_setup() {

    /*
     * Let WordPress manage the document title.
     */
    add_theme_support( 'title-tag' );


    /*
     * Enable featured images.
     */
    add_theme_support( 'post-thumbnails' );


    /*
     * Enable HTML5 markup.
     */
    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        )
    );


    /*
     * Register navigation menus.
     */
    add_theme_support( 'menus' );

    /*
     * Add logo support.
     */
    add_theme_support( 'custom-logo' , array(
        'height'      => 150,
        'width'       => 200,
    ));

    /*
     * Make the theme translation-ready.
     */
    load_theme_textdomain(
        'amison-consulting',
        get_template_directory() . '/languages'
    );

}

add_action( 'after_setup_theme', 'amison_theme_setup' );
