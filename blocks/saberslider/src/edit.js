import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import ContextHeader from './components/ContextHeader.js';
import { ColorPicker } from '@wordpress/components';

import './editor.scss';

export default function Edit( { attributes, isSelected, setAttributes } ) {

	const ALLOWED_BLOCKS = [ 'saber-slider/slide' ];

	// Setup storage for color picker.
	const [ color, setColor ] = useState( '#f00' );

	return (
		<div { ...useBlockProps() }>

			<InspectorControls key="setting">
				<ColorPicker
					color={ color }
					onChangeComplete={ ( value ) => setColor( value.hex ) }
					disableAlpha
				/>
			</InspectorControls>

			{ ! isSelected ? (

				<React.Fragment>

					<ContextHeader />
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />

				</React.Fragment>

			) : (
				<React.Fragment>
					<ContextHeader />
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
				</React.Fragment>
				) }
		</div>
	);
}
