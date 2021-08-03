/*
 * See https://awhitepixel.com/blog/wordpress-gutenberg-add-image-select-custom-block/
 */

import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { ColorPicker, Button } from '@wordpress/components';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import './editor.scss';

export function Edit( { attributes, setAttributes, media } ) {

	const divStyles = {
		backgroundColor: attributes.backgroundColor
	}

	const ALLOWED_MEDIA_TYPES = [ 'image' ];

	const instructions = <p>{ __( 'To edit the background image, you need permission to upload media.', 'image-selector-example' ) }</p>;

	const onUpdateImage = ( image ) => {

		setAttributes( {
			image: {
				id: image.id,
				url: image.url
			},
		});
	};

	return (
		<div { ...useBlockProps() }>

			<InspectorControls key="setting">

				<ColorPicker
					color={ attributes.backgroundColor }
					onChangeComplete={ ( value ) => setAttributes({ backgroundColor: value.hex }) }
					disableAlpha
				/>

			</InspectorControls>

			<MediaUploadCheck fallback={ instructions }>
				<MediaUpload
					title={ __( 'Slide Image', 'saber-slider' ) }
					onSelect={ onUpdateImage }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					value={ attributes.image.id }
					render={ ( { open } ) => (
						<Button
							className={ 'editor-post-featured-image__toggle' }
							onClick={ open }>
							{ __( 'Set / Change Slide Image', 'saber-slider' ) }
						</Button>
				) }
				/>
			</MediaUploadCheck>

			<div style={divStyles}>

				{media != undefined &&
					<img src={ media.source_url }/>
				}

			</div>

		</div>
	);
}

const applyWithSelect = withSelect((select, props) => {

	return { media: props.attributes.image.id ? select('core').getMedia( props.attributes.image.id ) : undefined };

});

export default compose(
	applyWithSelect,
)( Edit );
