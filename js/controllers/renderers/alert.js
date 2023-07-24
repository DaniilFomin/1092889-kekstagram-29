import {render} from '../../utils/render';
import {errorAlertTemplate, successAlertTemplate} from '../elements/template';

const alertContainer = document.body;

const createSuccessAlertNode = () => successAlertTemplate.cloneNode(true);

const createErrorAlertNode = () => errorAlertTemplate.cloneNode(true);

const createCustomAlertNode = (message) => {
	const customAlert = document.createElement('div');
	customAlert.classList.add('custom-alert');
	customAlert.innerText = message;
	return customAlert;
};


const showAlert = (type, message = '') => {
	switch (type) {
		case 'success': {
			const alert = createSuccessAlertNode();
			render(alertContainer,alert);
			return alert;
		}
		case 'error': {
			const alert = createErrorAlertNode();
			render(alertContainer,alert);
			return alert;
		}
		case 'custom': {
			const alert = createCustomAlertNode(message);
			render(alertContainer,alert);
			return alert;
		}
		default : {
			const alert = createCustomAlertNode('Alert of Alert');
			render(alertContainer,alert);
			return alert;
		}
	}
};

export {showAlert};
