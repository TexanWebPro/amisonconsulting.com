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

    <script>
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

    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body <?php body_class(); ?>>

<?php wp_body_open(); ?>
    <nav class="bg-background dark:bg-background sticky z-50">
        <div class="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto bg-background dark:bg-background">
            <div class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">
                <a href="/">
                    <img
                    src="/logo.png"
                    alt="Amison Consulting Company"
                    class="w-50"
                    />
                </a>
            </div>
            <div class="hidden md:flex space-x-8 items-center">
                <a
                    class="text-on-surface dark:text-on-surface-variant font-button text-button hover:text-muted-brass transition-colors duration-200"
                    href="/the-acs-approach"
                >
                    The ACS Approach
                </a>
                <a
                    class="text-on-surface dark:text-on-surface-variant font-button text-button hover:text-muted-brass transition-colors duration-200"
                    href="/solutions"
                >
                    Explore Our Solutions
                </a>
                <a
                    class="text-on-surface dark:text-on-surface-variant font-button text-button hover:text-muted-brass transition-colors duration-200"
                    href="/meet-the-founder"
                >
                    Meet The Founder
                </a>
                <a
                    class="text-on-surface dark:text-on-surface-variant font-button text-button hover:text-muted-brass transition-colors duration-200"
                    href="/faqs"
                >
                    FAQs
                </a>
                <a
                    class="text-on-surface dark:text-on-surface-variant font-button text-button hover:text-muted-brass transition-colors duration-200"
                    href="/fee-schedule"
                >
                    Fee Schedule
                </a>
                <a
                    href="/contact"
                    class="bg-primary text-on-primary font-button text-button px-6 py-3 rounded-DEFAULT hover:opacity-90 transition-opacity"
                >
                    Contact Us
                </a>
            </div>

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
