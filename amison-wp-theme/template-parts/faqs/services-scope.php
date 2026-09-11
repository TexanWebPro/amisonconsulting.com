<?php
/**
 * FAQs - Services & Scope
 *
 * @package Amison_Consulting
 */
?>

      <section class="bg-soft-stone py-20 md:py-32 px-margin-mobile md:px-section-padding-desktop">
        <div class="max-w-container-max mx-auto">
          <div class="mb-16 text-center">
            <h2 class="font-headline-lg text-headline-lg text-primary-container">
              <?php the_field("services_header") ?>
            </h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			      <?php if ( have_rows( 'services_tall_qa' ) ) : ?>
            <?php while ( have_rows( 'services_tall_qa' ) ) : the_row(); ?>
              <div class="bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 class="font-headline-md text-headline-md text-primary-container mb-6 flex items-center">
                  <?php echo esc_html( get_sub_field( 'question' ) ); ?>
                </h3>
                <p class="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-6">
                  <?php echo wp_kses_post( get_sub_field( 'answer' ) ); ?>
                </p>
              </div>
    			  <?php endwhile; ?>
            <?php endif; ?>
		    
            <?php if ( have_rows( 'services_long_qa' ) ) : ?>
            <?php while ( have_rows( 'services_long_qa' ) ) : the_row(); ?>
              <div class="bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-3">
                <h3 class="font-headline-md text-headline-md text-primary-container mb-6 flex items-center">
                  <?php echo esc_html( get_sub_field( 'question' ) ); ?>
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <?php echo wp_kses_post( get_sub_field( 'answer' ) ); ?>
                </div>
              </div>
			      <?php endwhile; ?>
            <?php endif; ?>
          </div>
        </div>
      </section>
