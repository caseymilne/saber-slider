import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import ContextHeader from './components/ContextHeader.js';

export default function save() {

	return (
		<div { ...useBlockProps.save() }>
			<div class="splide">
				<div class="splide__track">
					<ul class="splide__list">
						<InnerBlocks.Content />
					</ul>
				</div>
			</div>
		</div>
	);

}
