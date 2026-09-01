<?php
/**
 * Meet The Founder - Founder
 *
 * @package Amison_Consulting
 */
?>

    <section class="py-section-padding-mobile md:py-section-padding-desktop px-gutter md:px-gutter">
          <div class="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div class="md:col-span-6 md:pr-12 order-2 md:order-1 flex flex-col gap-6">
              <div>
                <h1 class="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-primary mb-4">
		          <?php the_field( 'founder_title' ); ?>
                </h1>
                <p class="font-editorial-italic text-editorial-italic text-primary-container">
		          <?php the_field( 'founder_tagline' ); ?>
                </p>
              </div>
              <div class="space-y-6 text-on-surface-variant max-w-prose">
                <p class="font-body-lg text-body-lg">
                  <?php the_field( 'founder_lead' ); ?>
                </p>
                <?php if ( have_rows( 'founder_bio' ) ) : ?>
                <?php while ( have_rows( 'founder_bio' ) ) : the_row(); ?>
                  <?php echo wp_kses_post( get_sub_field( 'paragraph' ) ); ?>
                <?php endwhile; ?>
                <?php endif; ?>
                <div class="p-6 bg-soft-stone rounded-lg border border-slate-gray/20">
					        <?php the_field( 'founder_audience_note' ); ?>
                </div>
              </div>
            </div>
            <div class="md:col-span-6 order-1 md:order-2 relative">
              <div class="absolute inset-0 bg-surface-container-high translate-x-4 translate-y-4 rounded-xl -z-10"></div>
              <img
        				alt="<?php the_field( 'founder_image_alt' ); ?>"
                class="w-full h-auto rounded-xl object-cover shadow-sm border border-slate-gray/10"
				        src="<?php echo esc_url( get_field( 'founder_image' )['url'] ); ?>"
              />
            </div>
          </div>
        </section>
