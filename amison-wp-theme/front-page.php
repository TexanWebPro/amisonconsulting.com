<?php
/**
 * Front Page Template
 *
 * @package Amison_Consulting
 */

get_header();
?>

<main id="main-content" class="grow">

    <?php get_template_part( 'template-parts/home/hero' ); ?>

    <?php get_template_part( 'template-parts/home/value' ); ?>

    <?php get_template_part( 'template-parts/home/roadmap' ); ?>

    <?php get_template_part( 'template-parts/common/cta' ); ?>

</main>

<?php
get_footer();