import { Link } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/faqs')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <main className="w-full">
        <section className="bg-primary-container text-on-primary pt-section-padding-mobile pb-32 md:pt-40 md:pb-45 px-margin-mobile md:px-section-padding-desktop">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero mb-8">
              Questions? Start Here
            </h1>
          </div>
        </section>
        <section className="bg-surface py-20 md:py-32 px-margin-mobile md:px-section-padding-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary-container inline-block border-b-4 border-muted-brass pb-2">
                About ACS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-gutter items-start">
              <div className="md:col-span-5 space-y-12">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    What does ACS do?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    Amison Consulting Services, Inc. (ACS) helps individuals and
                    small organizations create clearer, more efficient ways of
                    working. ACS identifies what is getting in the way,
                    evaluates current workflows and processes, and develops
                    practical improvements such as process guides, checklists,
                    policies, procedures, and workflow refinements.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    What industries does ACS serve?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-4">
                    ACS's services are designed to apply across industries
                    because the focus is on how work is organized, documented,
                    and performed. ACS does not need to specialize in a client's
                    industry to help identify workflow challenges, clarify
                    processes, and develop practical operational resources.
                  </p>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    Industry-specific requirements, regulations, or technical
                    matters may require additional professionals with
                    specialized expertise.
                  </p>
                </div>
              </div>
              <div className="md:col-span-6 md:col-start-7 space-y-12 bg-soft-stone p-8 md:p-12 rounded-xl">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-6">
                    Who does ACS serve?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-6">
                    ACS primarily serves:
                  </p>
                  <ul className="list-none space-y-4 font-body-lg text-body-lg text-on-surface-variant ml-4 border-l-2 border-muted-brass pl-6">
                    <li>Solopreneurs</li>
                    <li>Microenterprises with 2-10 employees</li>
                    <li>Small businesses with 11-50 employees</li>
                    <li>
                      A select number of individuals seeking greater
                      organization in their professional, educational, or
                      personal lives
                    </li>
                  </ul>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 leading-loose">
                    Services are customized based on each client's needs, goals,
                    and circumstances.
                  </p>
                </div>
                <div className="pt-8 border-t border-slate-gray/20">
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-6">
                    What types of challenges can ACS help address?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-loose">
                    ACS may be a good fit if you:
                  </p>
                  <ul className="list-none space-y-4 font-body-lg text-body-lg text-on-surface-variant ml-4 border-l-2 border-muted-brass pl-6">
                    <li>
                      Know something is not working but are unsure where to
                      begin
                    </li>
                    <li>Experience recurring delays, confusion, or rework</li>
                    <li>Have processes that vary from person to person</li>
                    <li>Rely heavily on memory or informal instructions</li>
                    <li>Need clearer procedures, guides, or checklists</li>
                    <li>Are having difficulty delegating responsibilities</li>
                    <li>
                      Feel overwhelmed by competing priorities or
                      disorganization
                    </li>
                    <li>Need help clarifying how work should be performed</li>
                    <li>
                      Are preparing to grow, delegate, or improve consistency
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-soft-stone py-20 md:py-32 px-margin-mobile md:px-section-padding-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="mb-16 text-center">
              <h2 className="font-headline-lg text-headline-lg text-primary-container">
                Services and Scope
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-6">
                  What services does ACS provide?
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-loose">
                  ACS provides support in the following areas:
                </p>
                <ul className="list-none space-y-3 font-body-md text-body-md text-on-surface-variant">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-secondary mr-2 text-[20px] mt-1">
                      check_circle
                    </span>
                    Workflow optimization
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-secondary mr-2 text-[20px] mt-1">
                      check_circle
                    </span>
                    Operational assessments
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-secondary mr-2 text-[20px] mt-1">
                      check_circle
                    </span>
                    Process mapping and refinement
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-secondary mr-2 text-[20px] mt-1">
                      check_circle
                    </span>
                    Policies and procedures
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-secondary mr-2 text-[20px] mt-1">
                      check_circle
                    </span>
                    Standard operating procedures
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-secondary mr-2 text-[20px] mt-1">
                      check_circle
                    </span>
                    Desk-level procedures
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-secondary mr-2 text-[20px] mt-1">
                      check_circle
                    </span>
                    Step-by-step process guides
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-secondary mr-2 text-[20px] mt-1">
                      check_circle
                    </span>
                    Checklists and reference tools
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-secondary mr-2 text-[20px] mt-1">
                      check_circle
                    </span>
                    Workflow templates and internal forms
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-secondary mr-2 text-[20px] mt-1">
                      check_circle
                    </span>
                    Process-specific training
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-secondary mr-2 text-[20px] mt-1">
                      check_circle
                    </span>
                    Implementation support
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-secondary mr-2 text-[20px] mt-1">
                      check_circle
                    </span>
                    Ongoing operational support
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-secondary mr-2 text-[20px] mt-1">
                      check_circle
                    </span>
                    Personal organization support on a limited, case-by-case
                    basis
                  </li>
                </ul>
              </div>
              <div className="bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-6 flex items-center">
                  Does ACS provide HR services?
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-6">
                  <strong className="text-primary-container font-semibold">
                    No.
                  </strong>{' '}
                  ACS does not provide human resources services, employee
                  relations support, performance management, recruiting,
                  compensation guidance, benefits administration, or
                  employment-related advice.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                  ACS may provide process-specific training to help owners and
                  employees understand and apply workflows, procedures, process
                  guides, checklists, and other operational resources developed
                  or updated during an engagement.
                </p>
              </div>
              <div className="bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-6 flex items-center">
                  Does ACS provide legal, compliance, or regulatory advice?
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-6">
                  <strong className="text-primary-container font-semibold">
                    No.
                  </strong>{' '}
                  ACS does not provide legal advice, tax advice, accounting
                  services, financial advice, or formal legal or regulatory
                  compliance advice.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                  ACS may help document an organization's existing policies,
                  procedures, and operational practices. Clients remain
                  responsible for obtaining advice from qualified legal,
                  accounting, financial, regulatory, or other specialized
                  professionals when needed.
                </p>
              </div>
              <div className="bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-6 flex items-center">
                  Does ACS provide marketing services?
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                  <strong className="text-primary-container font-semibold">
                    No.
                  </strong>{' '}
                  ACS does not provide marketing, advertising, branding, social
                  media management, public relations, or sales services.
                </p>
              </div>
              <div className="bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-6 flex items-center">
                  Does ACS provide personal assistant services?
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-6">
                  <strong className="text-primary-container font-semibold">
                    No.
                  </strong>{' '}
                  ACS does not provide personal assistant, administrative
                  assistant, errands, calendar management, inbox management, or
                  general task-completion services.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                  ACS helps clients create clearer ways to organize and manage
                  responsibilities but does not take over the ongoing execution
                  of personal or business tasks.
                </p>
              </div>
              <div className="bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-6 flex items-center">
                  What is the difference between ACS and a virtual assistant?
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                  A virtual assistant generally performs ongoing administrative
                  or operational tasks on behalf of a client. ACS focuses on
                  assessing how work is done, identifying opportunities for
                  improvement, documenting processes, and helping clients create
                  more efficient ways to manage their responsibilities.
                </p>
              </div>
              <div className="bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-3">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-6 flex items-center">
                  Does ACS provide software or IT services?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    ACS does not provide IT support, software troubleshooting,
                    software development, cybersecurity services, or general
                    technology consulting.
                  </p>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    ACS may help organize workflows and operational resources
                    within tools a client already uses, provided that the work
                    is related to process improvement and documentation rather
                    than software implementation or technical support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-surface py-20 md:py-32 px-margin-mobile md:px-section-padding-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary-container">
                The ACS Process
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start relative before:absolute before:inset-0 before:ml-9.75 lg:before:ml-0 lg:before:mt-9.75 before:-z-10 before:w-0.5 lg:before:w-full lg:before:h-0.5 before:bg-muted-brass/30">
              <div className="flex-1 relative">
                <div className="w-20 h-20 bg-primary-container text-on-primary rounded-full flex items-center justify-center font-display-hero-mobile text-3xl mb-8 border-8 border-surface mx-auto lg:mx-0 shrink-0">
                  1
                </div>
                <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                  What is the first step?
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-4">
                  The process begins with a complimentary 30-minute virtual
                  consultation with the ACS Process Improvement Advisor.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                  The consultation is an opportunity to discuss your goals,
                  describe the challenges you are experiencing, ask initial
                  questions, and determine whether ACS may be a good fit.
                </p>
              </div>
              <div className="flex-1 relative lg:pt-16">
                <div className="w-20 h-20 bg-primary-container text-on-primary rounded-full flex items-center justify-center font-display-hero-mobile text-3xl mb-8 border-8 border-surface mx-auto lg:mx-0 shrink-0">
                  2
                </div>
                <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                  Is the initial consultation free?
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-4">
                  Yes. ACS offers a complimentary 30-minute virtual
                  consultation.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                  The consultation is an introductory conversation. It is not a
                  full operational assessment, formal diagnosis, detailed
                  process review, or written recommendation.
                </p>
              </div>
              <div className="flex-1 relative">
                <div className="w-20 h-20 bg-primary-container text-on-primary rounded-full flex items-center justify-center font-display-hero-mobile text-3xl mb-8 border-8 border-surface mx-auto lg:mx-0 shrink-0">
                  3
                </div>
                <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                  What happens after the consultation?
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-4">
                  If ACS appears to be a good fit, the next step may be a paid
                  Operational Assessment. The assessment provides a more
                  detailed review of the relevant workflows, procedures,
                  documentation, responsibilities, and day-to-day practices.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                  The assessment findings are used to develop customized and
                  prioritized recommendations.
                </p>
              </div>
            </div>
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                  What is included in an Operational Assessment?
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-4 leading-loose">
                  Depending on the agreed scope, an Operational Assessment may
                  include:
                </p>
                <ul className="list-none space-y-3 font-body-md text-body-md text-on-surface-variant ml-4 border-l-2 border-muted-brass pl-6">
                  <li>Review of relevant workflows and procedures</li>
                  <li>Review of existing documentation</li>
                  <li>Examination of recurring operational challenges</li>
                  <li>
                    Identification of bottlenecks, duplication, delays, or
                    unclear responsibilities
                  </li>
                  <li>
                    Discussions with relevant owners, employees, or stakeholders
                  </li>
                  <li>Analysis of current practices</li>
                  <li>A written report with customized recommendations</li>
                </ul>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-loose">
                  The exact scope, deliverables, timeline, and fee are
                  established before the assessment begins.
                </p>
              </div>
              <div className="space-y-12">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    Is an Operational Assessment required before receiving other
                    services?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-4">
                    An assessment may be recommended when the client is unsure
                    what needs to change or where to begin. In some situations,
                    a client may already have a clearly defined project, in
                    which case ACS may provide services based on an agreed-upon
                    scope of work.
                  </p>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    The appropriate starting point depends on the client's needs
                    and the complexity of the requested work.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    Will ACS recommend services the client does not need?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-4">
                    ACS recommendations are based on the findings of the
                    assessment and the client's stated goals. Recommendations
                    are intended to address identified needs rather than
                    encourage unnecessary services.
                  </p>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    Clients decide which recommendations, if any, they would
                    like to pursue.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    Are all recommendations implemented by ACS?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-4">
                    No. ACS may provide recommendations for the client to
                    implement independently, or the client may engage ACS to
                    complete some or all of the approved improvement work.
                  </p>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    Implementation services are defined in a separate Statement
                    of Work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-soft-stone py-20 md:py-32 px-margin-mobile md:px-section-padding-desktop">
          <div className="max-w-4xl mx-auto border-4 border-surface p-8 md:p-16 rounded-xl bg-surface/50 backdrop-blur-sm">
            <div className="mb-12 text-center">
              <h2 className="font-headline-lg text-headline-lg text-primary-container">
                Projects and Deliverables
              </h2>
            </div>
            <div className="space-y-16">
              <div>
                <h3 className="font-headline-md text-headline-md text-primary-container mb-6 text-center">
                  What may be included in an improvement project?
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-loose text-center">
                  Depending on the client's needs, a project may include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl mx-auto">
                  <ul className="list-none space-y-4 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-center">
                      <span className="material-symbols-outlined text-secondary mr-3 text-[20px]">
                        play_arrow
                      </span>
                      Workflow redesign
                    </li>
                    <li className="flex items-center">
                      <span className="material-symbols-outlined text-secondary mr-3 text-[20px]">
                        play_arrow
                      </span>
                      Process mapping
                    </li>
                    <li className="flex items-center">
                      <span className="material-symbols-outlined text-secondary mr-3 text-[20px]">
                        play_arrow
                      </span>
                      Policies and procedures
                    </li>
                    <li className="flex items-center">
                      <span className="material-symbols-outlined text-secondary mr-3 text-[20px]">
                        play_arrow
                      </span>
                      Standard operating procedures
                    </li>
                    <li className="flex items-center">
                      <span className="material-symbols-outlined text-secondary mr-3 text-[20px]">
                        play_arrow
                      </span>
                      Desk-level procedures
                    </li>
                    <li className="flex items-center">
                      <span className="material-symbols-outlined text-secondary mr-3 text-[20px]">
                        play_arrow
                      </span>
                      Step-by-step process guides
                    </li>
                    <li className="flex items-center">
                      <span className="material-symbols-outlined text-secondary mr-3 text-[20px]">
                        play_arrow
                      </span>
                      Checklists
                    </li>
                  </ul>
                  <ul className="list-none space-y-4 font-body-md text-body-md text-on-surface-variant">
                    <li className="flex items-center">
                      <span className="material-symbols-outlined text-secondary mr-3 text-[20px]">
                        play_arrow
                      </span>
                      Internal forms
                    </li>
                    <li className="flex items-center">
                      <span className="material-symbols-outlined text-secondary mr-3 text-[20px]">
                        play_arrow
                      </span>
                      Workflow templates
                    </li>
                    <li className="flex items-center">
                      <span className="material-symbols-outlined text-secondary mr-3 text-[20px]">
                        play_arrow
                      </span>
                      Process-specific training materials
                    </li>
                    <li className="flex items-center">
                      <span className="material-symbols-outlined text-secondary mr-3 text-[20px]">
                        play_arrow
                      </span>
                      Training on newly developed or revised processes
                    </li>
                    <li className="flex items-center">
                      <span className="material-symbols-outlined text-secondary mr-3 text-[20px]">
                        play_arrow
                      </span>
                      Implementation support
                    </li>
                    <li className="flex items-center">
                      <span className="material-symbols-outlined text-secondary mr-3 text-[20px]">
                        play_arrow
                      </span>
                      Follow-up review
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-gray/20">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    Does ACS use a one-size-fits-all process?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-4">
                    No. ACS uses a structured approach, but each engagement is
                    tailored to the client's goals, challenges, existing
                    resources, and operating environment.
                  </p>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    The goal is to create practical improvements that people can
                    understand, use, and maintain.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    What are desk-level procedures?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    Desk-level procedures are task-specific instructions that
                    explain how to complete a particular responsibility or
                    process. They are designed to provide clear, step-by-step
                    guidance and reduce reliance on memory, informal
                    explanations, or trial and error.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    What is process-specific training?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-4">
                    Process-specific training helps owners and employees
                    understand and apply workflows, procedures, process guides,
                    checklists, and other operational resources addressed in the
                    engagement.
                  </p>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    Training may include demonstrations, walkthroughs,
                    explanations of process changes, and guidance during
                    implementation.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    Will ACS train employees?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-4">
                    When included in the project scope, ACS may provide training
                    related to newly developed or revised workflows, procedures,
                    and operational resources.
                  </p>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    This training focuses on how work should be performed. It is
                    not general employee development, HR training, performance
                    management, or employment-related training.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    Can ACS update documents the client already has?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-4">
                    Yes. ACS may review, revise, organize, or improve existing
                    policies, procedures, process guides, checklists, and other
                    operational documents.
                  </p>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    The extent of the work depends on the condition of the
                    existing materials and the agreed project scope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-surface py-20 md:py-32 px-margin-mobile md:px-section-padding-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary-container">
                Fees and Agreements
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3 space-y-12">
                <div className="bg-soft-stone p-8 rounded-xl">
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    How are ACS services priced?
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                    Fees depend on the type, complexity, and scope of the
                    engagement. Services may be provided through:
                  </p>
                  <ul className="list-disc list-inside space-y-2 font-body-md text-body-md text-on-surface-variant marker:text-muted-brass">
                    <li>A flat-fee project</li>
                    <li>An agreed hourly arrangement</li>
                    <li>A monthly retainer</li>
                    <li>
                      Another written arrangement documented in the service
                      agreement
                    </li>
                  </ul>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-4 italic">
                    The pricing structure and payment terms are explained before
                    work begins.
                  </p>
                </div>
                <div className="bg-primary-container text-on-primary p-8 rounded-xl">
                  <h3 className="font-headline-md text-headline-md mb-4">
                    What is included in a service agreement?
                  </h3>
                  <p className="font-body-md text-body-md text-on-primary/80 mb-4">
                    Depending on the engagement, documentation may include:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <ul className="list-none space-y-2 font-body-md text-body-md text-on-primary/90 text-sm">
                      <li>Master Service Agreement</li>
                      <li>Statement of Work</li>
                      <li>Fee schedule</li>
                      <li>Payment terms</li>
                      <li>Project scope</li>
                    </ul>
                    <ul className="list-none space-y-2 font-body-md text-body-md text-on-primary/90 text-sm">
                      <li>Deliverables</li>
                      <li>Client responsibilities</li>
                      <li>Timeline or milestones</li>
                      <li>Revision terms</li>
                      <li>Confidentiality provisions, as applicable</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    Will I know the cost before work begins?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    Yes. Before a project begins, ACS provides clear
                    documentation describing the agreed scope, deliverables,
                    fees, payment terms, responsibilities, and other relevant
                    expectations.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    What is a Statement of Work?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    A Statement of Work, or SOW, describes the specific project
                    being completed. It may include the purpose of the project,
                    services to be provided, deliverables, timeline, fees,
                    responsibilities, and assumptions.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    Does ACS offer retainers?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose mb-4">
                    Yes. Clients may choose a monthly retainer for continued
                    operational support after the initial engagement or as
                    otherwise agreed.
                  </p>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    A retainer reserves an agreed-upon number of service hours
                    each month for the client.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    Do unused retainer hours roll over?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    No. Reserved retainer hours are available during the
                    applicable month and do not roll over to a future month.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    What happens if more hours are needed than the retainer
                    includes?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    Additional work may be addressed through a separate project,
                    an amended agreement, or additional services billed at the
                    applicable rate, subject to availability and client
                    approval.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    Can a client hire ACS for another project instead of using a
                    retainer?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    Yes. After an initial engagement, clients may contract with
                    ACS for additional projects or choose a monthly retainer for
                    continued support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-soft-stone py-24 md:py-40 px-margin-mobile md:px-section-padding-desktop text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <span className="material-symbols-outlined text-secondary text-[48px] mb-6">
                person
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary-container">
                Individual Services
              </h2>
            </div>
            <div className="space-y-16 text-left">
              <div className="text-center">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                  Does ACS work with individuals?
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose text-xl">
                  Yes, on a limited, case-by-case basis. ACS may work with
                  select individuals who want to improve organization in their
                  professional, educational, or personal lives.
                </p>
              </div>
              <div className="bg-surface p-10 rounded-2xl shadow-sm mx-auto max-w-2xl">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-6 text-center">
                  What types of personal organization support may be available?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 text-center">
                  Services may include:
                </p>
                <ul className="list-none space-y-4 font-body-md text-body-md text-on-surface-variant grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                  <li className="flex items-center">
                    <span className="material-symbols-outlined text-muted-brass mr-3 text-[20px]">
                      circle
                    </span>
                    Organizing responsibilities or information
                  </li>
                  <li className="flex items-center">
                    <span className="material-symbols-outlined text-muted-brass mr-3 text-[20px]">
                      circle
                    </span>
                    Planning and prioritization
                  </li>
                  <li className="flex items-center">
                    <span className="material-symbols-outlined text-muted-brass mr-3 text-[20px]">
                      circle
                    </span>
                    Goal-setting support
                  </li>
                  <li className="flex items-center">
                    <span className="material-symbols-outlined text-muted-brass mr-3 text-[20px]">
                      circle
                    </span>
                    Development of routines
                  </li>
                  <li className="flex items-center">
                    <span className="material-symbols-outlined text-muted-brass mr-3 text-[20px]">
                      circle
                    </span>
                    Creation of personal checklists and step-by-step guides
                  </li>
                  <li className="flex items-center">
                    <span className="material-symbols-outlined text-muted-brass mr-3 text-[20px]">
                      circle
                    </span>
                    Time-management structures
                  </li>
                  <li className="flex items-center">
                    <span className="material-symbols-outlined text-muted-brass mr-3 text-[20px]">
                      circle
                    </span>
                    Simplification of recurring responsibilities
                  </li>
                  <li className="flex items-center">
                    <span className="material-symbols-outlined text-muted-brass mr-3 text-[20px]">
                      circle
                    </span>
                    Identification of organizational barriers
                  </li>
                  <li className="flex items-center">
                    <span className="material-symbols-outlined text-muted-brass mr-3 text-[20px]">
                      circle
                    </span>
                    Development of practical personal workflows
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    Is personal organization support the same as personal
                    assistant services?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    No. Personal organization support focuses on helping clients
                    create clearer systems to manage their responsibilities. ACS
                    does not perform errands, manage personal calendars,
                    complete ongoing administrative tasks, or act as a personal
                    assistant.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                    Does ACS provide therapy or medical support?
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-loose">
                    No. ACS does not provide therapy, counseling, medical
                    services, mental health treatment, diagnosis, or clinical
                    advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-surface py-20 md:py-32 px-margin-mobile md:px-section-padding-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary-container">
                Client Experience and Privacy
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-soft-stone p-8 rounded-lg border border-slate-gray/10">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                  How does ACS protect client information?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                  ACS treats client information with care and discretion. We
                  take reasonable steps to protect information shared during an
                  engagement and limit access to those who need it to provide
                  the agreed-upon services.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  When a client provides a nondisclosure agreement or other
                  confidentiality requirements, ACS will review and abide by the
                  applicable terms agreed upon by both parties. Any
                  confidentiality provisions should be addressed before work
                  begins and included in the applicable service agreement or
                  other written agreement.
                </p>
              </div>
              <div className="bg-soft-stone p-8 rounded-lg border border-slate-gray/10">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                  Will ACS sign a client-provided nondisclosure agreement?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  ACS may review and sign a client-provided nondisclosure
                  agreement when the terms are appropriate for the engagement
                  and mutually acceptable to both parties. Clients should
                  provide any requested nondisclosure agreement before
                  confidential information is shared or services begin.
                </p>
              </div>
              <div className="bg-soft-stone p-8 rounded-lg border border-slate-gray/10">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                  May ACS request a testimonial?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                  ACS may ask clients to provide a testimonial about their
                  experience. Testimonials are voluntary and will only be
                  published with the client's permission.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Before publishing a testimonial, ACS will confirm the approved
                  wording and any identifying information that may appear with
                  it, such as the client's name, business name, title, or
                  industry. Clients may choose to provide a testimonial
                  anonymously or decline the request.
                </p>
              </div>
              <div className="bg-soft-stone p-8 rounded-lg border border-slate-gray/10">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                  Will ACS identify clients or display project information?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  ACS will not publicly identify a client, business, project, or
                  result without permission. Any use of a testimonial, client
                  name, logo, case study, project description, or other
                  identifying information will require the client's prior
                  approval.
                </p>
              </div>
              <div className="bg-soft-stone p-8 rounded-lg border border-slate-gray/10">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                  Will ACS contact my employees or team members?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                  Only when appropriate to the engagement and agreed upon with
                  the client. Some projects may require conversations with
                  employees or other stakeholders to understand how work is
                  currently performed.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  The client and ACS will establish the appropriate
                  communication and participation expectations before the work
                  begins.
                </p>
              </div>
              <div className="bg-soft-stone p-8 rounded-lg border border-slate-gray/10">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                  Does ACS work remotely?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  ACS offers virtual consultations and may provide services
                  remotely. Any in-person work, if offered, will be addressed in
                  the applicable agreement and may depend on location,
                  availability, and project requirements.
                </p>
              </div>
              <div className="bg-soft-stone p-8 rounded-lg border border-slate-gray/10">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                  How long does an engagement take?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                  The timeline depends on the scope and complexity of the work,
                  the availability of information and stakeholders, the number
                  of processes being reviewed, and the client's response time.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  A projected timeline or milestone schedule will be discussed
                  before the engagement begins.
                </p>
              </div>
              <div className="bg-soft-stone p-8 rounded-lg border border-slate-gray/10 md:col-span-2 lg:col-span-2">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-4">
                  What does ACS need from the client?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
                  Clients may be asked to provide:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body-md text-body-md text-on-surface-variant columns-1 sm:columns-2">
                  <li>Access to relevant documents or process materials</li>
                  <li>Information about current workflows</li>
                  <li>Availability for interviews or meetings</li>
                  <li>Feedback on drafts or recommendations</li>
                  <li>Timely decisions and approvals</li>
                  <li>Access to appropriate employees or stakeholders</li>
                  <li>A clear point of contact for the engagement</li>
                </ul>
                <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed italic">
                  Client participation helps ensure that recommendations are
                  practical and aligned with actual needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-primary-container text-on-primary py-24 md:py-32 px-margin-mobile md:px-section-padding-desktop text-center"
          id="getting-started"
        >
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero mb-6">
                Getting Started
              </h2>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="font-headline-md text-headline-md mb-4">
                  How do I contact ACS?
                </h3>
                <p className="font-body-lg text-body-lg text-on-primary/80 leading-loose mb-10 text-xl">
                  Use the Schedule Your Consultation button to request a
                  complimentary 30-minute virtual consultation with the ACS
                  Process Improvement Advisor.
                </p>
                <div>
                  <Link
                    className="inline-flex items-center justify-center bg-secondary text-on-secondary font-button text-button px-10 py-5 rounded-full hover:bg-opacity-90 transition-all duration-200 ease-in-out active:opacity-80 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
                    to="/contact"
                  >
                    Schedule Your Consultation
                  </Link>
                </div>
              </div>
              <div className="bg-surface/10 p-8 rounded-xl text-left mt-16 max-w-2xl mx-auto">
                <h3 className="font-headline-md text-headline-md mb-4">
                  What should I prepare for the consultation?
                </h3>
                <p className="font-body-md text-body-md text-on-primary/90 mb-6 leading-loose">
                  No formal preparation is required. It may be helpful to
                  consider:
                </p>
                <ul className="list-none space-y-3 font-body-md text-body-md text-on-primary/90 ml-4 border-l-2 border-secondary pl-6">
                  <li>What is currently not working</li>
                  <li>Where confusion, delays, or frustration occur</li>
                  <li>Which responsibilities feel difficult to manage</li>
                  <li>What you would like to improve</li>
                  <li>
                    Whether existing procedures or documentation are available
                  </li>
                  <li>What a successful outcome would look like</li>
                </ul>
              </div>
              <div className="text-left max-w-2xl mx-auto opacity-80 pt-8 border-t border-on-primary/20">
                <h3 className="font-headline-md text-headline-md mb-4">
                  What if ACS is not the right fit?
                </h3>
                <p className="font-body-md text-body-md leading-loose">
                  ACS will aim to explain the available options clearly. If a
                  request falls outside ACS's services or requires specialized
                  legal, HR, financial, medical, technical, or other
                  professional assistance, the client may be advised to seek the
                  appropriate provider.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
