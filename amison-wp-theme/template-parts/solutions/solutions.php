<?php
/**
 * Solutions - Solutions
 *
 * @package Amison_Consulting
 */
?>

<?php if ( have_rows( 'solution_items' ) ) : ?>

    <?php while ( have_rows( 'solution_items' ) ) : the_row(); ?>

        <?php
        $solution_number = get_row_index();
        $title           = get_sub_field( 'title' );
        $description     = get_sub_field( 'description' );

        $services = get_sub_field( 'services' );
        $benefits = get_sub_field( 'benefits' );

        $is_odd = $solution_number % 2 !== 0;
        ?>

        <section class="py-12 md:py-16 px-margin-mobile md:px-gutter bg-surface">
            <div class="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                <?php if ( $is_odd ) : ?>

                    <!-- Heading: LEFT -->
                    <div class="md:col-span-5 relative">
                        <div class="absolute -top-4 -left-4 w-24 h-24 bg-pale-teal rounded-full opacity-50 z-0"></div>

                        <h2 class="font-headline-lg text-headline-lg text-primary relative z-10 mb-2">
                            <span class="text-secondary text-sm font-label-bold tracking-widest block mb-2">
                                § <?php echo esc_html( str_pad( $solution_number, 3, '0', STR_PAD_LEFT ) ); ?>
                            </span>

                            <?php echo esc_html( $title ); ?>
                        </h2>
                    </div>

                <?php endif; ?>


                <!-- Content Card -->
                <div class="md:col-span-7 bg-white p-8 rounded-lg border border-slate-gray/20 card-hover <?php echo $is_odd ? '' : 'order-2 md:order-1'; ?>">

                    <p class="font-body-md text-body-md text-on-surface mb-6">
                        <?php echo wp_kses_post( $description ); ?>
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

                        <!-- Services -->
                        <div>
                            <h4 class="font-label-bold text-label-bold text-primary mb-3 flex items-center">
                                <span class="material-symbols-outlined text-secondary mr-2">
                                    <?php echo esc_html( $services['icon'] ); ?>
                                </span>

                                <?php echo esc_html( $services['heading'] ); ?>
                            </h4>

                            <ul class="space-y-2 font-body-md text-body-md text-on-surface-variant">

                                <?php if ( ! empty( $services['items'] ) ) : ?>
                                    <?php foreach ( $services['items'] as $item ) : ?>

                                        <li class="flex items-start">
                                            <span class="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                                                check
                                            </span>

                                            <?php echo esc_html( $item['text'] ); ?>
                                        </li>

                                    <?php endforeach; ?>
                                <?php endif; ?>

                            </ul>
                        </div>


                        <!-- Benefits -->
                        <div>
                            <h4 class="font-label-bold text-label-bold text-primary mb-3 flex items-center">
                                <span class="material-symbols-outlined text-secondary mr-2">
                                    <?php echo esc_html( $benefits['icon'] ); ?>
                                </span>

                                <?php echo esc_html( $benefits['heading'] ); ?>
                            </h4>

                            <ul class="space-y-2 font-body-md text-body-md text-on-surface-variant">

                                <?php if ( ! empty( $benefits['items'] ) ) : ?>
                                    <?php foreach ( $benefits['items'] as $item ) : ?>

                                        <li class="flex items-start">
                                            <span class="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                                                check
                                            </span>

                                            <?php echo esc_html( $item['text'] ); ?>
                                        </li>

                                    <?php endforeach; ?>
                                <?php endif; ?>

                            </ul>
                        </div>

                    </div>
                </div>


                <?php if ( ! $is_odd ) : ?>

                    <!-- Heading: RIGHT -->
                    <div class="md:col-span-5 relative order-1 md:order-2 md:pl-12">
                        <div class="absolute -top-4 -left-4 md:-left-8 w-24 h-24 bg-pale-teal rounded-full opacity-50 z-0"></div>

                        <h2 class="font-headline-lg text-headline-lg text-primary relative z-10 mb-2">
                            <span class="text-secondary text-sm font-label-bold tracking-widest block mb-2">
                                § <?php echo esc_html( str_pad( $solution_number, 3, '0', STR_PAD_LEFT ) ); ?>
                            </span>

                            <?php echo esc_html( $title ); ?>
                        </h2>
                    </div>

                <?php endif; ?>

            </div>
        </section>

    <?php endwhile; ?>

<?php endif; ?>