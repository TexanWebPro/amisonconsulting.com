<?php
/**
 * Contact - Contact Info
 *
 * @package Amison_Consulting
 */
	$contact = get_field('contact_page');
?>

      <div class="lg:col-span-4 flex flex-col gap-8">
        <div class="bg-soft-stone p-8 rounded-xl">
          <h3 class="font-headline-sm text-headline-sm text-primary mb-4">
            <?php echo esc_html($contact['direct_contact_title']); ?>
			    </h3>
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-pale-teal flex items-center justify-center text-secondary">
                <span class="material-symbols-outlined text-sm">mail</span>
              </div>
              <a
                href="mailto:<?php echo esc_attr($contact['contact_email']); ?>"
                class="font-body-md text-body-md text-primary"
              >
                <?php echo esc_html($contact['contact_email']); ?>
              </a>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-pale-teal flex items-center justify-center text-secondary">
                <span class="material-symbols-outlined text-sm">phone</span>
              </div>
              <a
                href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $contact['contact_phone'])); ?>"
                class="font-body-md text-body-md text-primary"
              >
                <?php echo esc_html($contact['contact_phone']); ?>
              </a>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-pale-teal flex items-center justify-center text-secondary">
                <span class="material-symbols-outlined text-sm">
                  location_on
                </span>
              </div>
              <span class="font-body-md text-body-md text-primary">
                <?php echo esc_html($contact['contact_location']); ?>
              </span>
            </div>
          </div>
        </div>
        <div class="rounded-xl overflow-hidden aspect-4/3 bg-surface-variant hidden lg:block relative group">
          <img
            alt="<?php echo esc_attr($contact['contact_image']['alt']); ?>"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src="<?php echo esc_url($contact['contact_image']['url']); ?>"
          />
          <div class="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
        </div>
      </div>
