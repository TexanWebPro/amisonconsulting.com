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

/**
 * Populate the Contact Form ACF field with Gravity Forms.
 */
function amison_load_contact_form_choices( $field ) {

    // Start with an empty choices array.
    $field['choices'] = array();

    // Gravity Forms isn't available.
    if ( ! class_exists( 'GFAPI' ) ) {
        return $field;
    }

    // Get all active, non-trashed Gravity Forms.
    $forms = GFAPI::get_forms(
        true,  // Active forms only.
        false, // Exclude trashed forms.
        'title',
        'ASC'
    );

    // Add each Gravity Form to the ACF Select.
    foreach ( $forms as $form ) {

        $form_id = (string) $form['id'];
        $form_title = $form['title'];

        $field['choices'][ $form_id ] = $form_title;
    }

    return $field;
}

add_filter(
    'acf/load_field/name=contact_form_id',
    'amison_load_contact_form_choices'
);