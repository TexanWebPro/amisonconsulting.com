<?php
/**
 * Home - CTA
 *
 * @package Amison_Consulting
 */
?>

      <section class="w-full px-margin-mobile md:px-gutter py-section-padding-mobile md:py-section-padding-desktop bg-soft-stone/30 border-t border-soft-stone">
        <div class="max-w-container-max mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          <div class="md:w-5/12 flex flex-col items-start">
            <div class="w-16 h-16 rounded-full bg-muted-brass/10 flex items-center justify-center mb-8">
              <span class="material-symbols-outlined text-4xl text-muted-brass font-light">
                schedule
              </span>
            </div>
            <h2 class="font-headline-lg text-headline-lg text-primary leading-tight tracking-tight">
              <?php the_field( 'cta_heading' ); ?>
            </h2>
            <div class="h-0.5 w-12 bg-muted-brass mt-8 hidden md:block"></div>
          </div>

          <div class="md:w-7/12 flex flex-col items-start">
            <p class="font-body-lg text-body-lg text-primary mb-8 leading-relaxed">
              <?php the_field( 'cta_description' ); ?>
            </p>
            <?php $button = get_field( 'cta_button' ); ?>
            <a
              href="<?php echo esc_url( $button['url'] ); ?>"
              class="bg-secondary text-on-primary font-button text-button px-10 py-4 rounded hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
            >
				<?php echo esc_html( $button['title'] ); ?>
            </a>
          </div>
        </div>
      </section>
