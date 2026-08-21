import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <>
      <footer className="bg-primary dark:bg-surface-container-lowest w-full">
        <div className="flex flex-col md:flex-row justify-between items-center w-full py-section-padding-mobile md:py-section-padding-desktop max-w-container-max mx-auto bg-primary dark:bg-surface-container-lowest flat no shadows">
          <Link
            to="/"
            className="font-headline-sm text-headline-sm font-bold text-on-primary dark:text-primary mb-8 md:mb-0"
          >
            Amison Consulting Services
          </Link>
          <div className="flex flex-wrap justify-center gap-6 mb-8 md:mb-0">
            <Link
              className="text-on-primary font-button text-button hover:text-muted-brass transition-colors duration-200"
              to="/the-acs-approach"
            >
              The ACS Approach
            </Link>
            <Link
              className="text-on-primary font-button text-button hover:text-muted-brass transition-colors duration-200"
              to="/solutions"
            >
              Explore Our Solutions
            </Link>
            <Link
              className="text-on-primary font-button text-button hover:text-muted-brass transition-colors duration-200"
              to="/meet-the-founder"
            >
              Meet The Founder
            </Link>
            <Link
              className="text-on-primary font-button text-button hover:text-muted-brass transition-colors duration-200"
              to="/faqs"
            >
              FAQs
            </Link>
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
  )
}
