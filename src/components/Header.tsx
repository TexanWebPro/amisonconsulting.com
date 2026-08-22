import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <>
      <nav className="bg-background dark:bg-background sticky z-50">
        <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto bg-background dark:bg-background">
          <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Amison Consulting Company"
                className="w-50"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              className="text-on-surface dark:text-on-surface-variant font-button text-button hover:text-muted-brass transition-colors duration-200"
              to="/the-acs-approach"
            >
              The ACS Approach
            </Link>
            <Link
              className="text-on-surface dark:text-on-surface-variant font-button text-button hover:text-muted-brass transition-colors duration-200"
              to="/solutions"
            >
              Explore Our Solutions
            </Link>
            <Link
              className="text-on-surface dark:text-on-surface-variant font-button text-button hover:text-muted-brass transition-colors duration-200"
              to="/meet-the-founder"
            >
              Meet The Founder
            </Link>
            <Link
              className="text-on-surface dark:text-on-surface-variant font-button text-button hover:text-muted-brass transition-colors duration-200"
              to="/faqs"
            >
              FAQs
            </Link>
            <Link
              className="text-on-surface dark:text-on-surface-variant font-button text-button hover:text-muted-brass transition-colors duration-200"
              to="/fee-schedule"
            >
              Fee Schedule
            </Link>
            <Link
              to="/contact"
              className="bg-primary text-on-primary font-button text-button px-6 py-3 rounded-DEFAULT hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
