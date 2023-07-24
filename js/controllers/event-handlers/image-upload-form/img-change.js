import {
	resetImageFilter,
	resetImagePreview,
	updateImageFilter,
	updateImageScale
} from '../../renderers/img-upload-form';
import {scaleDown, scaleUp} from '../../../core/img-transformers/scalers';
import {effectsMap} from '../../../core/img-transformers/effects';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import {
	effect, effectsWrapper,
	scale,
	scaleDownButton,
	scaleUpButton,
	sliderContainer,
	sliderWrapper
} from '../../elements/img-upload-form';

let currentSlider;

const createSlider = ({min,max,step}) => noUiSlider.create(sliderWrapper,{
	start: max,
	range: {
		'min':min,
		'max':max
	},
	step: step,
	connect: 'lower'
});

sliderContainer.hidden = true;

const destroySlider = () => {
	if (currentSlider) {
		currentSlider.destroy();
	}
};
const resetEffect = () => {
	resetImageFilter();
	sliderContainer.hidden = true;
};

const updateEffectListener = (value) => {
	const effectValue = effect.value;
	const {effectType, units} = effectsMap.get(effectValue);
	updateImageFilter(effectType, `${value}${units}`);
};

const changeEffectListener = (evt) => {
	evt.preventDefault();
	destroySlider();

	if (effect.value === 'none') {
		resetEffect();
		return;
	}
	const effectValue = effect.value;
	sliderContainer.hidden = false;

	const {effectType, scaleData, units} = effectsMap.get(effectValue);
	currentSlider = createSlider(scaleData);
	updateImageFilter(effectType, `${scaleData.max}${units}`);
	currentSlider.on('update', updateEffectListener);
};

const removeEffect = () => {
	destroySlider();
	resetEffect();
};

const increaseScale = (evt) => {
	evt.preventDefault();
	updateImageScale(scaleUp(parseInt(scale.value,10)));
};

const decreaseScale = (evt) => {
	evt.preventDefault();
	updateImageScale(scaleDown(parseInt(scale.value, 10)));
};

const addScaleListeners = () => {
	scaleUpButton.addEventListener('click',increaseScale);
	scaleDownButton.addEventListener('click', decreaseScale);
};

const addEffectListener = () => {
	effectsWrapper.addEventListener('change', changeEffectListener);
};


export {
	addScaleListeners,
	addEffectListener,
	removeEffect,
	resetImagePreview
};
