<?php
/**
 * Template Name: ACS Approach
 *
 * @package Amison_Consulting
 */

get_header();
?>

<main>

    <?php get_template_part( 'template-parts/acs-approach/philosophy' ); ?>
    <?php get_template_part( 'template-parts/acs-approach/about' ); ?>
    <?php get_template_part( 'template-parts/acs-approach/right-fit' ); ?>
    <?php get_template_part( 'template-parts/acs-approach/method' ); ?>
    <?php get_template_part( 'template-parts/acs-approach/cta' ); ?>

</main>

<?php
get_footer();