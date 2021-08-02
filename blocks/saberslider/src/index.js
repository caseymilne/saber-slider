import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';

registerBlockType( 'saber-slider/slider', {
	edit: Edit,
	save: save
});
