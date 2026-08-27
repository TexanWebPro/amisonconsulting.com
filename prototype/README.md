# Amison Consulting — Website Prototype

This repository contains the approved design and content prototype for the Amison Consulting website.

The prototype is built with **TanStack Start, React, TypeScript, and Tailwind CSS**. It exists primarily as a rapid design and development environment. The approved prototype is subsequently translated into a custom WordPress theme for production.

The WordPress site is intentionally **not** a headless WordPress implementation. WordPress is used as the client's content management system, while this prototype serves as the source of truth for the site's visual design and frontend implementation.

---

## Purpose of This Repository

This project was created to allow the website to be designed and iterated rapidly before being migrated to WordPress.

The workflow is:

```text
Design + Copy
     ↓
TanStack Start Prototype
     ↓
Client Approval
     ↓
Translate JSX → PHP
     ↓
Custom WordPress Theme
     ↓
Production Website
```

The prototype therefore represents more than a visual mockup. It is the working frontend implementation of the approved design.

The WordPress theme preserves the prototype's:

- HTML structure
- Tailwind classes
- responsive behavior
- typography
- spacing
- colors
- imagery
- layout
- interactions
- approved copy

WordPress/ACF primarily replaces the prototype's hard-coded content with editable content fields.

---

## Technology

- TanStack Start — application/framework layer
- React — component and page rendering during prototyping
- TypeScript — application code
- Tailwind CSS — primary styling system
- Vite — development/build tooling

The production WordPress theme does not depend on TanStack Start, React, or a Node.js runtime.

---

## Why This Architecture?

The site was deliberately developed in a frontend framework rather than directly in WordPress because the design could be iterated much more quickly in code.

This provides several advantages during development:

- Layout can be changed directly in JSX.
- Responsive behavior can be tested immediately.
- Tailwind classes make the visual implementation explicit.
- The entire page can be treated as real HTML rather than a collection of visual editor blocks.
- Changes can be made quickly without fighting a CMS's visual editor.
- The resulting implementation can later be translated into a conventional WordPress theme.

Once the design and copy were approved, rebuilding the site in Gutenberg would have introduced unnecessary work and could have made the final markup substantially different from the approved prototype.

Instead, the production theme preserves the prototype's HTML and Tailwind implementation as closely as possible.

---

## Project Structure

```
prototype/
├── src/
│   ├── routes/
│   │   └── __root.tsx // page layout & meta tags
│   │   └── index.tsx // homepage
│   │   └── ...
│   ├── components/
│   │   └── ...
│   ├── styles.css
│   └── ...
│
├── public/
│   └── fonts/
│   └── images/
│
├── package.json
├── tailwind.config.mjs
└── ...
```

### Routes

Pages are implemented as TanStack Start routes.

A route should contain the page's approved markup and content unless a section is intentionally shared between pages.

### Components

Shared layout or site-wide elements should be implemented as components.

Examples include:

- Header
- Footer
- shared navigation
- reusable layout elements

A page does not need to be artificially divided into dozens of components simply for the sake of componentization. The prototype is intended to remain easy to read and easy to translate into PHP templates.

### `src/styles.css`

This is the source stylesheet for the Tailwind build.

It contains the project's Tailwind directives/configuration and any custom CSS that cannot or should not be expressed through utility classes.

Do not manually modify the generated production CSS artifact instead of changing this source configuration.

---

## Tailwind CSS

Tailwind is the primary styling system for this project.

The HTML/JSX contains the majority of the site's visual implementation directly through utility classes.

For example:

`<section className="px-6 py-16 md:px-12 md:py-24">`

This is intentional.

The Tailwind classes should generally be considered part of the component's implementation rather than content that should be exposed to the client.

### Design System

Custom colors, fonts, spacing, breakpoints, and other Tailwind configuration should be maintained in the project's Tailwind configuration/source CSS.

Do not introduce arbitrary design values when an existing design token or utility already represents the intended design.

Before introducing a new value, check whether the existing configuration already provides the appropriate utility.

---

### Making Design Changes

The prototype is the source of truth for the site's design.

If a design change is requested, make the change here first.

For example, if a section needs different spacing:

