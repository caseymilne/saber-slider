import { Placeholder, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit( { attributes, className, setAttributes } ) {
	return (
		<React.Fragment>
			<div { ...useBlockProps() }>
				{ __( 'Saberslider – hello from the editor!', 'saberslider' ) }
			</div>
			<Placeholder
				label={ __( 'Saber Slider', 'saber-slider' ) }
				instructions={ __( 'Begin Adding Slides', 'saber-slider' ) }
			>
				<TextControl
					value={ attributes.message }
					onChange={ ( val ) => setAttributes( { message: val } ) }
				/>
			</Placeholder>
		</React.Fragment>
	);
}
