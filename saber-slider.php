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

		require_once( 'blocks/saberslider/saberslider.php' );
		require_once( 'blocks/saberslide/saberslide.php' );

		add_action( 'wp_enqueue_scripts', function() {

			wp_enqueue_script(
				'saber-slider-splide-jsmin',
				SABER_SLIDER_URL . 'node_modules/@splidejs/splide/dist/js/splide.min.js',
				array(),
				time(),
				true
			);

			/* Plugin init splide instances. */
			wp_enqueue_script(
				'saber-slider-initjs',
				SABER_SLIDER_URL . 'init.js',
				array( 'saber-slider-splide-jsmin' ),
				time(),
				true
			);

			wp_enqueue_style(
				'saber-slider-splide-css-core',
				SABER_SLIDER_URL . 'node_modules/@splidejs/splide/dist/css/splide-core.min.css',
				array(),
				time()
			);

			/*
			// Splide theme default.
			wp_enqueue_style(
				'saber-slider-splide-css-theme-default',
				SABER_SLIDER_URL . 'node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css',
				array( 'saber-slider-splide-css-core' ),
				time()
			);
			*/

			// Splide theme sky blue.
			wp_enqueue_style(
				'saber-slider-splide-css-theme-default',
				SABER_SLIDER_URL . 'node_modules/@splidejs/splide/dist/css/themes/splide-skyblue.min.css',
				array( 'saber-slider-splide-css-core' ),
				time()
			);

			/*
			// Splide theme sea green.
			wp_enqueue_style(
				'saber-slider-splide-css-theme-default',
				SABER_SLIDER_URL . 'node_modules/@splidejs/splide/dist/css/themes/splide-sea-green.min.css',
				array( 'saber-slider-splide-css-core' ),
				time()
			);
			*/

		});

		// Register block patterns.
		add_action( 'init', function() {

			// $this->registerBlockPatterns();

		});

	}

	function registerBlockPatterns() {

		register_block_pattern(
			'saber-slider/slide-single-image',
			array(
				'title'       => __( 'Single Image Slide', 'saber-slider' ),
				'description' => _x( 'Simple slide to display a single image.', 'Block pattern description', 'saber-slider' ),
				'content'     => '<!-- wp:image --><figure class="wp-block-image"><img alt=""/></figure><!-- /wp:image -->',
			)
		);

	}

}

new Plugin();
