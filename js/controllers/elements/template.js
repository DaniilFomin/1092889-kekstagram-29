const thumbnailTemplate = document.querySelector('#picture').content
	.querySelector('.picture');
const commentTemplate = document.querySelector('#social__comment').content
	.querySelector('.social__comment');
const successAlertTemplate = document.querySelector('#success').content
	.querySelector('.success');
const errorAlertTemplate = document.querySelector('#error').content
	.querySelector('.error');

if (!commentTemplate || !thumbnailTemplate || !successAlertTemplate || !errorAlertTemplate) {
	throw new Error('One or a few Templates are missing');
}

export {
	thumbnailTemplate,
	commentTemplate,
	successAlertTemplate,
	errorAlertTemplate,
};
