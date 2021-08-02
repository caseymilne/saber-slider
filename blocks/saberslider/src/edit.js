import { Placeholder, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import SaberSlider from './components/SaberSlider.js';
import SaberSlide from './components/SaberSlide.js';
import SaberSlideRow from './components/SaberSlideRow.js';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit( { attributes, isSelected, setAttributes } ) {

	const ALLOWED_BLOCKS = [ 'saber-slider/slide' ];

	return (
		<div { ...useBlockProps() }>
			{ attributes.message && ! isSelected ? (
				<div>{ attributes.message }</div>
			) : (
				<Placeholder
					label="Saber Slider"
					instructions="Add slides to your new slider."
				>
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
				</Placeholder>
				) }
		</div>
	);
}