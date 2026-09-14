<?php
/**
 * Contact - Title
 *
 * @package Amison_Consulting
 */
	$contact = get_field('contact_page');
?>
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h1 class="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-primary mb-6">
          <?php echo esc_html($contact['contact_title']); ?>
        </h1>
        <p class="font-editorial-italic text-editorial-italic text-on-surface-variant">
          <?php echo esc_html($contact['contact_subtitle']); ?>
  		  </p>
      </div>
