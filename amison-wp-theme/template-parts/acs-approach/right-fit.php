<?php
/**
 * ACS Approach Right Fit
 *
 * @package Amison_Consulting
 */
?>

          <section class="py-section-padding-mobile md:py-section-padding-desktop bg-background relative overflow-hidden">
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div class="text-center mb-16">
            <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
				<?php the_field( 'right_fit_title' ); ?>
            </h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
				<?php the_field( 'right_fit_intro' ); ?>
            </p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			  <?php if ( have_rows( 'right_fit_items' ) ) : ?>
              <?php while ( have_rows( 'right_fit_items' ) ) : the_row(); ?>
			  <?php
				  $row_index = get_row_index();
				  $card_background = ( $row_index % 2 === 0 ) ? 'bg-soft-stone' : 'bg-white';
			  ?>
				<div class="<?php echo esc_attr( $card_background ); ?> p-6 border border-slate-gray border-opacity-20 rounded-lg hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:border-pale-teal transition-all duration-300 group flex flex-col gap-4">
				  <div class="w-12 h-12 bg-pale-teal rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
					<span class="material-symbols-outlined"><?php echo esc_html( get_sub_field( 'icon' ) ); ?></span>
				  </div>
				  <p class="font-headline-sm text-headline-sm text-primary">
	                  <?php echo esc_html( get_sub_field( 'text' ) ); ?>
				  </p>
				</div>
              <?php endwhile; ?>
              <?php endif; ?>
          </div>
        </div>
      </section>
