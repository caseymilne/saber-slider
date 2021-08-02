<?php

/**
 *
 * Plugin Name: Saber Slider
 * Plugin URI: https://wordpress.org/plugins/saber-slider/
 * Description: Provides slider creation and management using JSON exchange format.
 * Version: 1.0.0
 * Author: Saber WP
 * Author URI: https://saberwp.com/
 * Text Domain: saber-slider
 * License: GPL3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 *
 */

namespace SaberSlider;

define( 'SABER_SLIDER_PLUGIN_NAME', 'Saber Slider' );
define( 'SABER_SLIDER_VERSION', '1.0.0' );
define( 'SABER_SLIDER_PATH', plugin_dir_path(__FILE__) );
define( 'SABER_SLIDER_URL', plugin_dir_url(__FILE__) );
define( 'SABER_SLIDER_DEV_MODE', false );

class Plugin {

	public function __construct() {

		require_once( 'saberslider/saberslider.php' );

		add_action( 'wp_enqueue_scripts', function() {

			wp_enqueue_script(
				'saber-slider-splide-jsmin',
				SABER_SLIDER_URL . '/node_modules/@slidejs/splide/dist/js/slide.min.js',
				array(),
				time(),
				true
			);

		});

	}


}

new Plugin();
