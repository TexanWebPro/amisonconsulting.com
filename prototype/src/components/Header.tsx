import { Link } from '@tanstack/react-router'
import { useState } from 'react'

export function Header() {
  const navLinks = [
    { to: '/the-acs-approach', label: 'The ACS Approach' },
    { to: '/solutions', label: 'Explore Our Solutions' },
    { to: '/meet-the-founder', label: 'Meet The Founder' },
    { to: '/faqs', label: 'FAQs' },
    { to: '/fee-schedule', label: 'Fee Schedule' },
    { to: '/contact', label: 'Contact Us' },
  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function toggleDrawer() {
    setMobileMenuOpen(!mobileMenuOpen)
  }

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

          <button
            className="md:hidden p-2 text-icon-gold active:scale-95 duration-200 hover:bg-muted-brass transition-colors rounded-full flex items-center justify-center"
            id="menu-btn"
            onClick={toggleDrawer}
          >
            <span
              className="material-symbols-outlined"
              // style="font-variation-settings: 'FILL' 1;"
            >
              menu
            </span>
          </button>
        </div>
      </nav>

      <div
        className="fixed inset-0 bg-deep-navy/80 backdrop-blur-sm z-55"
        id="drawer-overlay"
        onClick={toggleDrawer}
      ></div>
      <aside
        className={`md:hidden transition-all duration-300 ease-in-out bg-surface-container-low ${
          mobileMenuOpen
            ? 'h-full fixed inset-y-0 right-0 w-3/4 opacity-100 flex flex-col z-60 px-6 rounded-r-none dark:bg-deep-navy divide-border-gold-alpha shadow-2xl transition-transform'
            : 'max-h-0 opacity-0 hidden'
        }`}
        id="drawer"
      >
        <Link to="/" className="flex flex-col items-center justify-start">
          <img
            alt="Amison Consulting Company"
            className="w-3/4 object-contain py-4"
            onClick={toggleDrawer}
            src="/logo.png"
          />
        </Link>
        <nav className="flex-1 py-0 flex flex-col gap-2">
          {navLinks.map((nav) => {
            return (
              <>
                <Link
                  to={nav.to}
                  key={nav.label}
                  onClick={toggleDrawer}
                  className="px-4 py-3 text-on-surface-variant hover:bg-surface-variant hover:text-secondary font-bold transition-all duration-200 last:bg-secondary last:text-on-primary last:font-button last:text-button"
                >
                  <span className="font-label-lg text-label-lg">
                    {nav.label}
                  </span>
                </Link>
              </>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
