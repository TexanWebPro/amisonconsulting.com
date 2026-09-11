<?php
/**
 * FAQs - Client Experience
 *
 * @package Amison_Consulting
 */
?>

      <section class="bg-surface py-20 md:py-32 px-margin-mobile md:px-section-padding-desktop">
        <div class="max-w-container-max mx-auto">
          <div class="mb-16">
            <h2 class="font-headline-lg text-headline-lg text-primary-container">
              <?php the_field("experience_header") ?>
            </h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			      <?php if ( have_rows( 'experience_tall_qa' ) ) : ?>
            <?php while ( have_rows( 'experience_tall_qa' ) ) : the_row(); ?>
              <div class="bg-soft-stone p-8 rounded-lg border border-slate-gray/10">
                <h3 class="font-headline-md text-headline-md text-primary-container mb-4">
                  <?php echo esc_html( get_sub_field( 'question' ) ); ?>
                </h3>
                <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                  <?php echo wp_kses_post( get_sub_field( 'answer' ) ); ?>
                </p>
              </div>
            <?php endwhile; ?>
            <?php endif; ?>

    			  <?php if ( have_rows( 'experience_long_qa' ) ) : ?>
            <?php while ( have_rows( 'experience_long_qa' ) ) : the_row(); ?>
              <div class="bg-soft-stone p-8 rounded-lg border border-slate-gray/10 md:col-span-2 lg:col-span-2">
                <h3 class="font-headline-md text-headline-md text-primary-container mb-4">
                  <?php echo esc_html( get_sub_field( 'question' ) ); ?>
                </h3>
                <p class="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
				          <?php echo wp_kses_post( get_sub_field( 'answer' ) ); ?>
                </p>
              </div>
			      <?php endwhile; ?>
            <?php endif; ?>
          </div>
        </div>
      </section>
