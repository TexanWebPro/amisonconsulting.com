<?php
/**
 * Default Page Template
 *
 * @package Amison_Consulting
 */

get_header();
?>

<main class="grow">

    <?php
    while ( have_posts() ) :
        the_post();
        ?>

        <article
            id="post-<?php the_ID(); ?>"
            <?php post_class( 'page-content' ); ?>
        >

            <header class="page-header">
                <div class="mx-auto w-full max-w-container-max px-margin-mobile md:px-gutter">
                    <h1 class="">
                        <?php the_title(); ?>
                    </h1>
                </div>
            </header>

            <div class="page-content">
                <?php the_content(); ?>
            </div>

        </article>

        <?php
    endwhile;
    ?>

</main>

<?php
get_footer();