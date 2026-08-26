import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-mobile md:py-section-padding-desktop">
        <Title />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
    </>
  )
}

function Title() {
  return (
    <>
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-primary mb-6">
          Ready to Get Started?
        </h1>
        <p className="font-editorial-italic text-editorial-italic text-on-surface-variant">
          Schedule a free consultation with us!
        </p>
      </div>
    </>
  )
}

function ContactInfo() {
  return (
    <>
      <div className="lg:col-span-4 flex flex-col gap-8">
        <div className="bg-soft-stone p-8 rounded-xl">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
            Direct Contact
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pale-teal flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-sm">mail</span>
              </div>
              <a
                href="mailto:stephaniec@amisonconsulting.com"
                className="font-body-md text-body-md text-primary"
              >
                stephaniec@amisonconsulting.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pale-teal flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-sm">phone</span>
              </div>
              <a
                href="tel:951-746-0662"
                className="font-body-md text-body-md text-primary"
              >
                +1 (951)-746-0662
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pale-teal flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
              </div>
              <span className="font-body-md text-body-md text-primary">
                Temecula, CA 92592, US
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden aspect-4/3 bg-surface-variant hidden lg:block relative group">
          <img
            alt="Office desk setup"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            data-alt="A meticulously organized modern office desk top-down view. Features a sleek metallic laptop, a minimalist notebook bound in muted brass, and a finely crafted pen resting on a warm ivory surface. Natural, soft sunlight casts gentle shadows, creating a calm, professional, and strategic atmosphere consistent with a premium consulting firm. High resolution, photorealistic."
            src="/images/Contract-Image-jpg.png"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
        </div>
      </div>
    </>
  )
}

function ContactForm() {
  return (
    <>
      <div className="lg:col-span-8 bg-surface-container-lowest p-6 md:p-10 rounded-xl form-card-shadow border border-surface-dim">
        <form action="#" className="flex flex-col gap-base" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label
                className="font-label-bold text-label-bold text-primary uppercase"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface"
                id="firstName"
                name="firstName"
                placeholder="Jane"
                required
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="font-label-bold text-label-bold text-primary uppercase"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                required
                type="text"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label
                className="font-label-bold text-label-bold text-primary uppercase"
                htmlFor="companyName"
              >
                Company Name
              </label>
              <input
                className="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface"
                id="companyName"
                name="companyName"
                placeholder="Acme Corp"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="font-label-bold text-label-bold text-primary uppercase"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface"
                id="email"
                name="email"
                placeholder="jane@example.com"
                required
                type="email"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label
                className="font-label-bold text-label-bold text-primary uppercase"
                htmlFor="phone"
              >
                Contact Phone Number
              </label>
              <input
                className="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface"
                id="phone"
                name="phone"
                placeholder="(555) 000-0000"
                type="tel"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="font-label-bold text-label-bold text-primary uppercase"
                htmlFor="projectType"
              >
                Project Type
              </label>
              <div className="relative">
                <select
                  className="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface appearance-none pr-10"
                  id="projectType"
                  name="projectType"
                >
                  <option disabled selected value="">
                    Select an area of focus
                  </option>
                  <option value="strategy">Strategic Planning</option>
                  <option value="operations">Operational Efficiency</option>
                  <option value="digital">Digital Transformation</option>
                  <option value="other">Other Inquiry</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-gray pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label
              className="font-label-bold text-label-bold text-primary uppercase"
              htmlFor="date"
            >
              Preferred Date for Discovery Call
            </label>
            <div className="relative max-w-md">
              <input
                className="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface"
                id="date"
                name="date"
                type="date"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <label
              className="font-label-bold text-label-bold text-primary uppercase"
              htmlFor="message"
            >
              Tell us about the problem you are looking to solve
            </label>
            <textarea
              className="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface resize-y"
              id="message"
              name="message"
              placeholder="Briefly describe your current challenges and goals..."
              rows={5}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-primary text-on-primary font-button text-button px-8 py-4 rounded hover:bg-primary-container transition-colors duration-200 flex items-center gap-2"
              type="submit"
            >
              Request Consultation
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
