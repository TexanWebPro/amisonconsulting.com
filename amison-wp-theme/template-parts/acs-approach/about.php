<?php
/**
 * ACS Approach About
 *
 * @package Amison_Consulting
 */
?>

    <section class="py-section-padding-mobile md:py-section-padding-desktop bg-soft-stone">
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid md:grid-cols-12 gap-gutter items-center">
          <div class="md:col-span-5 relative group">
            <div class="absolute inset-0 bg-secondary translate-x-4 translate-y-4 rounded-lg -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img
              alt="<?php the_field( 'about_image_alt' ); ?>"
              class="w-full aspect-4/5 object-cover rounded-lg shadow-sm border-r-4 border-b-4 border-muted-brass"
              src="<?php echo esc_url( get_field( 'about_image' )['url'] ); ?>"
            />
          </div>
          <div class="md:col-span-6 md:col-start-7 flex flex-col gap-6 mt-12 md:mt-0">
            <h2 class="font-headline-lg text-headline-lg text-primary">
				      <?php the_field( 'about_title' ); ?>
            </h2>
            <p class="font-editorial-italic text-editorial-italic text-secondary">
				      <?php the_field( 'about_subtitle' ); ?>
            </p>
            <div class="flex flex-col gap-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
			        <?php if ( have_rows( 'about_body' ) ) : ?>
              <?php while ( have_rows( 'about_body' ) ) : the_row(); ?>
                <p>
                  <?php echo esc_html( get_sub_field( 'paragraph' ) ); ?>
                </p>
              <?php endwhile; ?>
              <?php endif; ?>

            </div>
          </div>
        </div>
    </section>
