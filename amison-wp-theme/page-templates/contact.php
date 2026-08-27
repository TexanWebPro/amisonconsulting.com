<?php
/**
 * Template Name: Contact
 *
 * @package Amison_Consulting
 */

get_header();
?>

<main class="w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-mobile md:py-section-padding-desktop">

    <?php get_template_part( 'template-parts/contact/title' ); ?>
    
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <?php get_template_part( 'template-parts/contact/contact-info' ); ?>

        <?php get_template_part( 'template-parts/contact/contact-form' ); ?>
    </div>
</main>

<?php
get_footer();