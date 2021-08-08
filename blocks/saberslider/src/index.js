import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';

registerBlockType( 'saber-slider/slider', {
	edit: Edit,
	save: save,
	attributes: {
		splideTheme: {
			type: 'string',
			default: 'sea-blue'
		},
		sliderOptionType: {
			type: 'string',
			default: 'slide'
		},
		sliderOptionHeight: {
			type: 'number',
			default: 500
		}
	}
});
