<?php
/**
 * Solutions - Clarity
 *
 * @package Amison_Consulting
 */
?>

    <section class="py-section-padding-mobile md:py-section-padding-desktop px-margin-mobile md:px-gutter max-w-container-max mx-auto text-center">
        <h1 class="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-primary mb-6 max-w-4xl mx-auto">
		    	<?php the_field( 'clarity_title' ); ?>
        </h1>
        <p class="font-editorial-italic text-editorial-italic text-secondary mb-8 max-w-2xl mx-auto">
    			<?php the_field( 'clarity_subtitle' ); ?>
        </p>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
        	<?php the_field( 'clarity_description' ); ?>
        </p>
    </section>
