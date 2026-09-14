<?php
/**
 * FAQs - CTA
 *
 * @package Amison_Consulting
 */
?>

      <section
        class="bg-primary-container text-on-primary py-24 md:py-32 px-margin-mobile md:px-section-padding-desktop text-center"
        id="getting-started"
      >
        <div class="max-w-3xl mx-auto">
          <div class="mb-12">
            <h2 class="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero mb-6">
              <?php the_field("cta_header") ?>
            </h2>
          </div>
          <div class="space-y-12 pb-4">
            <?php 
            $full_width_unboxed = get_field('cta_full_width_unboxed_qa');

            if( $full_width_unboxed ): ?>
              <div>
                <h3 class="font-headline-md text-headline-md mb-4">
                  <?php echo esc_html($full_width_unboxed['question']); ?>
							  </h3>
                <span class="font-body-lg text-body-lg text-on-primary/80 leading-loose text-xl">
                  <?php echo wp_kses_post($full_width_unboxed['answer']); ?>
                </span>
				    <?php endif; ?>
            <div class="pt-10">
              <?php $button = get_field( 'cta_button' ); ?>
              <a
                class="inline-flex items-center justify-center bg-secondary text-on-secondary font-button text-button px-10 py-5 rounded-full hover:bg-opacity-90 transition-all duration-200 ease-in-out active:opacity-80 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
                href="<?php echo esc_url( $button['url'] ); ?>"
              >
                <?php echo esc_html( $button['title'] ); ?>
              </a>
            </div>
          </div>
          <?php 
            $full_width_boxed = get_field('cta_full_width_boxed_qa');

            if( $full_width_boxed ): ?>
              <div class="bg-surface/10 p-8 rounded-xl text-left mt-16 max-w-2xl mx-auto">
                <h3 class="font-headline-md text-headline-md mb-4">
                  <?php echo esc_html($full_width_boxed['question']); ?>
                </h3>
                <p class="font-body-md text-body-md text-on-primary/90 mb-6 leading-loose">
				          <?php echo wp_kses_post($full_width_boxed['answer']); ?>
                </p>
              </div>
          <?php endif; ?>
          <?php 
            $full_width_left_text = get_field('cta_full_width_left_text_unboxed_qa');

            if( $full_width_left_text ): ?>
              <div class="text-left max-w-2xl mx-auto opacity-80 pt-8 border-t border-on-primary/20">
                <h3 class="font-headline-md text-headline-md mb-4">
                  <?php echo esc_html($full_width_left_text['question']); ?>
                </h3>
                <span class="font-body-md text-body-md leading-loose">
                  <?php echo wp_kses_post($full_width_left_text['answer']); ?>
                </span>
              </div>
          <?php endif; ?>
        </div>
      </div>
      </section>
