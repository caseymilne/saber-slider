<?php
/**
 * Plugin Name:       Saber Slide Image
 * Description:       Saber Slider Type Image.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       saber-slider
 *
 * @package           saber-slider
 */

function create_block_image_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'create_block_image_block_init' );
