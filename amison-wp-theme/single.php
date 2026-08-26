<?php
/**
 * Single Post Template
 *
 * @package Amison_Consulting
 */

get_header();
?>

<main id="main-content" class="grow">

    <?php
    while ( have_posts() ) :
        the_post();
        ?>

        <article
            id="post-<?php the_ID(); ?>"
            <?php post_class( 'single-post' ); ?>
        >

            <header class="post-header">
                <div class="mx-auto w-full max-w-container-max px-margin-mobile md:px-gutter">

                    <p class="">
                        <?php echo esc_html( get_the_date() ); ?>
                    </p>

                    <h1 class="">
                        <?php the_title(); ?>
                    </h1>

                </div>
            </header>

            <div class="post-content mx-auto w-full max-w-container-max px-margin-mobile md:px-gutter">

                <?php the_content(); ?>

            </div>

        </article>

        <?php
    endwhile;
    ?>

</main>

<?php
get_footer();