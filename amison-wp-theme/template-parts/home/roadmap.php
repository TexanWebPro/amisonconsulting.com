<?php
/**
 * Home - Roadmap
 *
 * @package Amison_Consulting
 */
?>

      <section class="py-section-padding-mobile md:py-section-padding-desktop px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div class="flex flex-col md:flex-row gap-16 items-start">
          <div class="md:w-1/3 top-32">
            <h2 class="font-headline-lg text-headline-lg text-primary mb-6">
              <?php the_field( 'roadmap_label' ); ?>
            </h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-8">
              <?php the_field( 'roadmap_headline' ); ?>
            </p>
            <img
              class="w-full rounded-lg object-cover border border-slate-gray/20 h-64"
              src="<?php echo esc_url( get_field( 'roadmap_image' )['url'] ); ?>"
            />
          </div>
          <div class="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
			  <?php if ( have_rows( 'roadmap_items' ) ) : ?>
			  <?php while ( have_rows( 'roadmap_items' ) ) : the_row(); ?>
				<div class="relative pl-10 border-l border-slate-gray/30 pb-4">
				  <div class="absolute -left-4.25 top-0 w-8 h-8 rounded-full bg-background border-2 border-secondary flex items-center justify-center font-label-bold text-secondary ">
					<?php echo esc_html( get_sub_field( 'number' ) ); ?>
				  </div>
				  <h4 class="font-headline-sm text-headline-sm text-primary mb-2">
					<?php echo esc_html( get_sub_field( 'title' ) ); ?>
				  </h4>
				  <p class="font-body-md text-body-md text-on-surface-variant">
					<?php echo esc_html( get_sub_field( 'description' ) ); ?>
				  </p>
				</div>
			  <?php endwhile; ?>
			  <?php endif; ?>

          </div>

        </div>
      </section>
