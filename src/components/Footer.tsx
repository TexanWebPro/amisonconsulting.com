export function Footer() {
  return (
    <>
      <footer className="bg-primary dark:bg-surface-container-lowest w-full">
        <div className="flex flex-col md:flex-row justify-between items-center w-full py-section-padding-mobile md:py-section-padding-desktop max-w-container-max mx-auto bg-primary dark:bg-surface-container-lowest flat no shadows">
          <div className="font-headline-sm text-headline-sm font-bold text-on-primary dark:text-primary mb-8 md:mb-0">
            Amison Consulting Services
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8 md:mb-0">
            <a
              className="text-on-primary font-button text-button hover:text-muted-brass transition-colors duration-200"
              href="#"
            >
              The ACS Approach
            </a>
            <a
              className="text-on-primary font-button text-button hover:text-muted-brass transition-colors duration-200"
              href="#"
            >
              Explore Our Solutions
            </a>
            <a
              className="text-on-primary font-button text-button hover:text-muted-brass transition-colors duration-200"
              href="#"
            >
              Meet The Founder
            </a>
            <a
              className="text-on-primary font-button text-button hover:text-muted-brass transition-colors duration-200"
              href="#"
            >
              FAQs
            </a>
            <a
              className="text-on-primary font-button text-button hover:text-muted-brass transition-colors duration-200"
              href="#"
            >
              Fee Schedule
            </a>
          </div>
          <div className="font-body-md text-body-md text-on-primary dark:text-primary opacity-80 text-center md:text-right">
            © 2024 Amison Consulting Services. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