`<section className="py-16 md:py-24">`

should be changed in the prototype.

Do not make the corresponding change only in the WordPress theme.

The normal workflow is:

```
Requested design change
        ↓
Change prototype
        ↓
Review/test prototype
        ↓
Build prototype
        ↓
Update WordPress CSS artifact/templates
        ↓
Deploy WordPress changes
```

This ensures that the prototype and production website do not gradually diverge.

After any changes to the `theme` object in the `tailwind.config.mjs` file, make sure you copy that new `theme` object contents into the `theme` object between the `<script></script>` tags in `amison-wp-theme/header.php`.

After any addition or deletion of classes in the prototype `.tsx` files, run the `pnpm build` command and be sure to replace the `amison-wo-theme/assets/cs/tailwind-build-artifact.css` file with the new CSS file found at `prototype/.output/public/assets/styles-{randomLetters}.css` to ensure that the WordPress theme's styles reflect the changes. This is necessary to keep the site SEO friendly and performant becaues the Tailwind build process strips all unnecessary CSS.

---

### Making Copy Changes

During initial development, page copy may exist directly in JSX.

Once the site has been migrated to WordPress, editable content should generally be managed through WordPress and ACF rather than by modifying this repository.

Therefore:

#### Design change

Make it here.

#### Content change after WordPress launch

Make it in WordPress/ACF.

#### Content + design change

Make the design change here, then update the WordPress implementation as necessary.

---

### Making Changes to Tailwind Configuration

If a change requires modifying the custom Tailwind configuration, make the change in this prototype rather than in the production WordPress theme.

Examples include:

- adding or changing a color
- changing a font
- modifying spacing tokens
- changing breakpoints
- adding Tailwind plugins
- adding custom utilities
- changing other Tailwind theme configuration

After making the change, rebuild the prototype.

The resulting CSS build artifact is then copied to the WordPress theme.

See the WordPress theme's README for the production deployment procedure.

---

### Changing Tailwind Classes

If a Tailwind class needs to be changed, added, or removed as part of a design change, make the change in the prototype first.

For example:

```

- <div className="py-16 md:py-24"></div>
+ <div className="py-20 md:py-32"></div>
```

After the change:

- Test the prototype.
- Run the production build.
- Replace the compiled CSS artifact in the WordPress theme.
- Ensure the corresponding PHP markup in WordPress uses the same class names.

Do <b>not</b> manually edit the compiled CSS file.

---

### Production CSS Build

The WordPress theme does not run Tailwind.

Instead, Tailwind is compiled during prototype development/build and the resulting CSS is copied into the WordPress theme.

After running the production build, the compiled CSS can be found at:

`prototype/.output/public/assets/styles-{randomLetters}.css`

The filename may change between builds because the build system generates hashed asset filenames.

The production WordPress theme stores this artifact as:

`amison-wp-theme/assets/css/tailwind-build-artifact.css`

When the Tailwind output changes, replace the WordPress artifact with the newly generated CSS file.

#### Important

The generated CSS file is an <b>artifact</b>.

Do not manually edit:

`amison-wp-theme/assets/css/tailwind-build-artifact.css`

If a style needs to change, change the source implementation or Tailwind configuration in this prototype and rebuild.

---

### Production Build Workflow

After making design changes, run the normal production build:

`pnpm run build`

The exact build command is defined in package.json.

After the build completes, locate the generated stylesheet:

`.output/public/assets/styles-{randomLetters}.css`

Copy it to:

`amison-wp-theme/assets/css/tailwind-build-artifact.css`

The WordPress theme then serves the compiled stylesheet as a normal static CSS file.

The production WordPress installation does not need:

- Node.js
- npm/pnpm
- Tailwind CLI
- Vite
- React
- TanStack Start

## Preserving the Prototype During WordPress Conversion

When translating a page from JSX to PHP, preserve the existing HTML structure and Tailwind classes whenever possible.

For example, this prototype:

```tsx
<section className="px-6 py-16 md:px-12 md:py-24">
  <div className="mx-auto max-w-7xl">
    <h2 className="text-3xl font-bold md:text-5xl">Our Approach</h2>
  </div>
</section>
```

should become approximately:

