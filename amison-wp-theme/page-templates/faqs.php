<?php
/**
 * Template Name: FAQs
 *
 * @package Amison_Consulting
 */

get_header();
?>

<main class="w-full">

    <?php get_template_part( 'template-parts/faqs/banner' ); ?>
    <?php get_template_part( 'template-parts/faqs/about-acs' ); ?>
    <?php get_template_part( 'template-parts/faqs/services-scope' ); ?>
    <?php get_template_part( 'template-parts/faqs/process' ); ?>
    <?php get_template_part( 'template-parts/faqs/projects' ); ?>
    <?php get_template_part( 'template-parts/faqs/fees' ); ?>
    <?php get_template_part( 'template-parts/faqs/individuals' ); ?>
    <?php get_template_part( 'template-parts/faqs/client-experience' ); ?>
    <?php get_template_part( 'template-parts/faqs/cta' ); ?>

</main>

<?php
get_footer();