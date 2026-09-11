<?php
/**
 * FAQs - About ACS
 *
 * @package Amison_Consulting
 */
?>

      <section class="bg-surface py-20 md:py-32 px-margin-mobile md:px-section-padding-desktop">
        <div class="max-w-container-max mx-auto">
          <div class="mb-16">
            <h2 class="font-headline-lg text-headline-lg text-primary-container inline-block border-b-4 border-muted-brass pb-2">
            <?php the_field("about_header") ?>
            </h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-gutter items-start">
            <div class="md:col-span-5 space-y-12">
              <?php if ( have_rows( 'about_left_qa' ) ) : ?>
              <?php while ( have_rows( 'about_left_qa' ) ) : the_row(); ?>
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
            </div>
			    
            <div class="md:col-span-6 md:col-start-7 space-y-12 bg-soft-stone p-8 md:p-12 rounded-xl">
              <?php if ( have_rows( 'about_right_qa' ) ) : ?>
              <?php while ( have_rows( 'about_right_qa' ) ) : the_row(); ?>
              <?php 
                  $row_index = get_row_index();
                  $border_top = ( $row_index === 1 ) ? '' : 'border-t border-slate-gray/20 pt-8';
              ?>
                <div class=" <?php echo esc_attr( $border_top ); ?> ">
                  <h3 class="font-headline-md text-headline-md text-primary-container mb-6">
                    <?php echo esc_html( get_sub_field( 'question' ) ); ?>
                  </h3>
                  <p class="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-6">
                    <?php echo wp_kses_post( get_sub_field( 'answer' ) ); ?>
                  </p>
                </div>
                <?php endwhile; ?>
                <?php endif; ?>
            </div>
          </div>
        </div>
      </section>
