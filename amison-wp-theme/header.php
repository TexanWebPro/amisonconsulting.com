<?php
/**
 * Header
 *
 * @package Amison_Consulting
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
    >

    <?php wp_head(); ?>

<script id="tailwind-config">
    tailwind.config = {
        theme: {
            extend: {
                "colors": {
                    "muted-brass": "#B5A67C",
                    "on-surface": "#1b1c17",
                    "secondary-fixed": "#b0edf2",
                    "tertiary": "#695e39",
                    "secondary": "#28676c",
                    "on-secondary-fixed-variant": "#034f54",
                    "on-primary": "#ffffff",
                    "tertiary-fixed-dim": "#d6c599",
                    "surface-bright": "#fbf9f1",
                    "outline": "#74777f",
                    "surface-container-lowest": "#ffffff",
                    "tertiary-container": "#baab80",
                    "surface-container-high": "#eae8e0",
                    "surface-container-low": "#f6f4ec",
                    "on-secondary-container": "#2d6b70",
                    "on-secondary": "#ffffff",
                    "pale-teal": "#D4E5E6",
                    "on-secondary-fixed": "#002022",
                    "primary-fixed-dim": "#aec7f6",
                    "secondary-container": "#adeaf0",
                    "on-error": "#ffffff",
                    "inverse-on-surface": "#f3f1e9",
                    "tertiary-fixed": "#f3e1b3",
                    "background": "#fbf9f1",
                    "charcoal": "#333333",
                    "on-tertiary-container": "#493f1e",
                    "error-container": "#ffdad6",
                    "on-tertiary-fixed-variant": "#514624",
                    "slate-gray": "#708090",
                    "outline-variant": "#c4c6cf",
                    "surface": "#fbf9f1",
                    "on-tertiary-fixed": "#231b01",
                    "surface-tint": "#465f88",
                    "soft-stone": "#EAE8E1",
                    "on-tertiary": "#ffffff",
                    "inverse-surface": "#30312c",
                    "on-error-container": "#93000a",
                    "on-primary-container": "#708ab5",
                    "on-background": "#1b1c17",
                    "on-surface-variant": "#44474e",
                    "on-primary-fixed": "#001b3d",
                    "error": "#ba1a1a",
                    "primary-fixed": "#d6e3ff",
                    "primary": "#000a1e",
                    "surface-container-highest": "#e4e3db",
                    "on-primary-fixed-variant": "#2d476f",
                    "surface-container": "#f0eee6",
                    "surface-dim": "#dcdad2",
                    "primary-container": "#002147",
                    "inverse-primary": "#aec7f6",
                    "surface-variant": "#e4e3db",
                    "secondary-fixed-dim": "#94d1d6"
                },
                "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
                },
                "spacing": {
                    "gutter": "24px",
                    "margin-mobile": "20px",
                    "section-padding-desktop": "120px",
                    "container-max": "1280px",
                    "base": "8px",
                    "section-padding-mobile": "64px"
                },
                "fontFamily": {
                    "headline-sm": ["DM Sans"],
                    "headline-lg": ["DM Sans"],
                    "headline-md": ["DM Sans"],
                    "body-md": ["\"Source Sans 3\""],
                    "label-bold": ["DM Sans"],
                    "editorial-italic": ["EB Garamond"],
                    "display-hero-mobile": ["DM Sans"],
                    "body-lg": ["\"Source Sans 3\""],
                    "button": ["DM Sans"],
                    "display-hero": ["DM Sans"]
                },
                "fontSize": {
                    "headline-sm": ["19px", { "lineHeight": "1.5", "fontWeight": "600" }],
                    "headline-lg": ["34px", { "lineHeight": "1.3", "fontWeight": "700" }],
                    "headline-md": ["24px", { "lineHeight": "1.4", "fontWeight": "600" }],
                    "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                    "label-bold": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "700" }],
                    "editorial-italic": ["22px", { "lineHeight": "1.6", "fontWeight": "400" }],
                    "display-hero-mobile": ["38px", { "lineHeight": "1.2", "fontWeight": "700" }],
                    "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                    "button": ["16px", { "lineHeight": "1", "fontWeight": "600" }],
                    "display-hero": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }]
                }
            }
        }
    }
    </script>
</head>

<body <?php body_class(); ?>>

<?php wp_body_open(); ?>
    <nav class="bg-background dark:bg-background sticky z-50">
        <div class="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto bg-background dark:bg-background">
            <div class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">
                <a href="/">
					<?php 
						$custom_logo_id = get_theme_mod( 'custom_logo' );
						$logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );
						if ( has_custom_logo() ) {
							echo '<img class="w-50" src="' . esc_url( $logo[0] ) . '" alt="' . get_bloginfo( 'name' ) . '">';
						} else {
							echo '<h1>' . get_bloginfo('name') . '</h1>';
						}
					?>
                </a>
            </div>
			<?php 
				add_filter( 'nav_menu_css_class', 'amison_menu_item_class', 10, 4 );

				function amison_menu_item_class( $classes, $item, $args, $depth ) {

					if ( $args->theme_location !== 'primary' ) {
						$classes[] = 'flex flex-wrap justify-center gap-6 mb-8 md:mb-0 text-on-primary font-button text-button hover:text-muted-brass transition-colors duration-200';
						return $classes;
					}

					// Get the menu items in their actual menu order.
					$menu_items = wp_get_nav_menu_items( $args->menu );

					if ( ! $menu_items ) {
						return $classes;
					}

					return $classes;
				}						

			add_filter( 'nav_menu_link_attributes', 'amison_menu_link_attributes', 10, 4 );

            function amison_menu_link_attributes( $atts, $item, $args, $depth ) {

                if ( $args->theme_location !== 'primary' ) {
                    return $atts;
                }

                // Get the menu items in their actual menu order.
                $menu_items = wp_get_nav_menu_items( $args->menu );

                if ( ! $menu_items ) {
                    return $atts;
                }

                // Get only top-level menu items.
                $top_level_items = array_values(
                    array_filter(
                        $menu_items,
                        function ( $menu_item ) {
                            return (int) $menu_item->menu_item_parent === 0;
                        }
                    )
                );

                // Get the final top-level menu item.
                $last_item = end( $top_level_items );

                if ( $last_item && $item->ID === $last_item->ID ) {

                    // Final menu item = CTA.
                    $atts['class'] = 'bg-primary text-on-primary font-button text-button px-6 py-3 rounded-DEFAULT hover:opacity-90 transition-opacity';

                } else {

                    // All other menu items = normal navigation.
                    $atts['class'] = 'text-on-surface dark:text-on-surface-variant font-button text-button hover:text-muted-brass transition-colors duration-200';

                }

                return $atts;
            }
			
			wp_nav_menu( array(
				'theme_location'  => 'primary',                // (string) Identified slug from register_nav_menus()
				'menu'            => '',                // (int|string|WP_Term) Accepts menu ID, slug, or name
				'container'       => 'nav',             // (string) What to wrap the ul with ('div' or 'nav'). Use false for no container.
				'container_class' => '',                // (string) Class applied to the container element
				'container_id'    => '',                // (string) ID applied to the container element
				'container_aria_label' => '',           // (string) The aria-label attribute for the container element
				'menu_class'      => 'hidden md:flex space-x-8 items-center',            // (string) Class applied to the <ul> element
				'menu_id'         => '',                // (string) ID applied to the <ul> element
				'echo'            => true,              // (bool) True to print the menu, false to return string output
				'fallback_cb'     => 'wp_page_menu',    // (callable|bool) Fallback function if menu/location doesn't exist
				'before'          => '',                // (string) HTML text prepended to each <a> element link
				'after'           => '',                // (string) HTML text appended after each <a> element link
				'link_before'     => '',                // (string) HTML text prepended to link text (inside <a>)
				'link_after'      => '',                // (string) HTML text appended after link text (inside <a>)
				'items_wrap'      => '<ul id="%1$s" class="%2$s" style="list-style-type: none;">%3$s</ul>', // (string) How the list items are wrapped
				'item_spacing'    => 'preserve',        // (string) 'preserve' or 'discard' whitespace in HTML output
				'depth'           => 0,                 // (int) Max depth for nested dropdowns (0 = all levels, -1 = flat list)
				'walker'          => '',                // (object) Custom walker instance (e.g., new Custom_Nav_Walker)
			) ); ?>


            <button
            class="md:hidden p-2 text-icon-gold active:scale-95 duration-200 hover:bg-muted-brass transition-colors rounded-full flex items-center justify-center"
            id="menu-btn"
            >
                <span
                    class="material-symbols-outlined"
                >
                    menu
                </span>
            </button>
        </div>
    </nav>
