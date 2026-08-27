<?php
/**
 * Template Name: Fee Schedule
 *
 * @package Amison_Consulting
 */

get_header();
?>

<main class="max-w-container mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop">

    <?php get_template_part( 'template-parts/fee-schedule/header' ); ?>
    <?php get_template_part( 'template-parts/fee-schedule/tiers' ); ?>

</main>

<?php
get_footer();