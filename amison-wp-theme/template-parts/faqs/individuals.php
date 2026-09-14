<?php
/**
 * FAQs - Individuals
 *
 * @package Amison_Consulting
 */
?>

      <section class="bg-soft-stone py-24 md:py-40 px-margin-mobile md:px-section-padding-desktop text-center">
        <div class="max-w-3xl mx-auto">
          <div class="mb-12">
            <span class="material-symbols-outlined text-secondary text-[48px] mb-6">
              person
            </span>
            <h2 class="font-headline-lg text-headline-lg text-primary-container">
            <?php the_field("individuals_header") ?>
            </h2>
          </div>
          <div class="space-y-16 text-left">
            <?php if ( have_rows( 'individuals_full_width_unboxed_qa' ) ) : ?>
            <?php while ( have_rows( 'individuals_full_width_unboxed_qa' ) ) : the_row(); ?>

              <div class="text-center">
                <h3 class="font-headline-md text-headline-md text-primary-container mb-4">
                  <?php echo esc_html( get_sub_field( 'question' ) ); ?>
                </h3>
                <p class="font-body-lg text-body-lg text-on-surface-variant leading-loose text-xl">
                  <?php echo wp_kses_post( get_sub_field( 'answer' ) ); ?>
                </p>
              </div>
            <?php endwhile; ?>
            <?php endif; ?>

            <div class="bg-surface p-10 rounded-2xl shadow-sm mx-auto max-w-2xl">
              <?php if ( have_rows( 'individuals_full_width_boxed_qa' ) ) : ?>
    					<?php while ( have_rows( 'individuals_full_width_boxed_qa' ) ) : the_row(); ?>
                <h3 class="font-headline-md text-headline-md text-primary-container mb-6 text-center">
                  <?php echo esc_html( get_sub_field( 'question' ) ); ?>
                </h3>
                <span class="font-body-md text-body-md text-on-surface-variant mb-6 text-center">
                  <?php echo wp_kses_post( get_sub_field( 'answer' ) ); ?>
                </span>
              <?php endwhile; ?>
				      <?php endif; ?>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <?php if ( have_rows( 'individuals_half_width_qa' ) ) : ?>
    					<?php while ( have_rows( 'individuals_half_width_qa' ) ) : the_row(); ?>
                <div>
                  <h3 class="font-headline-md text-headline-md text-primary-container mb-4">
                    <?php echo esc_html( get_sub_field( 'question' ) ); ?>
                  </h3>
                  <span class="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    <?php echo wp_kses_post( get_sub_field( 'answer' ) ); ?>
                  </span>
                </div>
              <?php endwhile; ?>
				      <?php endif; ?>
            </div>
          </div>
        </div>
      </section>
