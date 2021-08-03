import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { ColorPicker, Button } from '@wordpress/components';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import './editor.scss';

export function Edit( { attributes, setAttributes, media } ) {

	console.log( media )

	const divStyles = {
		backgroundColor: attributes.backgroundColor
	}

	const ALLOWED_MEDIA_TYPES = [ 'image' ];

	const instructions = <p>{ __( 'To edit the background image, you need permission to upload media.', 'image-selector-example' ) }</p>;

	const onUpdateImage = ( image ) => {
            setAttributes( {
                bgImageId: image.id,
            } );
        };

	return (
		<div { ...useBlockProps() }>

			<InspectorControls key="setting">

				<ColorPicker
					color={ attributes.backgroundColor }
					onChangeComplete={ ( value ) => setAttributes({ backgroundColor: value.hex }) }
					disableAlpha
				/>

				<MediaUploadCheck fallback={ instructions }>
                                <MediaUpload
                                    title={ __( 'Background image', 'image-selector-example' ) }
                                    onSelect={ onUpdateImage }
                                    allowedTypes={ ALLOWED_MEDIA_TYPES }
                                    value={ attributes.bgImageId }
                                    render={ ( { open } ) => (
                                        <Button
                                            className={ 'editor-post-featured-image__toggle' }
                                            onClick={ open }>
                                            { __( 'Set background image', 'image-selector-example' ) }
                                        </Button>
                                    ) }
                                />
                            </MediaUploadCheck>

			</InspectorControls>

			<MediaUploadCheck fallback={ instructions }>
															<MediaUpload
																	title={ __( 'Background image', 'image-selector-example' ) }
																	onSelect={ onUpdateImage }
																	allowedTypes={ ALLOWED_MEDIA_TYPES }
																	value={ attributes.bgImageId }
																	render={ ( { open } ) => (
																			<Button
																					className={ 'editor-post-featured-image__toggle' }
																					onClick={ open }>
																					{ __( 'Set background image', 'image-selector-example' ) }
																			</Button>
																	) }
															/>
													</MediaUploadCheck>

			<div style={divStyles}>

				{ !! attributes.bgImageId && media &&
					<img src={ media.source_url }/>
				}

				<h3>Test 1234</h3>
				asfdsaf sdafdsa fsdafsda fsdafds
			</div>

		</div>
	);
}

const applyWithSelect = withSelect((select, props) => {
    // media is the name of the returned value
    return { media: props.attributes.bgImageId ? select('core').getMedia(props.attributes.bgImageId) : undefined };
});

/**
* Use compose to return the result of withSelect to Edit({...})
* @see https://developer.wordpress.org/block-editor/packages/packages-compose/
*/
export default compose(
    applyWithSelect,
)(Edit);
