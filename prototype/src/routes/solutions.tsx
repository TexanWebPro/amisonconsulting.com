import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/solutions')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <main className="grow">
        <Clarity />
        <Solutions />
        <Note />
      </main>
    </>
  )
}

function Clarity() {
  return (
    <>
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
    </>
  )
}

function Solutions() {
  return (
    <>
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
              bottlenecks, unnecessary steps, duplication, unclear
              responsibilities, and other sources of operational friction. We
              then recommend practical improvements that make processes easier
              to follow, manage, and sustain.
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
                    Operational bottleneck assessment
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Workflow review and analysis
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Process mapping
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Workflow redesign and refinement
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
                    Identification of unnecessary or duplicative steps
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Development of efficiency measures and performance
                    indicators
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
                  Benefits of workflow optimization:
                </h4>
                <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    More efficient day-to-day operations
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Reduced delays, confusion, and rework
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Clearer responsibilities and expectations
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Improved consistency and quality
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Better use of time and resources
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Processes that are easier to manage and improve
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
              We transform important business knowledge into clear, practical
              documentation that explains how work should be performed. These
              resources help create consistency, clarify expectations, and
              reduce reliance on memory or informal instruction.
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
                    Policies and procedures
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Policy manual development or updates
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Desk-level procedures
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Step-by-step process guides
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Checklists and reference tools
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Role-specific instructions
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Internal forms and workflow templates
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
                  Benefits of effective operational documentation:
                </h4>
                <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Greater consistency in how work is performed
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Clearer expectations and responsibilities
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Easier onboarding and training
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Reduced reliance on undocumented knowledge
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Improved continuity when responsibilities change
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Stronger alignment between daily activities and business
                    goals
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
              We help clients put approved operational improvements into
              practice and support the people responsible for using them. When
              included in the project scope, we provide process-specific
              training to help owners and employees understand new or revised
              workflows, procedures, and related operational resources. Training
              is tailored to the workflows, procedures, and operational
              resources addressed in each engagement, helping owners and
              employees confidently apply the updated processes in their
              day-to-day work.
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
                    Coordinating the transition to revised workflows
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Communicating process changes and updated responsibilities
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Providing training on newly developed or revised workflows
                    and procedures
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Demonstrating how to use process guides, checklists, and
                    other operational resources
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Supporting staff as they apply the updated processes
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Identifying and addressing process-related implementation
                    challenges
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Reviewing how updated processes are working in practice
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Recommending adjustments based on feedback or changing
                    business needs
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Providing continued operational guidance through additional
                    projects or a monthly retainer
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
                  Benefits of implementation, process training, and ongoing
                  support:
                </h4>
                <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Smoother adoption of operational changes
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Greater confidence using new or revised processes
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Clearer understanding of process-related responsibilities
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    More consistent use of workflows and procedures
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Faster identification of process-related issues
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Better alignment between daily operations and business goals
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Continued access to practical operational guidance
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Sustained improvement as the organization evolves
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
              On a limited, case-by-case basis, ACS also works with individuals
              who want to improve organization and efficiency in their school,
              home, or professional lives.
              <br />
              <br />
              This support focuses on creating practical, personalized
              approaches for managing responsibilities, information, time, and
              goals. It is not personal assistant, therapy, medical, legal, or
              financial services.{' '}
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
                    Organization of tasks, responsibilities, or information
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Planning and prioritization
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Goal-setting support
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Development of routines and personal workflows
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Creation of checklists and step-by-step guides
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Time-management and accountability structures
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Simplification of recurring responsibilities
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Identification of organizational barriers and practical
                    solutions
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
                  Benefits of personal organization support:
                </h4>
                <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Greater clarity about priorities
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Reduced overwhelm and mental clutter
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Improved follow-through
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    More effective use of time
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Easier management of recurring responsibilities
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Increased confidence and personal control
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-muted-brass text-sm mr-2 mt-1">
                      check
                    </span>{' '}
                    Practical systems that support individual goals
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
    </>
  )
}

function Note() {
  return (
    <>
      <section className="py-section-padding-mobile md:py-section-padding-desktop px-margin-mobile md:px-gutter max-w-container-max mx-auto text-center border-t border-slate-gray/20">
        <p className="font-editorial-italic text-editorial-italic text-primary max-w-3xl mx-auto">
          These services may be provided separately or combined into a
          customized engagement, depending on the needs identified during the
          assessment.
        </p>
      </section>
    </>
  )
}
