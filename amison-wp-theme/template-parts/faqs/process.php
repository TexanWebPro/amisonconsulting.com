<?php
/**
 * FAQs - Process
 *
 * @package Amison_Consulting
 */
?>

      <section class="bg-surface py-20 md:py-32 px-margin-mobile md:px-section-padding-desktop">
        <div class="max-w-container-max mx-auto">
          <div class="mb-16">
            <h2 class="font-headline-lg text-headline-lg text-primary-container">
            <?php the_field("process_header") ?>
            </h2>
          </div>
          <div class="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start relative before:absolute before:inset-0 before:ml-9.75 lg:before:ml-0 lg:before:mt-9.75 before:-z-10 before:w-0.5 lg:before:w-full lg:before:h-0.5 before:bg-muted-brass/30">
            <?php if ( have_rows( 'process_steps' ) ) : ?>
            <?php while ( have_rows( 'process_steps' ) ) : the_row(); ?>
              <div class="flex-1 relative">
                <div class="w-20 h-20 bg-primary-container text-on-primary rounded-full flex items-center justify-center font-display-hero-mobile text-3xl mb-8 border-8 border-surface mx-auto lg:mx-0 shrink-0">
                  <?php echo get_row_index() ?>
                </div>
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
          <div class="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
            <?php if ( have_rows( 'process_left_qa' ) ) : ?>
            <?php while ( have_rows( 'process_left_qa' ) ) : the_row(); ?>
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
   
            <div class="space-y-12">
              <?php if ( have_rows( 'process_right_qa' ) ) : ?>
              <?php while ( have_rows( 'process_right_qa' ) ) : the_row(); ?>
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
          </div>
        </div>
    </section>
