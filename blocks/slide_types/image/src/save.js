import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const { image } = attributes;

	return (
		<li class="splide__slide">
			<img src={image.url}/>
		</li>
	);

}
