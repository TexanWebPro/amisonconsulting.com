<?php
/**
 * ACS Approach Method
 *
 * @package Amison_Consulting
 */
?>
      <section class="py-section-padding-mobile md:py-section-padding-desktop bg-primary-container text-white">
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div class="text-center mb-16 max-w-3xl mx-auto flex flex-col gap-6">
            <h2 class="font-headline-lg text-headline-lg text-on-primary">
              <?php the_field( 'method_title' ); ?>
            </h2>
            <p class="font-editorial-italic text-editorial-italic text-pale-teal">
              <?php the_field( 'method_subtitle' ); ?>
            </p>
            <p class="font-body-lg text-body-lg text-outline-variant">
              <?php the_field( 'method_intro' ); ?>
            </p>
          </div>
          <div class="relative w-3/4 mx-auto px-margin-mobile md:px-gutter">
          <div class="md:block absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-gray opacity-30 -translate-x-1/2"></div>

          <div class="flex flex-col gap-12 md:gap-24 relative">
            <?php if ( have_rows( 'method_steps' ) ) : ?>
            <?php while ( have_rows( 'method_steps' ) ) : the_row(); ?>
            <?php
            $step_number = get_row_index();
            $is_odd = $step_number % 2 !== 0;
            ?>
              <div class="grid md:grid-cols-2 gap-8 items-center relative group">
                <?php if ( $is_odd ) : ?>
                  <div class="md:text-right pr-0 md:pr-12 pl-6 md:pl-0">
                    <h3 class="font-headline-md text-headline-md text-pale-teal mb-2 underline">
                      <?php echo esc_html( get_sub_field( 'title' ) ); ?>
                    </h3>
                    <h4 class="font-headline-md text-headline-sm text-pale-teal mb-2">
                      <?php echo esc_html( get_sub_field( 'subtitle' ) ); ?>
                    </h4>
                    <p class="font-body-md text-body-md text-outline-variant">
                      <?php echo wp_kses_post( get_sub_field( 'description' ) ); ?>
                    </p>
                  </div>
                  <div class="flex absolute left-0 md:left-1/2 top-1/2 -translate-x-10 md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary text-white items-center justify-center font-label-bold text-label-bold z-10 border-primary-container group-hover:scale-110 transition-transform">
                      <?php echo esc_html( $step_number ); ?>
                  </div>
                  <div class="md:pl-12"></div>
                <?php else : ?>
                  <div class="hidden md:block md:pr-12"></div>
                  <div class="flex absolute left-0 md:left-1/2 top-1/2 -translate-x-10 md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary text-white items-center justify-center font-label-bold text-label-bold z-10 border-primary-container group-hover:scale-110 transition-transform">
                    <?php echo esc_html( $step_number ); ?>
                  </div>
                  <div class="pl-6 md:pl-12">
                    <h3 class="font-headline-md text-headline-md text-pale-teal mb-2 underline">
                      <?php echo esc_html( get_sub_field( 'title' ) ); ?>
                    </h3>
                    <h4 class="font-headline-md text-headline-sm text-pale-teal mb-2">
                      <?php echo esc_html( get_sub_field( 'subtitle' ) ); ?>
                    </h4>
                    <p class="font-body-md text-body-md text-outline-variant">
                      <?php echo wp_kses_post( get_sub_field( 'description' ) ); ?>
                    </p>
                  </div>
                <?php endif; ?>
              </div>
            <?php endwhile; ?>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </section>
