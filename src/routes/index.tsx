import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <main>
        <Hero />
        <Value />
        <Roadmap />
        <Cta />
      </main>
    </>
  )
}

function Hero() {
  return (
    <>
      <section className="py-section-padding-mobile md:py-section-padding-desktop px-margin-mobile md:px-gutter max-w-container-max mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-6">
          <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-primary flex flex-col">
            <span>Process</span>
            <span>Improvement</span>
            <span>Advisor</span>
          </h1>
          <p className="font-headline-sm text-headline-sm text-on-surface-variant">
            Clear processes. Better ways of working.
          </p>
          <p className="w-3/4">
            ACS helps individuals and small businesses bring order to
            disorganization, simplify challenging workflows, and create
            practical solutions that make everyday responsibilities easier to
            manage.
          </p>
          <span className="flex flex-row gap-4">
            <Link
              to="/contact"
              className="bg-secondary text-on-primary font-button text-button px-8 py-4 rounded-DEFAULT hover:opacity-90 transition-opacity mt-4"
            >
              Book a Consult
            </Link>

            <Link
              to="/the-acs-approach"
              className="bg-primary text-on-primary font-button text-button px-8 py-4 rounded-DEFAULT hover:opacity-90 transition-opacity mt-4"
            >
              Our Methodology
            </Link>
          </span>
        </div>
        <div className="md:w-1/2 w-full h-100 md:h-150 rounded-lg overflow-hidden border border-slate-gray/20">
          <div
            className="bg-cover bg-center w-full h-full"
            data-alt="A modern, well-lit corporate boardroom featuring a large glass table, comfortable ergonomic chairs, and large windows overlooking a city skyline. The room is bathed in soft, natural daylight with a warm ivory and deep navy color palette, conveying a sense of professional organization and collaborative spirit in a minimalist, high-end consulting environment."
            style={{
              backgroundImage: "url('/images/Working Together2.png')",
            }}
          ></div>
        </div>
      </section>
    </>
  )
}

