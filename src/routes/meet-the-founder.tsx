import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/meet-the-founder')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <main className="grow">
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter md:px-gutter">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 md:pr-12 order-2 md:order-1 flex flex-col gap-6">
              <div>
                <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-primary mb-4">
                  Meet the Founder
                </h1>
                <p className="font-editorial-italic text-editorial-italic text-primary-container">
                  A practical partner for clearer, more efficient ways of
                  working.
                </p>
              </div>
              <div className="space-y-6 text-on-surface-variant max-w-prose">
                <p className="font-body-lg text-body-lg">
                  ACS was founded on the belief that efficiency is created
                  through clear processes, practical tools, and intentional
                  action.
                </p>
                <p>
                  As the founder and Process Improvement Advisor of Amison
                  Consulting Services, Inc. (ACS), I bring extensive experience
                  evaluating workflows, identifying inefficiencies, developing
                  operational documentation, training teams, and supporting the
                  implementation of new or revised processes.
                </p>
                <p>
                  Throughout my professional career, I have helped organizations
                  make complex work easier to understand, manage, and perform.
                  My experience includes workflow analysis, process
                  documentation, policy and procedure development, step-by-step
                  process guides, checklists, training materials, quality
                  review, performance monitoring, team leadership, and
                  implementation support.
                </p>
                <p>
                  I approach each engagement with curiosity, structure, and
                  care. I take the time to understand what is not working, why
                  the challenge exists, and what practical changes will best
                  support the people and goals involved. The result is not a
                  one-size-fits-all solution, but a clearer and more manageable
                  way forward.
                </p>
                <div className="p-6 bg-soft-stone rounded-lg border border-slate-gray/20">
                  <p>
                    ACS primarily supports solopreneurs, microenterprises, and
                    small businesses. On a limited, case-by-case basis, ACS also
                    works with individuals seeking greater organization in their
                    school, home, or professional lives.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-surface-container-high translate-x-4 translate-y-4 rounded-xl -z-10"></div>
              <img
                alt="Stephanie, Founder of ACS"
                className="w-full h-auto rounded-xl object-cover shadow-sm border border-slate-gray/10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPMh0WaoNipPV91b3iQfLTKqBL4heO8vYkAIIzfh3r9bXbH_p_oymcXiIx_3CYup3x38xMiwDuQ75QgUx_H2K6czfSbmyvYQW6ADwbtW4ChIbyQNfyuf0sURGnfNReJFVLN5_Vr2UvajyIPwX1UHAhHHFExEI6E563WSAoGJRaExfwUhh4w9KQnL1laNvJK6n_dtle1ZD_ISKH_RdtfLrhVq5eu9K6q3gXvDtrc1UlRyll_phUHCe_"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
