<?php
/**
 * FAQs - Projects
 *
 * @package Amison_Consulting
 */
?>

    <section class="bg-soft-stone py-20 md:py-32 px-margin-mobile md:px-section-padding-desktop">
        <div class="max-w-4xl mx-auto border-4 border-surface p-8 md:p-16 rounded-xl bg-surface/50 backdrop-blur-sm">
          <div class="mb-12 text-center">
            <h2 class="font-headline-lg text-headline-lg text-primary-container">
              <?php the_field("projects_header") ?>
            </h2>
          </div>
			    <?php if ( have_rows( 'projects_full_width_qa' ) ) : ?>
          <?php while ( have_rows( 'projects_full_width_qa' ) ) : the_row(); ?>

            <div class="space-y-16">
              <div>
                <h3 class="font-headline-md text-headline-md text-primary-container mb-6 text-center">
                  <?php echo esc_html( get_sub_field( 'question' ) ); ?>
                </h3>
                <span>
                  <?php echo wp_kses_post( get_sub_field( 'answer' ) ); ?>
                </span>
              </div>
             
          <?php endwhile; ?>
          <?php endif; ?>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-gray/20">
            <?php if ( have_rows( 'projects_half_width_qa' ) ) : ?>
            <?php while ( have_rows( 'projects_half_width_qa' ) ) : the_row(); ?>
              <div>
                <h3 class="font-headline-md text-headline-md text-primary-container mb-4">
                  <?php echo esc_html( get_sub_field( 'question' ) ); ?>
                </h3>
                <p class="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-4">
                  <?php echo wp_kses_post( get_sub_field( 'answer' ) ); ?>
                </p>
              </div>
            <?php endwhile; ?>
            <?php endif; ?>
				
			    	<?php if ( have_rows( 'projects_long_qa' ) ) : ?>
            <?php while ( have_rows( 'projects_long_qa' ) ) : the_row(); ?>
              <div class="md:col-span-2">
                <h3 class="font-headline-md text-headline-md text-primary-container mb-4">
                  <?php echo esc_html( get_sub_field( 'question' ) ); ?>
                </h3>
                <p class="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-4">
				          <?php echo wp_kses_post( get_sub_field( 'answer' ) ); ?>
                </p>
              </div>
    				<?php endwhile; ?>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </section>