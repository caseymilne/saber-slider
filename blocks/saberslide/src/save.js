import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<li class="splide__slide"> 
			<InnerBlocks.Content />
		</li>
	);
}
