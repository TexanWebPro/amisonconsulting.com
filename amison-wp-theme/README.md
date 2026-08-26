# Amison Consulting WordPress Theme

Custom WordPress theme for the Amison Consulting website.

This theme is intentionally designed to preserve the approved website design while allowing the site's content to be managed through WordPress. The theme owns the HTML structure, layout, responsive behavior, and visual design; WordPress and ACF provide the editable content.

## Philosophy

This is **not** a Gutenberg-built page-builder theme.

The site's visual structure is implemented directly in PHP template files using the same HTML structure and Tailwind CSS classes established during the design/prototyping phase.

The basic architecture is:

```text
WordPress
    │
    ├── Content
    │     └── WordPress + ACF
    │
    └── Presentation
          ├── PHP templates
          ├── Template parts
          └── Tailwind CSS
```

This separation is intentional.

### Content

The client should be able to edit:

- Headings
- Paragraphs
- Button labels
- Button URLs
- Images
- Repeated content such as FAQ items or service descriptions
- Other copy exposed through ACF fields

### Design

The theme controls:

- HTML structure
- Layout
- Spacing
- Typography
- Colors
- Responsive behavior
- Component positioning
- Decorative elements
- CSS classes
- Page composition

Do **not** expose these things to the client through editable fields unless there is a specific requirement to do so.

The client should not need to understand HTML, CSS, PHP, Tailwind, or Gutenberg in order to maintain the site's content.

---

# Directory Structure

```text
amison-consulting/
│
├── style.css
├── functions.php
├── front-page.php
├── page.php
├── 404.php
├── header.php
├── footer.php
│
├── page-templates/
│   ├── contact.php
│   ├── faqs.php
│   ├── fee-schedule.php
│   ├── meet-the-founder.php
│   ├── solutions.php
│   └── the-acs-approach.php
│
├── template-parts/
│   │
│   ├── common/
│   │   └── cta.php
│   │
│   ├── home/
│   │   ├── hero.php
│   │   ├── value.php
│   │   └── roadmap.php
│   │
│   ├── contact/
│   │   ├── title.php
│   │   ├── contact-info.php
│   │   └── contact-form.php
│   │
│   ├── faqs/
│   │   ├── banner.php
│   │   ├── about-acs.php
│   │   ├── services-scope.php
│   │   ├── process.php
│   │   ├── projects.php
│   │   ├── fees.php
│   │   ├── individuals.php
│   │   └── client-experience.php
│   │
│   ├── fee-schedule/
│   │   ├── header.php
│   │   └── tiers.php
│   │
│   ├── meet-the-founder/
│   │   └── founder.php
│   │
│   ├── solutions/
│   │   ├── clarity.php
│   │   ├── workflow-optimization.php
│   │   ├── documentation.php
│   │   ├── implementation-support.php
│   │   ├── ongoing-support.php
│   │   └── note.php
│   │
│   └── the-acs-approach/
│       ├── philosophy.php
│       ├── about.php
│       ├── right-fit.php
│       └── method.php
│
├── acf-json/
│   ├── group_home.json
│   ├── group_contact.json
│   ├── group_faqs.json
│   ├── group_fee_schedule.json
│   ├── group_meet_the_founder.json
│   ├── group_solutions.json
│   ├── group_acs_approach.json
│   └── group_site_settings.json
│
├── assets/
│   ├── js/
│   │   └── main.js
│   │
│   ├── fonts/
│   │   └── ...
│
├── tailwind.config.mjs
├── package.json
├── package-lock.json
└── README.md
```

The exact contents may change as the site evolves. Do not create new abstraction layers simply to make the directory structure more symmetrical.

---

# How the Theme Is Organized

## Page Templates

Page templates represent complete pages.

For example:

```text
page-templates/
└── solutions.php
```

is responsible for assembling the Solutions page.

A page template should generally be short:

```php
<?php get_header(); ?>

<main>

    <?php get_template_part( 'template-parts/solutions/clarity' ); ?>

    <?php get_template_part( 'template-parts/solutions/workflow-optimization' ); ?>

    <?php get_template_part( 'template-parts/solutions/documentation' ); ?>

    <?php get_template_part( 'template-parts/solutions/implementation-support' ); ?>

    <?php get_template_part( 'template-parts/solutions/ongoing-support' ); ?>

</main>

<?php get_footer(); ?>
```

