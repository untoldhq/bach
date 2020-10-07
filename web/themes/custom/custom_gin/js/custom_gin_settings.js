/* eslint-disable func-names, no-mutable-exports, comma-dangle, strict */

'use strict';

(($, Drupal, drupalSettings) => {
  Drupal.behaviors.customGinSettings = {
    attach: function attach(context) {
      // Watch Darkmode setting has changed.
      $('input[name="enable_darkmode"]', context).change(function () {
        const darkmode = $(this).is(':checked');
        const accentColorPreset = $('[data-drupal-selector="edit-preset-accent-color"] input:checked').val();
        const focusColorPreset = $('select[name="preset_focus_color"]').val();

        // Toggle Darkmode.
        Drupal.behaviors.customGinSettings.darkmode(darkmode);

        // Set custom color if 'custom' is set.
        if (accentColorPreset === 'custom') {
          const accentColorSetting = $('input[name="accent_color"]', context).val();

          Drupal.behaviors.customGinAccent.setCustomAccentColor('custom', accentColorSetting);
        } else {
          Drupal.behaviors.customGinAccent.setAccentColor(accentColorPreset);
        }

        // Toggle Focus color.
        Drupal.behaviors.customGinAccent.setFocusColor(focusColorPreset);
      });

      // Watch Accent color setting has changed.
      $('[data-drupal-selector="edit-preset-accent-color"] input', context).change(function () {
        const accentColorPreset = $(this).val();

        // Update.
        Drupal.behaviors.customGinAccent.clearAccentColor();
        Drupal.behaviors.customGinAccent.setAccentColor(accentColorPreset);

        // Set custom color if 'custom' is set.
        if (accentColorPreset === 'custom') {
          const accentColorSetting = $('input[name="accent_color"]').val();

          Drupal.behaviors.customGinAccent.setCustomAccentColor('custom', accentColorSetting);
        }
      });

      // Watch Accent color setting has changed.
      $('input[name="accent_color"]', context).change(function () {
        const accentColorSetting = $(this).val();

        // Update.
        Drupal.behaviors.customGinAccent.setCustomAccentColor('custom', accentColorSetting);
      });

      // Watch Accent color setting has changed.
      $('select[name="preset_focus_color"]', context).change(function () {
        const accentColorPreset = $(this).val();

        // Update.
        Drupal.behaviors.customGinAccent.setFocusColor(accentColorPreset);
      });

      // Watch Accent color setting has changed.
      $('input[name="focus_color"]', context).change(function () {
        const focusColorPreset = $('select[name="preset_focus_color"]').val();
        const focusColorSetting = $(this).val();

        // Update.
        Drupal.behaviors.customGinAccent.setFocusColor(focusColorPreset, focusColorSetting);
      });

      // Watch Hight contrast mode setting has changed.
      $('input[name="high_contrast_mode"]', context).change(function () {
        const highContrastMode = $(this).is(':checked');

        // Update.
        Drupal.behaviors.customGinSettings.setHighContrastMode(highContrastMode);
      });

      // Watch user settings has changed.
      $('input[name="enable_user_settings"]', context).change(function () {
        const active = $(this).is(':checked');

        let darkmode = $('input[name="enable_darkmode"]').is(':checked');
        let accentColorSetting = $('input[name="accent_color"]', context).val();
        let accentColorPreset = $('[data-drupal-selector="edit-preset-accent-color"] input:checked').val();
        let highContrastMode = $('input[name="high_contrast_mode"]').is(':checked');

        // User setting disabled, use default settings instead.
        if (!active) {
          darkmode = drupalSettings.custom_gin.default_darkmode;
          accentColorSetting = drupalSettings.custom_gin.default_accent_color;
          accentColorPreset = drupalSettings.custom_gin.default_preset_accent_color;
          highContrastMode = drupalSettings.custom_gin.default_high_contrast_mode;
        }

        // Update.
        Drupal.behaviors.customGinSettings.darkmode(darkmode);
        Drupal.behaviors.customGinAccent.setAccentColor(accentColorPreset, accentColorSetting);
        Drupal.behaviors.customGinSettings.setHighContrastMode(highContrastMode);
      });

      // Watch save
      $('[data-drupal-selector="edit-submit"]', context).click(function() {
        let accentColorPreset = $('[data-drupal-selector="edit-preset-accent-color"] input:checked').val();
        let accentColorSetting = $('input[name="accent_color"]', context).val();

        // If on user form, check if we enable or disable the overrides.
        if ($(this).parents('[data-drupal-selector="user-form"]').length > 0) {
          const userSettings = $('input[name="enable_user_settings"]', context).is(':checked');

          if (!userSettings) {
            accentColorSetting = drupalSettings.custom_gin.default_accent_color;
            accentColorPreset = drupalSettings.custom_gin.default_preset_accent_color;
          }
        }

        // Set custom color if 'custom' is set.
        if (accentColorPreset === 'custom') {
          localStorage.setItem('GinAccentColorCustom', accentColorSetting);
        } else {
          localStorage.setItem('GinAccentColorCustom', '');
        }
      });
    },

    darkmode: function darkmode(darkmodeParam = null) {
      const darkmodeEnabled = darkmodeParam != null ? darkmodeParam : drupalSettings.custom_gin.darkmode;
      const darkmodeClass = drupalSettings.custom_gin.darkmode_class;

      // Needs to check for both: backwards compabitility.
      if (darkmodeEnabled === true || darkmodeEnabled === 1) {
        $('body').addClass(darkmodeClass);
      }
      else {
        $('body').removeClass(darkmodeClass);
      }
    },

    setHighContrastMode: function setHighContrastMode(param = null) {
      const enabled = param != null ? param : drupalSettings.custom_gin.highcontrastmode;
      const className = drupalSettings.custom_gin.highcontrastmode_class;

      // Needs to check for both: backwards compabitility.
      if (enabled === true || enabled === 1) {
        $('body').addClass(className);
      }
      else {
        $('body').removeClass(className);
      }
    },
  };
})(jQuery, Drupal, drupalSettings);
