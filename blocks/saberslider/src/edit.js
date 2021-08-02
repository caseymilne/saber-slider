import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import ContextHeader from './components/ContextHeader.js';

import './editor.scss';

export default function Edit( { attributes, isSelected, setAttributes } ) {

	const ALLOWED_BLOCKS = [ 'saber-slider/slide' ];

	return (
		<div { ...useBlockProps() }>
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
