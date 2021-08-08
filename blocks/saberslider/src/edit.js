import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, isSelected, setAttributes } ) {

	const ALLOWED_BLOCKS = [
		'saber-slider/slide',
		'saber-slider/image'
	];

	return (

		<div { ...useBlockProps() }>

			<InspectorControls key="setting">

				<label>Slider Height (px)</label>
				<NumberControl
					isShiftStepEnabled={ true }
					shiftStep={ 50 }
					value={ attributes.sliderOptionHeight }
					onChange={ ( value ) => setAttributes({ sliderOptionHeight: value }) }
				/>

				<SelectControl
					label="Splide Theme"
					value={ attributes.splideTheme }
					options={ [
						{ label: 'Sky Blue', value: 'sky-blue' },
						{ label: 'Sea Green', value: 'sea-green' },
						{ label: 'Default', value: 'default' },
						{ label: 'None', value: 'none' },
					] }
					onChange={ ( value ) => setAttributes({ splideTheme: value }) }
				/>

				<SelectControl
					label="Slider Type"
					value={ attributes.sliderOptionType }
					options={ [
						{ label: 'Slide', value: 'slide' },
						{ label: 'Loop', value: 'loop' },
						{ label: 'Fade', value: 'fade' },
					] }
					onChange={ ( value ) => setAttributes({ sliderOptionType: value }) }
				/>

			</InspectorControls>

			{ ! isSelected ? (

				<React.Fragment>

					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />

				</React.Fragment>

			) : (
				<React.Fragment>
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
				</React.Fragment>
				) }
		</div>
	);
}