The page template should answer:

> "What sections make up this page?"

It should not contain hundreds of lines of markup unless the page is genuinely simple enough that splitting it would make the code harder to understand.

---

# Template Parts

Template parts contain the actual HTML for individual visual sections.

For example:

```text
template-parts/
└── home/
    └── hero.php
```

contains the complete markup for the homepage hero.

A template part should answer:

> "How is this section rendered?"

For example:

```php
<section class="...">

    <div class="...">

        <h1>
            <?php the_field( 'hero_heading' ); ?>
        </h1>

        <p>
            <?php the_field( 'hero_description' ); ?>
        </p>

    </div>

</section>
```

This is deliberate.

A future developer should be able to open `hero.php` and immediately understand the complete structure of the hero.

---

# ACF and Content Editing

Advanced Custom Fields is used to separate editable content from the theme's presentation.

The basic rule is:

> **ACF provides data. PHP provides markup.**

For example:

```php
<h2>
    <?php the_field( 'value_heading' ); ?>
</h2>
```

The ACF field contains the text.

The PHP template determines:

- where the heading appears
- what HTML element it uses
- which classes it receives
- how it behaves responsively

Do not put HTML or CSS into ACF fields.

## Field Naming

Field names should be descriptive and predictable.

Prefer:

```text
hero_heading
hero_description
hero_primary_button_label
hero_primary_button_url
```

over:

```text
heading1
text2
button
```

For fields belonging to a particular section, prefix the field with the section name where practical.

This makes templates easier to understand without having to constantly inspect the ACF configuration.

---

# Repeated Content

Use ACF repeaters for content that is naturally repeated.

For example:

```text
roadmap_steps
    ├── number
    ├── title
    └── description
```

The PHP template should control the markup:

```php
<?php if ( have_rows( 'roadmap_steps' ) ) : ?>

    <?php while ( have_rows( 'roadmap_steps' ) ) : the_row(); ?>

        <div class="...">

            <span>
                <?php the_sub_field( 'number' ); ?>
            </span>

            <h3>
                <?php the_sub_field( 'title' ); ?>
            </h3>

            <p>
                <?php the_sub_field( 'description' ); ?>
            </p>

        </div>

    <?php endwhile; ?>

<?php endif; ?>
```

Do not create a separate PHP file for every repeated item.

---

# Images

Images that represent client-editable content should normally be stored in the WordPress Media Library and referenced through ACF.

Do not hard-code client content images into the theme when they can reasonably be managed through WordPress.

For example:

```php
<?php
$image = get_field( 'founder_image' );

if ( $image ) :
    echo wp_get_attachment_image(
        $image['ID'],
        'large',
        false,
        array(
            'class' => '...',
            'alt'   => $image['alt'],
        )
    );
endif;
?>
```

Theme assets should be reserved for assets that are genuinely part of the theme itself.

---

# Shared Components

If the same visual section is used on multiple pages, consider putting it in:

```text
template-parts/common/
```

For example:

```text
template-parts/common/cta.php
```

and then:

```php
<?php get_template_part( 'template-parts/common/cta' ); ?>
```

Do not create shared components merely because two sections look vaguely similar.

If two sections have different content structures or different design behavior, keeping them separate is preferable to creating a complicated conditional component.

---

# Tailwind CSS

The theme uses Tailwind CSS for the majority of its styling.

The Tailwind configuration is:

```text
tailwind.config.mjs
```

The primary source stylesheet is:

```text
assets/css/app.css
```

The Tailwind build must scan the PHP templates so that classes used in PHP are included in the generated stylesheet.

When adding a Tailwind class to a PHP template, make sure the Tailwind build process can detect it.

## Do not casually replace Tailwind classes with custom CSS

If an existing Tailwind utility can accomplish the desired change, use the existing Tailwind design system.

Only add custom CSS when the design genuinely requires behavior that is inconvenient or impossible to express through the existing utilities.

The goal is to preserve a consistent design system rather than accumulate one-off CSS rules.

---

# Design Changes vs. Content Changes

