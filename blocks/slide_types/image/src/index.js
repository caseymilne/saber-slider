import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';

registerBlockType( 'saber-slider/image', {
	edit: Edit,
	save,
	attributes: {
		backgroundColor: {
			type: 'string',
			default: '#EBEBEB'
		},
		bgImageId: {
			type: 'number',
			default: 0
		},
		image: {
			type: 'string',
			default: ''
		}
	}
} );
