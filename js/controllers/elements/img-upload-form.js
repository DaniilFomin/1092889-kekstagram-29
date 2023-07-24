const form = document.querySelector('.img-upload__form');
const imageUploadOverlay = form.querySelector('.img-upload__overlay');
const imageUploadInput = form.querySelector('.img-upload__input');
const scaleUpButton = form.querySelector('.scale__control--bigger');
const scaleDownButton = form.querySelector('.scale__control--smaller');
const sliderContainer = form.querySelector('.img-upload__effect-level');
const sliderWrapper = form.querySelector('.effect-level__slider');
const effectsWrapper = form.querySelector('.effects');
const previewContainer = form.querySelector('.img-upload__preview');
const imagePreview = previewContainer.querySelector('img');
const effectsPreviews = form.querySelectorAll('.effects__preview');
const scaleValue = form.querySelector('.scale__control--value');
const effectValue = form.querySelector('.effect-level__value');
const submitButton = form.elements.namedItem('upload-submit');
const {effect,scale,description,hashtags} = form.elements;


if(!form || !imageUploadOverlay || !imageUploadInput || !previewContainer) {
	throw new Error('The markup has been broken, Cannot find Image Upload Form or it\'s parts');
}

export {
	form,
	imageUploadOverlay,
	imageUploadInput,
	submitButton,
	effect,
	scale,
	description,
	hashtags,
	scaleUpButton,
	scaleDownButton,
	sliderContainer,
	sliderWrapper,
	effectsWrapper,
	previewContainer,
	imagePreview,
	effectsPreviews,
	scaleValue,
	effectValue
};

