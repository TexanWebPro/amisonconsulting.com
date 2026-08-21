import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/solutions')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <main className="grow">
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-margin-mobile md:px-gutter max-w-container-max mx-auto text-center">
          <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-primary mb-6 max-w-4xl mx-auto">
            From Challenges to Clarity
          </h1>
          <p className="font-editorial-italic text-editorial-italic text-secondary mb-8 max-w-2xl mx-auto">
            Practical solutions for better ways of working.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            ACS provides practical support designed to help clients understand
            what is not working, determine what needs to change, and create
            clearer, more efficient ways of working. Services are customized to
            the needs identified during the assessment and may include workflow
            improvement, operational documentation, implementation support, and
            limited personal organization services.
          </p>
        </section>
        <section className="py-12 md:py-16 px-margin-mobile md:px-gutter bg-surface">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-pale-teal rounded-full opacity-50 z-0"></div>
              <h2 className="font-headline-lg text-headline-lg text-primary relative z-10 mb-2">
                <span className="text-secondary text-sm font-label-bold tracking-widest block mb-2">
                  § 001
                </span>
                WORKFLOW OPTIMIZATION
              </h2>
            </div>
            <div className="md:col-span-7 bg-white p-8 rounded-lg border border-slate-gray/20 card-hover">
              <p className="font-body-md text-body-md text-on-surface mb-6">
                We examine how work is currently being performed to identify
                bottlenecks, duplicate efforts, and communication breakdowns. We
                then develop improved, streamlined processes that make sense for
                the organization's current resources.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-label-bold text-label-bold text-primary mb-3 flex items-center">
                    <span
                      className="material-symbols-outlined text-secondary mr-2"
                      // style="font-variation-settings: 'FILL' 1;"
                    >
                      build
                    </span>{' '}
                    Services may include
                  </h4>
                  <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Process mapping and analysis
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Workflow redesign
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Role and responsibility clarification
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Tool utilization assessment
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label-bold text-label-bold text-primary mb-3 flex items-center">
                    <span
                      className="material-symbols-outlined text-secondary mr-2"
                      // style="font-variation-settings: 'FILL' 1;"
                    >
                      trending_up
                    </span>{' '}
                    Benefits
                  </h4>
                  <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Reduced time waste
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Fewer errors
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Reduced frustration
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Increased output quality
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 px-margin-mobile md:px-gutter bg-surface">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 bg-white p-8 rounded-lg border border-slate-gray/20 card-hover order-2 md:order-1">
              <p className="font-body-md text-body-md text-on-surface mb-6">
                Clear documentation is essential for consistent operations and
                smooth transitions. We help translate implicit knowledge into
                structured, accessible documentation that serves as a reliable
                reference for your team.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-label-bold text-label-bold text-primary mb-3 flex items-center">
                    <span
                      className="material-symbols-outlined text-secondary mr-2"
                      // style="font-variation-settings: 'FILL' 1;"
                    >
                      description
                    </span>{' '}
                    Services may include
                  </h4>
                  <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Standard operating procedures
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Policy manuals
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Training materials
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Knowledge base creation
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label-bold text-label-bold text-primary mb-3 flex items-center">
                    <span
                      className="material-symbols-outlined text-secondary mr-2"
                      // style="font-variation-settings: 'FILL' 1;"
                    >
                      verified
                    </span>{' '}
                    Benefits
                  </h4>
                  <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Consistency in execution
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Easier onboarding
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Reduced key-person dependency
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Clearer organizational standards
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 relative order-1 md:order-2 md:pl-12">
              <div className="absolute -top-4 -left-4 md:-left-8 w-24 h-24 bg-pale-teal rounded-full opacity-50 z-0"></div>
              <h2 className="font-headline-lg text-headline-lg text-primary relative z-10 mb-2">
                <span className="text-secondary text-sm font-label-bold tracking-widest block mb-2">
                  § 002
                </span>
                OPERATIONAL DOCUMENTATION
              </h2>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 px-margin-mobile md:px-gutter bg-surface">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-pale-teal rounded-full opacity-50 z-0"></div>
              <h2 className="font-headline-lg text-headline-lg text-primary relative z-10 mb-2">
                <span className="text-secondary text-sm font-label-bold tracking-widest block mb-2">
                  § 003
                </span>
                IMPLEMENTATION &amp; SUPPORT
              </h2>
            </div>
            <div className="md:col-span-7 bg-white p-8 rounded-lg border border-slate-gray/20 card-hover">
              <p className="font-body-md text-body-md text-on-surface mb-6">
                Designing a solution is only the first step. We provide hands-on
                support during the rollout phase to ensure that new processes
                are adopted effectively and adjustments can be made based on
                real-world feedback.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-label-bold text-label-bold text-primary mb-3 flex items-center">
                    <span
                      className="material-symbols-outlined text-secondary mr-2"
                      // style="font-variation-settings: 'FILL' 1;"
                    >
                      handshake
                    </span>{' '}
                    Services may include
                  </h4>
                  <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Change management
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      System rollout assistance
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Team training
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Progress monitoring
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label-bold text-label-bold text-primary mb-3 flex items-center">
                    <span
                      className="material-symbols-outlined text-secondary mr-2"
                      // style="font-variation-settings: 'FILL' 1;"
                    >
                      psychology
                    </span>{' '}
                    Benefits
                  </h4>
                  <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Smooth transitions
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Higher adoption rates
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Sustained improvements
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Continuous alignment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 px-margin-mobile md:px-gutter bg-surface">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 bg-white p-8 rounded-lg border border-slate-gray/20 card-hover order-2 md:order-1">
              <p className="font-body-md text-body-md text-on-surface mb-6">
                Sometimes organizational friction starts at the individual
                level. We offer targeted support for key personnel to refine
                their personal workflows, manage priorities, and reduce
                operational overwhelm.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-label-bold text-label-bold text-primary mb-3 flex items-center">
                    <span
                      className="material-symbols-outlined text-secondary mr-2"
                      // style="font-variation-settings: 'FILL' 1;"
                    >
                      self_improvement
                    </span>{' '}
                    Services may include
                  </h4>
                  <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Inbox management strategies
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Task prioritization frameworks
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Digital file organization
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Time management coaching
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label-bold text-label-bold text-primary mb-3 flex items-center">
                    <span
                      className="material-symbols-outlined text-secondary mr-2"
                      // style="font-variation-settings: 'FILL' 1;"
                    >
                      lightbulb
                    </span>{' '}
                    Benefits
                  </h4>
                  <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Reduced overwhelm
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Better focus
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Increased personal productivity
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                        check
                      </span>{' '}
                      Clearer priorities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 relative order-1 md:order-2 md:pl-12">
              <div className="absolute -top-4 -left-4 md:-left-8 w-24 h-24 bg-pale-teal rounded-full opacity-50 z-0"></div>
              <h2 className="font-headline-lg text-headline-lg text-primary relative z-10 mb-2">
                <span className="text-secondary text-sm font-label-bold tracking-widest block mb-2">
                  § 004
                </span>
                PERSONAL ORGANIZATION
              </h2>
            </div>
          </div>
        </section>
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-margin-mobile md:px-gutter max-w-container-max mx-auto text-center border-t border-slate-gray/20">
          <p className="font-editorial-italic text-editorial-italic text-primary max-w-3xl mx-auto">
            These services may be provided separately or combined into a
            customized engagement, depending on the needs identified during the
            assessment.
          </p>
        </section>
      </main>
    </>
  )
}
