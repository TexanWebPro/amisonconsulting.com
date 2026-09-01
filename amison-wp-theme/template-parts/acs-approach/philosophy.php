<?php
/**
 * ACS Approach Philosophy
 *
 * @package Amison_Consulting
 */
?>

      <section class="py-section-padding-mobile md:py-section-padding-desktop bg-background relative overflow-hidden">
        <div class="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-soft-stone to-transparent opacity-50 pointer-events-none"></div>
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
          <div class="max-w-3xl mb-16">
            <span class="text-secondary font-label-bold text-label-bold tracking-widest uppercase block mb-4">
				      <?php the_field( 'philosophy_label' ); ?>
            </span>
            <h1 class="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-primary mb-6">
				      <?php the_field( 'philosophy_title' ); ?>
            </h1>
            <p class="font-editorial-italic text-editorial-italic text-secondary border-l-2 border-muted-brass pl-6">
				      <?php the_field( 'philosophy_quote' ); ?>
            </p>
          </div>
          <div class="grid md:grid-cols-12 gap-gutter">
            <div class="md:col-span-5">
              <p class="font-body-lg text-body-lg text-on-surface font-bold leading-relaxed">
        				<?php the_field( 'philosophy_intro' ); ?>
              </p>
              <div class="hidden md:block w-12 h-0.5 bg-muted-brass mt-8"></div>
            </div>
            <div class="md:col-span-6 md:col-start-7 flex flex-col gap-8">
              <?php if ( have_rows( 'philosophy_body' ) ) : ?>
              <?php while ( have_rows( 'philosophy_body' ) ) : the_row(); ?>
                <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  <?php echo esc_html( get_sub_field( 'paragraph' ) ); ?>
                </p>
              <?php endwhile; ?>
              <?php endif; ?>
            </div>
          </div>
        </div>
      </section>
