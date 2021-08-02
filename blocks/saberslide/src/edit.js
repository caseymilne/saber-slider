import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {

	const ALLOWED_BLOCKS = [ 'saber-slider/slide-row' ];

	return (
		<li { ...useBlockProps() }>
			<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
		</li>
	);
}
