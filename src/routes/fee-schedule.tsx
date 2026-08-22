import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/fee-schedule')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <main className="max-w-container mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop">
        <header className="text-center mb-16 md:mb-24">
          <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-primary mb-6">
            Fee Schedule
          </h1>
          {/* <p className="font-editorial-italic text-editorial-italic text-slate-gray max-w-2xl mx-auto">
            Transparent, structured pricing for rigorous operational analysis.
          </p> */}
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <div className="bg-surface-container-lowest border border-slate-gray/20 rounded-xl p-8 hover:shadow-[0_12px_24px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pale-teal/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="mb-8 relative z-10">
              <h2 className="font-headline-md text-headline-md text-primary mb-2">
                Individuals and Solo Entrepreneurs
              </h2>
              <div className="text-3xl font-bold text-secondary mb-4">$375</div>
              <p className="font-body-md text-body-md text-charcoal font-semibold">
                Initial flat rate for individuals and solo entrepreneurs:
              </p>
            </div>
            <ul className="space-y-4 mb-10 grow relative z-10">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-charcoal">
                  Workflow bottleneck analysis
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-charcoal">
                  Process efficiency audit
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-charcoal">
                  Documentation gap review
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-charcoal">
                  Summary findings and recommendations report
                </span>
              </li>
            </ul>
            <Link
              className="inline-flex justify-center items-center bg-primary text-on-primary font-button text-button px-6 py-4 rounded hover:bg-primary/90 transition-colors w-full mt-auto relative z-10"
              to="/contact"
            >
              Inquire Now
            </Link>
          </div>
          <div className="bg-soft-stone border border-slate-gray/20 rounded-xl p-8 hover:shadow-[0_12px_24px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary rounded-bl-full -mr-24 -mt-24 transition-transform group-hover:scale-110"></div>
            <div className="mb-8 relative z-10">
              <h2 className="font-headline-md text-headline-md text-primary mb-2">
                Micro Enterprise
              </h2>
              <p className="font-label-bold text-label-bold text-slate-gray mb-2 uppercase tracking-wider">
                (2 - 10 employees)
              </p>
              <div className="text-3xl font-bold text-secondary mb-4">$500</div>
              <p className="font-body-md text-body-md text-charcoal font-semibold">
                Initial audit flat rate for micro enterprises:
              </p>
            </div>
            <ul className="space-y-4 mb-10 grow relative z-10">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-charcoal">
                  Workflow bottleneck analysis
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-charcoal">
                  Process efficiency audit
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-charcoal">
                  Documentation gap review
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-charcoal">
                  Resource allocation analysis
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-charcoal">
                  Summary findings and recommendations report
                </span>
              </li>
            </ul>
            <Link
              className="inline-flex justify-center items-center bg-primary text-on-primary font-button text-button px-6 py-4 rounded hover:bg-primary/90 transition-colors w-full mt-auto relative z-10"
              to="/contact"
            >
              Inquire Now
            </Link>
          </div>
          <div className="bg-surface-container-lowest border border-slate-gray/20 rounded-xl p-8 hover:shadow-[0_12px_24px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pale-teal/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="mb-8 relative z-10">
              <h2 className="font-headline-md text-headline-md text-primary mb-2">
                Small Business
              </h2>
              <p className="font-label-bold text-label-bold text-slate-gray mb-2 uppercase tracking-wider">
                (11 - 50 employees)
              </p>
              <div className="text-3xl font-bold text-secondary mb-4">
                $1000
              </div>
              <p className="font-body-md text-body-md text-charcoal font-semibold">
                Initial audit flat rate for Small Businesses up to 50 employees:
              </p>
            </div>
            <ul className="space-y-4 mb-10 grow relative z-10">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-charcoal">
                  Comprehensive operational review
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-charcoal">
                  Department workflow mapping
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-charcoal">
                  Custom policy framework assessment
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-charcoal">
                  Documentation gap review
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-charcoal">
                  Resource allocation analysis
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-charcoal">
                  Summary findings and recommendations report
                </span>
              </li>
            </ul>
            <Link
              className="inline-flex justify-center items-center bg-primary text-on-primary font-button text-button px-6 py-4 rounded hover:bg-primary/90 transition-colors w-full mt-auto relative z-10"
              to="/contact"
            >
              Inquire Now
            </Link>
          </div>
          <div className="bg-primary-container border border-primary-container rounded-xl p-8 shadow-lg flex flex-col h-full group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-42 h-42 bg-white/40 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>

            <div className="mb-8 relative z-10">
              <h2 className="font-headline-md text-headline-md text-surface-container-lowest mb-2">
                51+ Employees
              </h2>
              <p className="font-label-bold text-label-bold text-pale-teal mb-2 uppercase tracking-wider">
                Enterprise Level
              </p>
              <div className="text-xl font-bold text-white mb-4">
                Pricing available upon request
              </div>
              <p className="font-body-md text-body-md text-surface-container-lowest font-semibold">
                Initial audit flat rate for larger enterprises:
              </p>
            </div>
            <ul className="space-y-4 mb-10 grow relative z-10">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary-fixed mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-surface-container-lowest">
                  Department or Enterprise-wide diagnostic assessment
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary-fixed mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-surface-container-lowest">
                  Detailed operational audit
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary-fixed mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-surface-container-lowest">
                  Custom workflow re-engineering
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary-fixed mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-surface-container-lowest">
                  Policy compliance audit
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary-fixed mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-surface-container-lowest">
                  Executive Summary of findings and recommendations
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary-fixed mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-surface-container-lowest">
                  Comprehensive operational review
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary-fixed mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-surface-container-lowest">
                  Department workflow mapping
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary-fixed mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-surface-container-lowest">
                  Custom policy framework assessment
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary-fixed mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-surface-container-lowest">
                  Documentation gap review
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary-fixed mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-surface-container-lowest">
                  Resource allocation analysis
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary-fixed mr-3 mt-1 text-xl">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-surface-container-lowest">
                  Summary findings report
                </span>
              </li>
            </ul>
            <Link
              className="inline-flex justify-center items-center bg-secondary text-on-secondary font-button text-button px-6 py-4 rounded hover:bg-secondary/90 transition-colors w-full mt-auto relative z-10"
              to="/contact"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
