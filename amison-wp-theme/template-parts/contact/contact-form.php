<?php
/**
 * Contact - Contact Form
 *
 * @package Amison_Consulting
 */
?>

      <div class="lg:col-span-8 bg-surface-container-lowest p-6 md:p-10 rounded-xl form-card-shadow border border-surface-dim">
        <form action="#" class="flex flex-col gap-base" method="POST">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="flex flex-col gap-2">
              <label
                class="font-label-bold text-label-bold text-primary uppercase"
                for="firstName"
              >
                First Name
              </label>
              <input
                class="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface"
                id="firstName"
                name="firstName"
                placeholder="Jane"
                required
                type="text"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label
                class="font-label-bold text-label-bold text-primary uppercase"
                for="lastName"
              >
                Last Name
              </label>
              <input
                class="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                required
                type="text"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="flex flex-col gap-2">
              <label
                class="font-label-bold text-label-bold text-primary uppercase"
                for="companyName"
              >
                Company Name
              </label>
              <input
                class="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface"
                id="companyName"
                name="companyName"
                placeholder="Acme Corp"
                type="text"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label
                class="font-label-bold text-label-bold text-primary uppercase"
                for="email"
              >
                Email Address
              </label>
              <input
                class="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface"
                id="email"
                name="email"
                placeholder="jane@example.com"
                required
                type="email"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="flex flex-col gap-2">
              <label
                class="font-label-bold text-label-bold text-primary uppercase"
                for="phone"
              >
                Contact Phone Number
              </label>
              <input
                class="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface"
                id="phone"
                name="phone"
                placeholder="(555) 000-0000"
                type="tel"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label
                class="font-label-bold text-label-bold text-primary uppercase"
                for="projectType"
              >
                Project Type
              </label>
              <div class="relative">
                <select
                  class="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface appearance-none pr-10"
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
                <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-gray pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2 mb-6">
            <label
              class="font-label-bold text-label-bold text-primary uppercase"
              for="date"
            >
              Preferred Date for Discovery Call
            </label>
            <div class="relative max-w-md">
              <input
                class="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface"
                id="date"
                name="date"
                type="date"
              />
            </div>
          </div>
          <div class="flex flex-col gap-2 mb-8">
            <label
              class="font-label-bold text-label-bold text-primary uppercase"
              for="message"
            >
              Tell us about the problem you are looking to solve
            </label>
            <textarea
              class="w-full bg-surface-container-lowest input-border rounded p-3 font-body-md text-body-md text-on-surface resize-y"
              id="message"
              name="message"
              placeholder="Briefly describe your current challenges and goals..."
              rows="5"
            ></textarea>
          </div>
          <div class="flex justify-end">
            <button
              class="bg-primary text-on-primary font-button text-button px-8 py-4 rounded hover:bg-primary-container transition-colors duration-200 flex items-center gap-2"
              type="submit"
            >
              Request Consultation
              <span class="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
        </form>
      </div>
