<?php
/**
 * Footer
 *
 * @package Amison_Consulting
 */
?>
    <footer class="bg-primary dark:bg-surface-container-lowest w-full">
        <div class="flex flex-col md:flex-row justify-between items-center w-full py-section-padding-mobile md:py-section-padding-desktop max-w-container-max mx-auto bg-primary dark:bg-surface-container-lowest flat no shadows">
            <a
            href="/"
            class="font-headline-sm text-headline-sm font-bold text-on-primary dark:text-primary mb-8 md:mb-0"
            >
            Amison Consulting Services
            </a>
			<?php
                
                wp_nav_menu( array(
                    'theme_location'  => 'footer',                // (string) Identified slug from register_nav_menus()
                    'container'       => false,             // (string) What to wrap the ul with ('div' or 'nav'). Use false for no container.
                    'menu_class'      => 'flex flex-wrap justify-center gap-6 mb-8 md:mb-0 text-on-primary text-button',            // (string) Class applied to the <ul> element
                    'echo'            => true,              // (bool) True to print the menu, false to return string output
                    'fallback_cb'     => '',    // (callable|bool) Fallback function if menu/location doesn't exist
                    'items_wrap'      => '<ul id="%1$s" class="%2$s" style="list-style-type: none; color: #FFF;">%3$s</ul>', // (string) How the list items are wrapped
                    'item_spacing'    => 'preserve',        // (string) 'preserve' or 'discard' whitespace in HTML output
                    'depth'           => 0,                 // (int) Max depth for nested dropdowns (0 = all levels, -1 = flat list)
                ) );
            ?>
            <div class="font-body-md text-body-md text-on-primary dark:text-primary opacity-80 text-center md:text-right">
            © <?php echo date('Y'); ?> Amison Consulting Services. All rights reserved.
            </div>
        </div>
    </footer>
</body>
</html>