function Value() {
  return (
    <>
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low border-y border-slate-gray/10">
        <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              THE VALUE
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Better processes create better possibilities.
            </p>
          </div>
          <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
            <div className="text-center mb-20">
              <div className="mb-16 p-8 bg-soft-stone/50 border-l-4 border-muted-brass rounded-r-lg text-left max-w-4xl mx-auto">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  ACS helps solopreneurs, microenterprises, small businesses,
                  and select individuals understand what is getting in the way
                  of their progress. Through thoughtful assessment and practical
                  improvement, we help replace guesswork and disorganization
                  with clearer workflows, documented procedures, and sustainable
                  ways of working.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-soft-stone p-8 rounded-lg border border-slate-gray/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-pale-teal flex items-center justify-center mb-6 text-primary">
                <span
                  className="material-symbols-outlined"
                  data-icon="search"
                  // style="font-variation-settings: 'FILL' 1;"
                >
                  search
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">
                Identify
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We examine how work is currently being performed to uncover
                bottlenecks, duplication, unclear responsibilities, and other
                sources of friction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-slate-gray/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-pale-teal flex items-center justify-center mb-6 text-primary">
                <span
                  className="material-symbols-outlined"
                  data-icon="trending_up"
                  // style="font-variation-settings: 'FILL' 1;"
                >
                  trending_up
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">
                Improve
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We recommend and develop practical solutions—including
                streamlined workflows, easy-to-follow process guides,
                checklists, policies, procedures, and other resources tailored
                to the needs identified during the assessment.
              </p>
            </div>
            <div className="bg-soft-stone p-8 rounded-lg border border-slate-gray/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-pale-teal flex items-center justify-center mb-6 text-primary">
                <span
                  className="material-symbols-outlined"
                  data-icon="autorenew"
                  // style="font-variation-settings: 'FILL' 1;"
                >
                  autorenew
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">
                Sustain
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We support implementation and process adoption so improvements
                can become part of everyday operations and continue to serve the
                people and goals involved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Roadmap() {
  return (
    <>
      <section className="py-section-padding-mobile md:py-section-padding-desktop px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 top-32">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              THE ROADMAP
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              A clear path from operational challenges to practical solutions.
            </p>
            <img
              className="w-full rounded-lg object-cover border border-slate-gray/20 h-64"
              src="/images/structured_workspace_ledger2.jpg"
            />
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <div className="relative pl-10 border-l border-slate-gray/30 pb-4">
              <div className="absolute -left-4.25 top-0 w-8 h-8 rounded-full bg-background border-2 border-secondary flex items-center justify-center font-label-bold text-secondary ">
                01
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                Initial Consultation
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A complimentary 30-minute conversation to understand your goals
                and challenges.
              </p>
            </div>
            <div className="relative pl-10 border-l border-slate-gray/30 pb-4">
              <div className="absolute -left-4.25 top-0 w-8 h-8 rounded-full bg-background border-2 border-secondary flex items-center justify-center font-label-bold text-secondary">
                02
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                Operational Assessment
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A focused review of your workflows, procedures, and operations
                inefficiencies and areas of improvement.
              </p>
            </div>
            <div className="relative pl-10 border-l border-slate-gray/30 pb-4">
              <div className="absolute -left-4.25 top-0 w-8 h-8 rounded-full bg-background border-2 border-secondary flex items-center justify-center font-label-bold text-secondary">
                03
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                Customized Recommendations
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A prioritized report outlining tailored improvement
                recommendations.
              </p>
            </div>
            <div className="relative pl-10 border-l border-slate-gray/30 pb-4">
              <div className="absolute -left-4.25 top-0 w-8 h-8 rounded-full bg-background border-2 border-secondary flex items-center justify-center font-label-bold text-secondary">
                04
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                Service Agreement
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Clear scope, deliverables, fees, and expectations before work
                begins.
              </p>
            </div>
            <div className="relative pl-10 border-l border-slate-gray/30 pb-4">
              <div className="absolute -left-4.25 top-0 w-8 h-8 rounded-full bg-background border-2 border-secondary flex items-center justify-center font-label-bold text-secondary">
                05
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                Implementation
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Develop and integrate the approved workflows, procedures, and
                process guides.
              </p>
            </div>
            <div className="relative pl-10 border-l border-slate-gray/30 pb-4">
              <div className="absolute -left-4.25 top-0 w-8 h-8 rounded-full bg-background border-2 border-secondary flex items-center justify-center font-label-bold text-secondary">
                06
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                Ongoing Support
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Additional projects or dedicated monthly support as your needs
                evolve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Cta() {
  return (
    <>
      <section className="w-full px-margin-mobile md:px-gutter py-section-padding-mobile md:py-section-padding-desktop bg-soft-stone/30 border-t border-soft-stone">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          <div className="md:w-5/12 flex flex-col items-start">
            <div className="w-16 h-16 rounded-full bg-muted-brass/10 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-4xl text-muted-brass font-light">
                schedule
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary leading-tight tracking-tight">
              BEGIN THE
              <br />
              CONVERSATION
            </h2>
            <div className="h-0.5 w-12 bg-muted-brass mt-8 hidden md:block"></div>
          </div>

          <div className="md:w-7/12 flex flex-col items-start">
            <p className="font-body-lg text-body-lg text-primary mb-8 leading-relaxed">
              Schedule a complimentary 30-minute virtual consultation with our
              Process Improvement Advisor to discuss what is not working,
              clarify your goals, and explore practical ways ACS can support
              you.
            </p>
            <p className="font-body-md text-body-md text-primary mb-12 leading-relaxed">
              This initial conversation is an opportunity to share your
              challenges, ask questions, and determine whether ACS is the right
              fit for your business or personal organization needs.
            </p>
            <Link
              to="/contact"
              className="bg-secondary text-on-primary font-button text-button px-10 py-4 rounded hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
