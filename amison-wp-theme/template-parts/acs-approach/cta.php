<?php
/**
 * ACS Approach CTA
 *
 * @package Amison_Consulting
 */
?>

      <section
        class="py-section-padding-mobile md:py-section-padding-desktop bg-soft-stone relative overflow-hidden"
        id="cta"
      >
        <div class="max-w-3xl mx-auto px-margin-mobile md:px-gutter text-center flex flex-col items-center gap-8 relative z-10">
          <span class="material-symbols-outlined text-secondary text-[48px] font-light">
			      <?php the_field( 'cta_icon' ); ?>
          </span>
          <h2 class="font-headline-lg text-headline-lg text-primary">
            <?php the_field( 'cta_title' ); ?>
          </h2>
          <p class="font-editorial-italic text-editorial-italic text-secondary -mt-4">
			      <?php the_field( 'cta_subtitle' ); ?>
          </p>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            <?php the_field( 'cta_description' ); ?>
          </p>
          <a
            href="<?php echo esc_url( get_field( 'cta_button' )['url'] ); ?>"
            class="bg-primary text-white font-button text-button py-4 px-8 rounded hover:bg-opacity-90 transition-all duration-300 mt-4 shadow-sm hover:shadow-md flex items-center gap-2"
          >
      			<?php echo esc_html( get_field( 'cta_button' )['title'] ); ?>
            <span class="material-symbols-outlined text-[20px]">
              arrow_forward
            </span>
          </a>
        </div>
      </section>
