<?php
/**
 * 404 Error Template
 *
 * @package Amison_Consulting
 */

get_header();
?>

<main className="grow flex items-center justify-center px-margin-mobile md:px-gutter py-section-padding-mobile md:py-section-padding-desktop w-full max-w-container-max mx-auto relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
        <span
        className="material-symbols-outlined text-[40vw] text-primary"
        >
        grid_4x4
        </span>
    </div>
    <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">
        <div className="mb-base relative group">
        <span className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-primary tracking-tighter opacity-10 blur-sm absolute -inset-4 transition-all duration-1000 group-hover:blur-md">
            404
        </span>
        <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-primary relative z-10">
            404
        </h1>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-gutter">
        Page Not Found
        </h2>
        <p className="font-editorial-italic text-editorial-italic text-charcoal mb-section-padding-mobile max-w-lg leading-relaxed">
        It seems the page you're looking for doesn't exist.
        <br />
        Let's get you back to clarity.
        </p>
        <div className="flex flex-col sm:flex-row gap-gutter w-full sm:w-auto">
        <a
            className="bg-primary text-on-primary font-button text-button py-3 px-6 rounded transition-colors duration-200 hover:bg-primary-container flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm hover:shadow-md"
            href="/"
        >
            Return Home
        </a>
        <a
            className="bg-transparent text-secondary font-button text-button py-3 px-6 rounded border border-secondary transition-colors duration-200 hover:bg-pale-teal flex items-center justify-center gap-2 w-full sm:w-auto"
            href="/solutions"
        >
            View Solutions
        </a>
        </div>
    </div>
</main>

<?php
get_footer();