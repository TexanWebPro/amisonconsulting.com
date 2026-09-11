<?php
/**
 * FAQs - Fees
 *
 * @package Amison_Consulting
 */
?>

      <section class="bg-surface py-20 md:py-32 px-margin-mobile md:px-section-padding-desktop">
        <div class="max-w-container-max mx-auto">
          <div class="mb-16">
            <h2 class="font-headline-lg text-headline-lg text-primary-container">
              <?php the_field("fees_header") ?>
            </h2>
          </div>
          <div class="flex flex-col lg:flex-row gap-16">
            <div class="lg:w-1/3 space-y-12">
              <?php if ( have_rows( 'fees_left_qa' ) ) : ?>
              <?php while ( have_rows( 'fees_left_qa' ) ) : the_row(); ?>
                <?php
                  $row_index = get_row_index();
                  $card_background = ( $row_index % 2 === 0 ) ? 'bg-primary-container text-on-primary' : 'bg-soft-stone';
                ?>
                  <div class="<?php echo esc_attr( $card_background ); ?> p-8 rounded-lg border border-slate-gray/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300">
                    <h3 class="font-headline-md text-headline-md mb-3">
                      <?php echo esc_html( get_sub_field( 'question' ) ); ?>
                    </h3>

                    <p class="font-body-md text-body-md text-on-surface-variant">
                      <?php echo wp_kses_post( get_sub_field( 'answer' ) ); ?>
                    </p>
                  </div>

              <?php endwhile; ?>
              <?php endif; ?>             
            </div>
            <div class="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              <?php if ( have_rows( 'fees_half_width_qa' ) ) : ?>
    					<?php while ( have_rows( 'fees_half_width_qa' ) ) : the_row(); ?>
                <div>
                  <h3 class="font-headline-md text-headline-md text-primary-container mb-4">
                    <?php echo esc_html( get_sub_field( 'question' ) ); ?>
                  </h3>
                  <p class="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    <?php echo wp_kses_post( get_sub_field( 'answer' ) ); ?>
                  </p>
                </div>
			    		<?php endwhile; ?>
				      <?php endif; ?>
            </div>
          </div>
        </div>
      </section>
