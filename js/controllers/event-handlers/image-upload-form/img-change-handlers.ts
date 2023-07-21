import {
	resetImageFilter,
	resetImagePreview,
	updateImageFilter,
	updateImageScale
} from '../../renderers/render-image-form';
import {scaleDown, scaleUp} from '../../../core/img-transformers/img-scaler';
import {Effects, effectsMap, Scale, scaleMap, units} from '../../../core/img-transformers/img-filters';
import {API} from 'nouislider';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import {
	effect, effectsWrapper,
	scale,
	scaleDownButton,
	scaleUpButton,
	sliderContainer,
	sliderWrapper
} from '../../elements/form-elements';

let currentSlider: API;

const createSlider = ({min,max,step}: Scale):API => noUiSlider.create(sliderWrapper,{
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
const resetEffects = () => {
	resetImageFilter();
	sliderContainer.hidden = true;
};

const updateEffectsListener = (value: Array<string|number>) => {
	const effectValue = effect.value;
	updateImageFilter(effectsMap.get(effectValue)!, `${value}${units.get(effectValue)}`);
};

const changeEffectsListener = (evt: Event) => {
	evt.preventDefault();
	destroySlider();
	if (effect.value === 'none') {
		resetEffects();
		return;
	}
	const effectValue = effect.value as Effects;
	sliderContainer.hidden = false;
	currentSlider = createSlider(scaleMap.get(effectValue)!);
	updateImageFilter(effectsMap.get(effectValue)!, `${scaleMap.get(effectValue)!.max}${units.get(effectValue)}`);
	currentSlider.on('update', updateEffectsListener);
};

const removeEffects = () => {
	destroySlider();
	resetEffects();
};

const increaseScale = (evt: Event) => {
	evt.preventDefault();
	updateImageScale(scaleUp(parseInt(scale.value,10)));
};

const decreaseScale = (evt: Event) => {
	evt.preventDefault();
	updateImageScale(scaleDown(parseInt(scale.value, 10)));
};

const addScaleListeners = () => {
	scaleUpButton.addEventListener('click',increaseScale);
	scaleDownButton.addEventListener('click', decreaseScale);
};

const addEffectsListener = () => {
	effectsWrapper.addEventListener('change', changeEffectsListener);
};


export {
	addScaleListeners,
	addEffectsListener,
	removeEffects,
	resetImagePreview
};