```php
<section class="px-6 py-16 md:px-12 md:py-24">
    <div class="mx-auto max-w-7xl">
        <h2 class="text-3xl font-bold md:text-5xl">
            <?php the_field( 'heading' ); ?>
        </h2>
    </div>
</section>
```

ACF should replace the content, not the design.

---

## ACF and Editable Content

The production WordPress theme uses Advanced Custom Fields (ACF) to give the client control over appropriate content without giving them control over the site's underlying design.

Generally:

### ACF should control

- headings
- paragraphs
- button labels
- links
- images
- contact information
- other client-editable content

### ACF should generally NOT control

- Tailwind classes
- spacing
- colors
- typography classes
- HTML structure
- responsive behavior
- arbitrary CSS
- layout configuration

For example, prefer:

```php
<h2 class="text-3xl font-bold md:text-5xl">
    <?php the_field( 'heading' ); ?>
</h2>
```

over:

`<h2 class="<?php the_field( 'heading_classes' ); ?>">`

The former protects the design while allowing the client to change the content.

---

## Responsive behavior is implemented using Tailwind's responsive utilities.

For example:

`mobile → md → lg→ xl`

When modifying a component, test all relevant viewport sizes rather than assuming that a desktop change will behave correctly on mobile.

The WordPress implementation should preserve the same responsive classes used by the prototype.

---

## JavaScript

JavaScript should only be introduced when it provides behavior that cannot reasonably be achieved with HTML/CSS.

Examples might include:

- mobile navigation
- accordions
- interactive UI
- form behavior
- animations requiring JavaScript

Avoid introducing unnecessary JavaScript dependencies.

The production WordPress theme is intended to remain a conventional WordPress theme, not a React application.

---

## Images and Other Assets

Assets required by the design should be kept organized and given meaningful names.

When the production site is migrated to WordPress, client-editable images should generally be moved into the WordPress Media Library and exposed through ACF fields.

Static assets that are part of the theme itself may remain within the theme's `assets/` directory.

---

## Relationship to the WordPress Theme

There are intentionally two separate implementations:

```
prototype: Design + frontend development source
amison-wp-theme: Production WordPress theme
```

They should remain visually and structurally equivalent, but they serve different purposes.

The prototype is optimized for development and design iteration.

The WordPress theme is optimized for client content management and long-term maintainability.

The production theme should not be modified in ways that cause it to diverge from the approved prototype without a deliberate reason.

### Before Making a Production Change

Before modifying the WordPress theme directly, determine what kind of change is required.

| Change                           | Where to make it                |
| -------------------------------- | ------------------------------- |
| Client copy                      | WordPress / ACF                 |
| Client image                     | WordPress / Media Library / ACF |
| Navigation links                 | WordPress                       |
| Design/layout                    | Prototype                       |
| Tailwind class                   | Prototype                       |
| Tailwind configuration           | Prototype                       |
| New CSS utility                  | Prototype                       |
| New reusable visual component    | Prototype, then WordPress       |
| WordPress-specific functionality | WordPress theme                 |
| SEO metadata                     | WordPress                       |
| WordPress content structure      | WordPress theme / ACF           |

The general rule is "Content belongs in WordPress. Design belongs in the prototype."

---

## Development Philosophy

This project intentionally avoids over-engineering.

The prototype should remain:

- readable
- straightforward
- close to the resulting HTML
- easy to modify
- easy to translate into PHP
- faithful to the approved design

Do not introduce abstractions merely because a particular pattern is considered "more React-like."

Likewise, do not rebuild approved layouts in Gutenberg simply because WordPress provides a block editor.

The goal is to preserve the work that has already been completed while giving the client an appropriate content-management interface.

## Quick Reference

### Start development

`pnpm install`

### Run the development server

`pnpm run dev`

### Build for production

`pnpm run build`

### Compiled CSS

After building:

`prototype/.output/public/assets/styles-{randomLetters}.css`

### WordPress CSS destination

`amison-wp-theme/assets/css/tailwind-build-artifact.css`

### Design source of truth

`prototype/`

### Production CMS

`amison-wp-theme/`

### Core rule

Make design changes in the prototype first. Make content changes in WordPress.
