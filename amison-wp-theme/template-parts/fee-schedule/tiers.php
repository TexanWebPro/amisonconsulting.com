<?php
/**
 * Fee Schedule - Tiers
 *
 * @package Amison_Consulting
 */
?>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">

    <?php if ( have_rows( 'fee_schedule_tiers' ) ) : ?>

        <?php while ( have_rows( 'fee_schedule_tiers' ) ) : the_row(); ?>

            <?php
            $is_primary = (bool) get_sub_field( 'tier_primary' );
            $row_index  = get_row_index();

            /*
             * Determine the visual treatment.
             * Primary tiers always receive the Enterprise treatment.
             * Otherwise, normal tiers alternate between the two backgrounds.
             */
            if ( $is_primary ) {

                $card_classes   = 'bg-primary-container border border-primary-container rounded-xl p-8 shadow-lg flex flex-col h-full group relative overflow-hidden';
                $corner_classes = 'bg-white/40 w-42 h-42 -mr-16 -mt-16';
                $heading_color  = 'text-surface-container-lowest';
                $label_color    = 'text-pale-teal';
                $price_classes  = 'text-xl text-white';
                $body_color     = 'text-surface-container-lowest';
                $icon_color     = 'text-secondary-fixed';
                $button_classes  = 'bg-secondary text-on-secondary hover:bg-secondary/90';

            } elseif ( $row_index % 2 === 0 ) {

                $card_classes   = 'bg-soft-stone border border-slate-gray/20 rounded-xl p-8 hover:shadow-[0_12px_24px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full group relative overflow-hidden';
                $corner_classes = 'bg-secondary w-48 h-48 -mr-24 -mt-24';
                $heading_color  = 'text-primary';
                $label_color    = 'text-slate-gray';
                $price_classes  = 'text-3xl text-secondary';
                $body_color     = 'text-charcoal';
                $icon_color     = 'text-secondary';
                $button_classes  = 'bg-primary text-on-primary hover:bg-primary/90';

            } else {

                $card_classes   = 'bg-surface-container-lowest border border-slate-gray/20 rounded-xl p-8 hover:shadow-[0_12px_24px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full group relative overflow-hidden';
                $corner_classes = 'bg-pale-teal/20 w-32 h-32 -mr-16 -mt-16';
                $heading_color  = 'text-primary';
                $label_color    = 'text-slate-gray';
                $price_classes  = 'text-3xl text-secondary';
                $body_color     = 'text-charcoal';
                $icon_color     = 'text-secondary';
                $button_classes  = 'bg-primary text-on-primary hover:bg-primary/90';

            }
            ?>

            <div class="<?php echo esc_attr( $card_classes ); ?>">

                <div class="absolute top-0 right-0 <?php echo esc_attr( $corner_classes ); ?> rounded-bl-full transition-transform group-hover:scale-110"></div>

                <div class="mb-8 relative z-10">

                    <h2 class="font-headline-md text-headline-md <?php echo esc_attr( $heading_color ); ?> mb-2">
                        <?php echo esc_html( get_sub_field( 'tier_title' ) ); ?>
                    </h2>

                    <?php if ( get_sub_field( 'tier_label' ) ) : ?>

                        <p class="font-label-bold text-label-bold <?php echo esc_attr( $label_color ); ?> mb-2 uppercase tracking-wider">
                            <?php echo esc_html( get_sub_field( 'tier_label' ) ); ?>
                        </p>

                    <?php endif; ?>

                    <div class="<?php echo esc_attr( $price_classes ); ?> font-bold mb-4">
                        <?php echo esc_html( get_sub_field( 'tier_price' ) ); ?>
                    </div>

                    <?php if ( get_sub_field( 'tier_description' ) ) : ?>

                        <p class="font-body-md text-body-md <?php echo esc_attr( $body_color ); ?> font-semibold">
                            <?php echo esc_html( get_sub_field( 'tier_description' ) ); ?>
                        </p>

                    <?php endif; ?>

                </div>

                <ul class="space-y-4 mb-10 grow relative z-10">

                    <?php if ( have_rows( 'tier_items' ) ) : ?>

                        <?php while ( have_rows( 'tier_items' ) ) : the_row(); ?>

                            <li class="flex items-start">

                                <span class="material-symbols-outlined <?php echo esc_attr( $icon_color ); ?> mr-3 mt-1 text-xl">
                                    check_circle
                                </span>

                                <span class="font-body-md text-body-md <?php echo esc_attr( $body_color ); ?>">
                                    <?php echo esc_html( get_sub_field( 'item' ) ); ?>
                                </span>

                            </li>

                        <?php endwhile; ?>

                    <?php endif; ?>

                </ul>

                <?php
                $button_url = get_sub_field( 'tier_button_url' );
                $button_text = get_sub_field( 'tier_button_text' );
                ?>

                <?php if ( $button_url ) : ?>

                    <a
                        class="inline-flex justify-center items-center <?php echo esc_attr( $button_classes ); ?> font-button text-button px-6 py-4 rounded transition-colors w-full mt-auto relative z-10"
                        href="<?php echo esc_url( $button_url ); ?>"
                    >
                        <?php echo esc_html( $button_text ); ?>
                    </a>

                <?php endif; ?>

            </div>

        <?php endwhile; ?>

    <?php endif; ?>

</div>

