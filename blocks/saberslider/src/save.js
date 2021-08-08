import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const slideSettings = {
		type: attributes.sliderOptionType,
		height: attributes.sliderOptionHeight + 'px'
	}
	console.log( )
	console.log(  JSON.stringify( slideSettings ) )

	return (
		<div { ...useBlockProps.save() }>
			<div class="splide" data-splide={ JSON.stringify( slideSettings ) }>
				<div class="splide__track">
					<ul class="splide__list">
						<InnerBlocks.Content />
					</ul>
				</div>
			</div>
		</div>
	);

}
