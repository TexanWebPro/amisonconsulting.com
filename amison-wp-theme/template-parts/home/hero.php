<?php
/**
 * Home - Hero
 *
 * @package Amison_Consulting
 */

  $hero_title = get_field( 'hero_title' ); 
?>


      <section class="py-section-padding-mobile md:py-section-padding-desktop px-margin-mobile md:px-gutter max-w-container-max mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2 flex flex-col items-center md:items-start space-y-6">
          <h1 class="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-primary flex flex-col">
            <span><?php echo esc_html( $hero_title['line_1'] ); ?></span>
            <span><?php echo esc_html( $hero_title['line_2'] ); ?></span>
            <span><?php echo esc_html( $hero_title['line_3'] ); ?></span>
          </h1>
          <p class="font-headline-sm text-headline-sm text-on-surface-variant">
			      <?php echo esc_html( get_field( 'hero_headline' ) ); ?>
          </p>
          <p class="w-3/4">
            <?php echo esc_html( get_field( 'hero_description' ) ); ?>
          </p>
          <span class="flex flex-row gap-4">
			  
            <?php $primary_button = get_field( 'hero_primary_button' ); ?>
            <a
              href="<?php echo esc_url( $primary_button['url'] ); ?>"
              class="bg-secondary text-on-primary font-button text-button px-8 py-4 rounded-DEFAULT hover:opacity-90 transition-opacity mt-4"
            >
				      <?php echo esc_html( $primary_button['title'] ); ?>
            </a>

			      <?php $secondary_button = get_field( 'hero_primary_button' ); ?>
            <a
              href="<?php echo esc_url( $secondary_button['url'] ); ?>"
              class="bg-primary text-on-primary font-button text-button px-8 py-4 rounded-DEFAULT hover:opacity-90 transition-opacity mt-4"
            >
				      <?php echo esc_html( $secondary_button['title'] ); ?>
            </a>
          </span>
        </div>
        <div class="md:w-1/2 w-full h-100 md:h-150 rounded-lg overflow-hidden border border-slate-gray/20">
          <div
            class="bg-cover bg-center w-full h-full"
            style="background-image: url('<?php echo esc_url( get_field( 'hero_image' )['url'] ); ?>')"
          ></div>
        </div>
      </section>
