<?php
/**
 * Template Name: Contact
 *
 * @package Amison_Consulting
 */

get_header();
?>

<main id="main-content" class="grow">

    <?php get_template_part( 'template-parts/contact/title' ); ?>

    <?php get_template_part( 'template-parts/contact/contact-info' ); ?>

    <?php get_template_part( 'template-parts/contact/contact-form' ); ?>

</main>

<?php
get_footer();