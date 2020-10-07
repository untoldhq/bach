/* eslint-disable func-names, no-mutable-exports, comma-dangle, strict */

'use strict';

(($, Drupal, drupalSettings) => {
  Drupal.behaviors.customGinCKEditorContextMenu = {
    attach: function attach() {
      if (window.CKEDITOR && CKEDITOR !== undefined) {
        const accentCss = drupalSettings.custom_gin.accent_css_path;
        const contentsCss = drupalSettings.custom_gin.ckeditor_css_path;
        const accentColorPreset = drupalSettings.custom_gin.preset_accent_color;

        // Collect Gin Clases.
        let ginClasses = new Array();

        if (drupalSettings.custom_gin.darkmode) {
          ginClasses.push(drupalSettings.custom_gin.darkmode_class);
        }

        if (drupalSettings.custom_gin.highcontrastmode) {
          ginClasses.push(drupalSettings.custom_gin.highcontrastmode_class);
        }

        // Contextmenu styles.
        if (CKEDITOR.config.contextmenu_contentsCss === undefined) {
          CKEDITOR.config.contextmenu_contentsCss = new Array();
          CKEDITOR.config.contextmenu_contentsCss.push(CKEDITOR.skin.getPath('editor'));
          CKEDITOR.config.contextmenu_contentsCss.push(accentCss);
          CKEDITOR.config.contextmenu_contentsCss.push(contentsCss);
        }

        CKEDITOR.on('instanceReady', function() {
          // Main window of CKEDITOR.
          $('.cke_wysiwyg_frame').contents().find('body').addClass(ginClasses).attr('data-gin-accent', accentColorPreset);
        });

        // Watch for changes and inject styles.
        const observer = new MutationObserver(function() {
          // Contextmenu.
          $('body > .cke_menu_panel > iframe').contents().find('body').addClass(ginClasses).attr('data-gin-accent', accentColorPreset);
        });

        observer.observe(document.body, { childList: true });
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