Before editing anything, determine whether the requested change is a **content change** or a **design change**.

## Content change

Examples:

- Change a heading
- Correct a typo
- Replace a paragraph
- Change a button URL
- Replace a photograph
- Add another FAQ
- Change a service description

These should normally be handled through WordPress/ACF.

Do not modify PHP for ordinary content changes.

## Design change

Examples:

- Change section spacing
- Change font sizes
- Change colors
- Change the number of columns
- Change responsive behavior
- Move an element
- Change the HTML hierarchy
- Add/remove decorative elements

These belong in the theme code and/or CSS.

Do not create an ACF field just because a design value might someday need to change.

The purpose of this theme is to prevent accidental design changes by content editors.

---

# Gutenberg

This theme does not use Gutenberg as the primary page-layout system.

Do not rebuild existing pages using Gutenberg blocks merely because WordPress provides them.

The approved page layouts are intentionally implemented as PHP templates.

Gutenberg can still be used for ordinary WordPress content where appropriate, particularly if a future feature requires rich editorial content.

However, do not replace the existing structured page templates with a collection of arbitrary Gutenberg blocks without a deliberate architectural reason.

---

# WordPress Template Hierarchy

The theme follows normal WordPress conventions wherever practical.

Important files include:

```text
front-page.php
page.php
single.php
404.php
header.php
footer.php
```

Page-specific templates live under:

```text
page-templates/
```

When adding a new major page, prefer:

```text
page-templates/example.php
```

and a corresponding collection of template parts:

```text
template-parts/example/
```

rather than putting the entire page into one enormous PHP file.

---

# Global Site Settings

Site-wide content should be managed separately from page-specific content.

Examples include:

- Business phone number
- Business email
- Social media URLs
- Address
- Footer information
- Other information repeated throughout the site

These should use the `site_settings` ACF field group rather than duplicating the same content across multiple pages.

This prevents a situation where changing one phone number requires manually editing five different pages.

---

# Navigation

Navigation should use WordPress's native menu/navigation functionality rather than hard-coded page URLs wherever practical.

This allows the client or future developer to change navigation without editing PHP.

When linking to internal pages from PHP, prefer WordPress functions such as:

```php
get_permalink()
home_url()
```

rather than hard-coding production URLs.

---

# Security and Escaping

All dynamic content should be escaped appropriately.

Examples:

```php
esc_html()
esc_attr()
esc_url()
wp_kses_post()
```

Use the appropriate function for the context.

For example:

```php
<a href="<?php echo esc_url( $url ); ?>">
    <?php echo esc_html( $label ); ?>
</a>
```

Do not assume that ACF content is automatically safe simply because it comes from the WordPress administrator.

---

# Accessibility

When modifying the theme:

- Maintain semantic HTML.
- Preserve heading hierarchy.
- Provide appropriate `alt` text for meaningful images.
- Do not use images of text where actual text can be used.
- Ensure links and buttons remain keyboard accessible.
- Do not remove visible focus states without providing an accessible replacement.
- Preserve sufficient color contrast.
- Do not use `<div>` elements as interactive controls when a semantic `<button>` or `<a>` is appropriate.

The existing design should be preserved, but accessibility takes precedence over preserving an accidental implementation detail.

---

# Development Workflow

The theme should be developed locally rather than edited directly on production.

Recommended workflow:

```text
Local WordPress
      ↓
Edit theme
      ↓
Build Tailwind
      ↓
Test
      ↓
Git commit
      ↓
Deploy theme
      ↓
Test on staging
      ↓
Deploy production
```

Do not edit PHP or CSS directly through the WordPress Theme File Editor on production.

---

# Tailwind Development

Install dependencies:

```bash
npm install
```

Run the development build:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

The exact commands should match the scripts defined in `package.json`.

After modifying PHP templates, verify that the production Tailwind build includes all classes used by the templates.

---

# ACF Configuration

The `acf-json/` directory contains the field-group definitions used by the theme.

Do not delete or recreate these field groups manually without checking the JSON configuration first.

When modifying the content model:

1. Make the change in the appropriate ACF field group.
2. Save the field group.
3. Verify that the corresponding JSON configuration is updated.
4. Commit the changed JSON file.
5. Test the field on a local/staging WordPress installation.

