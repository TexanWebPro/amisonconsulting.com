import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/the-acs-approach')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <main>
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-soft-stone to-transparent opacity-50 pointer-events-none"></div>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            <div className="max-w-3xl mb-16">
              <span className="text-secondary font-label-bold text-label-bold tracking-widest uppercase block mb-4">
                The ACS Approach
              </span>
              <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-primary mb-6">
                Our Philosophy
              </h1>
              <p className="font-editorial-italic text-editorial-italic text-secondary border-l-2 border-muted-brass pl-6">
                "Creating clarity, consistency, and momentum in the way you
                work."
              </p>
            </div>
            <div className="grid md:grid-cols-12 gap-gutter">
              <div className="md:col-span-5">
                <p className="font-body-lg text-body-lg text-on-surface font-bold leading-relaxed">
                  At Amison Consulting Services, Inc. (ACS), we believe
                  operational challenges often arise when the way work gets done
                  has not been clearly defined, documented, or aligned with the
                  goals of the people involved.
                </p>
                <div className="hidden md:block w-12 h-0.5 bg-muted-brass mt-8"></div>
              </div>
              <div className="md:col-span-6 md:col-start-7 flex flex-col gap-8">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  ACS helps solopreneurs, microenterprises, small businesses,
                  and select individuals identify what is getting in the way,
                  simplify workflows, and create practical tools that make
                  responsibilities easier to manage.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our approach is thoughtful, focused, and tailored to each
                  client's needs. Rather than providing one-size-fits-all
                  advice, ACS examines what is working, identifies where
                  processes are breaking down, and recommends practical
                  improvements such as streamlined workflows, easy-to-follow
                  process guides, checklists, policies, procedures, and other
                  resources designed to support greater clarity, consistency,
                  and efficiency.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Whether you are managing a growing business, leading a small
                  team, or working to become more organized in your school,
                  home, or professional life, ACS helps create a clearer path
                  forward.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-soft-stone">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 relative group">
              <div className="absolute inset-0 bg-secondary translate-x-4 translate-y-4 rounded-lg -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <img
                alt="Professional Workspace"
                className="w-full aspect-4/5 object-cover rounded-lg shadow-sm border-r-4 border-b-4 border-muted-brass"
                data-alt="A sophisticated, softly lit modern office environment showing organized documents, a sleek laptop, and a minimalist desk setup, embodying professional clarity and structure. Warm ivory and deep navy tones dominate the scene, reflecting a premium consulting atmosphere."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKDvGgKaaUlKFMnM7Tzj0pI_VoraF5EhtOcHtW-jnvpXbqMHbJ-yyyLWA1zwzbAg0TP4yNOKwy7v1OphjlNVEz1KShayFaI7_1kHXwlEWAOU0FHl86TgahHLGwju4COMXqjVrfl4HnN-0RKZ33GsXCOJm-KHOCZL_X6tX6XOCUZMx5tsc1epg8H9Vy7fEJKsR5M4SIJDqdbU8dcCWqCs3geyLvfUpRtPjgreegUx9P2U1RfYAQ_U7S"
              />
            </div>
            <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6 mt-12 md:mt-0">
              <h2 className="font-headline-lg text-headline-lg text-primary">
                About ACS
              </h2>
              <p className="font-editorial-italic text-editorial-italic text-secondary">
                Where practical experience meets meaningful improvement.
              </p>
              <div className="flex flex-col gap-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                <p>
                  ACS was built on extensive experience analyzing how work gets
                  done, documenting processes, developing clear guides and
                  procedures, training teams, reviewing quality, and supporting
                  meaningful change. ACS is led by a Process Improvement Advisor
                  with extensive experience in workflow analysis, process
                  documentation, training, quality review, and implementation
                  support.
                </p>
                <p>
                  Professional experience across healthcare, managed care,
                  customer service, quality review, and system implementation
                  has shaped ACS's thoughtful, structured approach to complex
                  challenges. This background supports the ability to assess
                  current practices, identify barriers to progress, clarify
                  expectations, and develop practical improvements that work in
                  real-world settings.
                </p>
                <p>
                  ACS serves solopreneurs, microenterprises, small businesses,
                  and a select number of individuals seeking greater
                  organization in their professional, educational, or personal
                  lives. The focus is always the same: helping clients replace
                  confusion and disorganization with clearer, more manageable
                  ways of working.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-background relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                Is ACS Right for You?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                ACS may be a good fit if you:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 border border-slate-gray border-opacity-20 rounded-lg hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:border-pale-teal transition-all duration-300 group flex flex-col gap-4">
                <div className="w-12 h-12 bg-pale-teal rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">
                    psychology_alt
                  </span>
                </div>
                <p className="font-headline-sm text-headline-sm text-primary">
                  Know something is not working but are unsure where to begin
                </p>
              </div>
              <div className="bg-soft-stone p-6 border border-slate-gray border-opacity-20 rounded-lg hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:border-pale-teal transition-all duration-300 group flex flex-col gap-4">
                <div className="w-12 h-12 bg-pale-teal rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">
                    hourglass_bottom
                  </span>
                </div>
                <p className="font-headline-sm text-headline-sm text-primary">
                  Experience recurring delays, confusion, or rework
                </p>
              </div>
              <div className="bg-white p-6 border border-slate-gray border-opacity-20 rounded-lg hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:border-pale-teal transition-all duration-300 group flex flex-col gap-4">
                <div className="w-12 h-12 bg-pale-teal rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">
                    chevron_forward
                  </span>
                </div>
                <p className="font-headline-sm text-headline-sm text-primary">
                  Rely heavily on memory or informal instructions
                </p>
              </div>
              <div className="bg-soft-stone p-6 border border-slate-gray border-opacity-20 rounded-lg hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:border-pale-teal transition-all duration-300 group flex flex-col gap-4">
                <div className="w-12 h-12 bg-pale-teal rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">diversity_3</span>
                </div>
                <p className="font-headline-sm text-headline-sm text-primary">
                  Have processes that vary from person to person
                </p>
              </div>
              <div className="bg-soft-stone p-6 border border-slate-gray border-opacity-20 rounded-lg hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:border-pale-teal transition-all duration-300 group flex flex-col gap-4">
                <div className="w-12 h-12 bg-pale-teal rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">checklist</span>
                </div>
                <p className="font-headline-sm text-headline-sm text-primary">
                  Need clearer procedures, guides, or checklists
                </p>
              </div>
              <div className="bg-white p-6 border border-slate-gray border-opacity-20 rounded-lg hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:border-pale-teal transition-all duration-300 group flex flex-col gap-4">
                <div className="w-12 h-12 bg-pale-teal rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <p className="font-headline-sm text-headline-sm text-primary">
                  Are preparing to delegate responsibilities or grow your
                  business
                </p>
              </div>
              <div className="bg-soft-stone p-6 border border-slate-gray border-opacity-20 rounded-lg hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:border-pale-teal transition-all duration-300 group flex flex-col gap-4">
                <div className="w-12 h-12 bg-pale-teal rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">waves</span>
                </div>
                <p className="font-headline-sm text-headline-sm text-primary">
                  Feel overwhelmed by competing priorities or disorganization
                </p>
              </div>
              <div className="bg-white p-6 border border-slate-gray border-opacity-20 rounded-lg hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:border-pale-teal transition-all duration-300 group flex flex-col gap-4">
                <div className="w-12 h-12 bg-pale-teal rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">handshake</span>
                </div>
                <p className="font-headline-sm text-headline-sm text-primary">
                  Want practical support without committing to a large
                  consulting firm
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-primary-container text-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col gap-6">
              <h2 className="font-headline-lg text-headline-lg text-on-primary">
                The ACS Method
              </h2>
              <p className="font-editorial-italic text-editorial-italic text-pale-teal">
                A clear path from operational challenges to practical solutions.
              </p>
              <p className="font-body-lg text-body-lg text-outline-variant">
                ACS's process is designed to help clients understand what is not
                working, determine what needs to change, and move thoughtfully
                toward implementation. Services are customized based on the
                needs identified during the initial consultation and assessment.
              </p>
            </div>
            <div className="relative w-3/4 mx-auto px-margin-mobile md:px-gutter">
              <div className="md:block absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-gray opacity-30 -translate-x-1/2"></div>
              <div className="flex flex-col gap-12 md:gap-24 relative">
                <div className="grid md:grid-cols-2 gap-8 items-center relative group">
                  <div className="md:text-right pr-0 md:pr-12 pl-6 md:pl-0">
                    <h3 className="font-headline-md text-headline-md text-pale-teal mb-2 underline">
                      1. Initial Consultation
                    </h3>
                    <h4 className="font-headline-md text-headline-sm text-pale-teal mb-2">
                      Start with clarity.
                    </h4>
                    <p className="font-body-md text-body-md text-outline-variant">
                      We begin with a complimentary 30-minute virtual
                      consultation to learn about your needs, understand the
                      challenges you are experiencing, and discuss your goals.
                    </p>
                  </div>
                  <div className="flex absolute left-0 md:left-1/2 top-1/2 -translate-x-10 md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary text-white items-center justify-center font-label-bold text-label-bold z-10 border-primary-container group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="md:pl-12 opacity-0 md:opacity-100 transition-opacity"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center relative group">
                  <div className="hidden md:block md:pr-12"></div>
                  <div className="flex absolute left-0 md:left-1/2 top-1/2 -translate-x-10 md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary text-white items-center justify-center font-label-bold text-label-bold z-10 border-primary-container group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="pl-6 md:pl-12">
                    <h3 className="font-headline-md text-headline-md text-pale-teal mb-2 underline">
                      2. Operational Assessment
                    </h3>
                    <h4 className="font-headline-md text-headline-sm text-pale-teal mb-2">
                      Identify what is getting in the way.
                    </h4>
                    <p className="font-body-md text-body-md text-outline-variant">
                      We conduct a focused review of relevant workflows,
                      procedures, documentation, responsibilities, and
                      day-to-day practices to identify inefficiencies,
                      inconsistencies, barriers, and opportunities for
                      improvement.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center relative group">
                  <div className="md:text-right pr-0 md:pr-12 pl-6 md:pl-0">
                    <h3 className="font-headline-md text-headline-md text-pale-teal mb-2 underline">
                      3. Customized Recommendations
                    </h3>
                    <h4 className="font-headline-md text-headline-sm text-pale-teal mb-2">
                      Create a practical path forward.
                    </h4>
                    <p className="font-body-md text-body-md text-outline-variant">
                      Based on the assessment findings, we provide a
                      comprehensive report outlining customized and prioritized
                      recommendations. Depending on your needs, recommendations
                      may include workflow improvements, process guides,
                      desk-level procedures, policy and procedure updates,
                      checklists, and other practical resources.
                    </p>
                  </div>
                  <div className="flex absolute left-0 md:left-1/2 top-1/2 -translate-x-10 md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary text-white items-center justify-center font-label-bold text-label-bold z-10 border-primary-container group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="md:pl-12"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center relative group">
                  <div className="hidden md:block md:pr-12"></div>
                  <div className="flex absolute left-0 md:left-1/2 top-1/2 -translate-x-10 md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary text-white items-center justify-center font-label-bold text-label-bold z-10 border-primary-container group-hover:scale-110 transition-transform">
                    4
                  </div>
                  <div className="pl-6 md:pl-12">
                    <h3 className="font-headline-md text-headline-md text-pale-teal mb-2 underline">
                      4. Service Agreement
                    </h3>
                    <h4 className="font-headline-md text-headline-sm text-pale-teal mb-2">
                      Define the engagement.
                    </h4>
                    <p className="font-body-md text-body-md text-outline-variant">
                      Before implementation begins, we provide clear
                      documentation—including the master service agreement, fee
                      schedule, statement of work, and payment terms—to
                      establish the scope, deliverables, responsibilities, and
                      expectations for the engagement.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center relative group">
                  <div className="md:text-right pr-0 md:pr-12 pl-6 md:pl-0">
                    <h3 className="font-headline-md text-headline-md text-pale-teal mb-2 underline">
                      5. Implementation &amp; Training
                    </h3>
                    <h4 className="font-headline-md text-headline-sm text-pale-teal mb-2">
                      Put improvements into practice.
                    </h4>
                    <p className="font-body-md text-body-md text-outline-variant">
                      We carry out the approved statement of work by developing
                      and integrating the recommended workflows, procedures,
                      process guides, and other resources into your day-to-day
                      operations.
                      <br />
                      <br />
                      When included in the project scope, ACS may also provide
                      process-specific training to help owners and employees
                      understand and confidently apply new or revised workflows,
                      procedures, and operational resources.
                    </p>
                  </div>
                  <div className="flex absolute left-0 md:left-1/2 top-1/2 -translate-x-10 md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary text-white items-center justify-center font-label-bold text-label-bold z-10 border-primary-container group-hover:scale-110 transition-transform">
                    5
                  </div>
                  <div className="md:pl-12"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center relative group">
                  <div className="hidden md:block md:pr-12"></div>
                  <div className="flex absolute left-0 md:left-1/2 top-1/2 -translate-x-10 md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary text-white items-center justify-center font-label-bold text-label-bold z-10 border-primary-container group-hover:scale-110 transition-transform">
                    6
                  </div>
                  <div className="pl-6 md:pl-12">
                    <h3 className="font-headline-md text-headline-md text-pale-teal mb-2 underline">
                      6. Ongoing Support
                    </h3>
                    <h4 className="font-headline-md text-headline-sm text-pale-teal mb-2">
                      Keep progress moving.
                    </h4>
                    <p className="font-body-md text-body-md text-outline-variant">
                      After the initial engagement, clients may contract with
                      ACS for additional projects or choose a monthly retainer
                      for continued support.
                      <br />
                      <br />
                      Retainer plans reserve an agreed-upon number of service
                      hours each month for the client's business. Reserved hours
                      are available during the applicable month and do not roll
                      over.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-section-padding-mobile md:py-section-padding-desktop bg-soft-stone relative overflow-hidden"
          id="cta"
        >
          <div className="max-w-3xl mx-auto px-margin-mobile md:px-gutter text-center flex flex-col items-center gap-8 relative z-10">
            <span className="material-symbols-outlined text-secondary text-[48px] font-light">
              forum
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Begin the Conversation
            </h2>
            <p className="font-editorial-italic text-editorial-italic text-secondary -mt-4">
              A clearer way forward starts here.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Schedule a complimentary 30-minute virtual consultation with our
              Process Improvement Advisor to discuss your goals, explore the
              challenges you are experiencing, and determine whether ACS is the
              right fit for your needs.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-white font-button text-button py-4 px-8 rounded hover:bg-opacity-90 transition-all duration-300 mt-4 shadow-sm hover:shadow-md flex items-center gap-2"
            >
              Schedule Your Consultation
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
