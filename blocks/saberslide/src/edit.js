import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { ColorPicker } from '@wordpress/components';

import './editor.scss';

export default function Edit() {

	const ALLOWED_BLOCKS = [ 'core/columns' ];

	return (
		<li { ...useBlockProps() }>

			<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />

		</li>
	);

}