The goal is for the theme repository to contain both:

```text
Presentation
+
Content schema
```

while the WordPress database contains the actual client content.

---

# Making a New Design Change

When a client requests a design change:

### 1. Find the page

For example:

```text
Solutions
```

### 2. Find its page template

```text
page-templates/solutions.php
```

### 3. Find the relevant section

For example:

```text
template-parts/solutions/documentation.php
```

### 4. Modify the markup or Tailwind classes

Do not create an ACF field unless the client needs to edit the new value.

### 5. Test responsive behavior

Check at minimum:

- Mobile
- Tablet
- Desktop

### 6. Build the production CSS

```bash
npm run build
```

### 7. Test the WordPress page

Confirm that the change did not affect other pages or shared components.

---

# Making a Content Change

If the client asks to change:

> "Improve your workflow."

to:

> "Build a better workflow."

do **not** edit the PHP template if the text is already an ACF field.

Instead:

1. Open the appropriate WordPress page.
2. Find the relevant ACF field.
3. Edit the content.
4. Save the page.
5. Verify the frontend.

The theme should not need to change.

---

# Adding a New Section

If a completely new section is required:

1. Add the necessary ACF fields.
2. Create a new template part under the appropriate page directory.
3. Implement the HTML structure.
4. Add Tailwind classes.
5. Add the template part to the page template.
6. Test responsive behavior.
7. Update `acf-json/`.
8. Commit the changes.

Example:

```text
template-parts/
└── solutions/
    └── new-section.php
```

Then:

```php
<?php get_template_part( 'template-parts/solutions/new-section' ); ?>
```

---

# Adding a New Page

For a new major page:

```text
page-templates/
└── new-page.php
```

Create corresponding sections:

```text
template-parts/
└── new-page/
    ├── hero.php
    ├── section-one.php
    └── cta.php
```

Create an ACF field group:

```text
acf-json/
└── group_new_page.json
```

Then create the corresponding WordPress Page and assign the template.

---

# What Not to Do

Avoid the following unless there is a strong architectural reason:

- Rebuild the existing pages using Gutenberg blocks.
- Introduce Elementor, Divi, or another page builder.
- Hard-code client-editable content into PHP.
- Put HTML markup inside ACF text fields.
- Put CSS inside ACF fields.
- Create a PHP file for every tiny HTML element.
- Create a custom framework for this relatively small site.
- Hard-code production URLs.
- Edit production theme files through the WordPress dashboard.
- Add a plugin dependency when WordPress or the existing theme can already solve the problem.
- Change the approved layout simply to make the PHP implementation easier.

The theme should remain straightforward enough that another competent WordPress developer can take over without needing the original developer to explain a proprietary architecture.

---

# Ownership and Vendor Independence

This site is intentionally built so that it does not depend on the original developer's infrastructure.

The client should own and control:

- WordPress hosting
- Domain
- WordPress installation
- WordPress administrator accounts
- ACF license, if applicable
- Analytics accounts
- Search Console
- Other third-party service accounts

The theme source code should be maintained in version control and should be available to the client.

A future developer should be able to receive:

```text
WordPress administrator credentials
+
hosting credentials
+
theme source
+
plugin/license information
```

and begin working without needing access to the original developer's accounts or infrastructure.

---

# Design Source

The original design was prototyped in a TanStack Start application using React and Tailwind CSS.

The WordPress implementation intentionally preserves the approved prototype's:

- HTML hierarchy
- Tailwind classes
- typography
- spacing
- responsive behavior
- visual design
- copy
- imagery
- page structure

The prototype should be treated as a **design reference**, not as a runtime dependency.

The WordPress site does not require TanStack Start, React, Vite, or a JavaScript application server to function.

---

# When in Doubt

Prefer the simplest implementation that preserves the existing design.

Ask:

> "Does this need to be editable by the client?"

If **no**, keep it in the theme.

If **yes**, expose the smallest reasonable piece of content through ACF.

Then ask:

> "Could another WordPress developer understand this without talking to the original developer?"

If **no**, simplify the implementation.

The long-term goal of this theme is not abstraction. It is **clarity, maintainability, and client-controlled content without client-controlled design**.
