<?php
/**
 * Home - Value
 *
 * @package Amison_Consulting
 */

  $value_items = get_field( 'value_items' );
?>

      <section class="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low border-y border-slate-gray/10">
        <div class="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
          <div class="text-center mb-16">
            <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
			        <?php the_field( 'value_label' ); ?>
            </h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
				      <?php the_field( 'value_headline' ); ?>
            </p>
          </div>
          <div class="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
            <div class="text-center mb-20">
              <div class="mb-16 p-8 bg-soft-stone/50 border-l-4 border-muted-brass rounded-r-lg text-left max-w-4xl mx-auto">
                <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
					        <?php the_field( 'value_description' ); ?>
                </p>
              </div>
            </div>
		      </div>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
				<?php if ( have_rows( 'value_items' ) ) : ?>
					<?php while ( have_rows( 'value_items' ) ) : the_row(); ?>
					<?php
						$row_index = get_row_index();
						$card_background = ( $row_index % 2 === 0 ) ? 'bg-white' : 'bg-soft-stone';
					?>
			      <div class="<?php echo esc_attr( $card_background ); ?> p-8 rounded-lg border border-slate-gray/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300">
							<div class="w-12 h-12 rounded-full bg-pale-teal flex items-center justify-center mb-6 text-primary">
								<span
									class="material-symbols-outlined"
									data-icon="<?php echo esc_attr( get_sub_field( 'icon' ) ); ?>"
								>
									<?php echo esc_html( get_sub_field( 'icon' ) ); ?>
								</span>
							</div>

							<h3 class="font-headline-md text-headline-md text-primary mb-3">
								<?php echo esc_html( get_sub_field( 'title' ) ); ?>
							</h3>

							<p class="font-body-md text-body-md text-on-surface-variant">
								<?php echo esc_html( get_sub_field( 'description' ) ); ?>
							</p>
						</div>

					<?php endwhile; ?>
				<?php endif; ?>
			</div>
    </div>
  </section>
