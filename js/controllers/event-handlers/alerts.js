import {showAlert} from '../renderers/alert';
import {addEscapeListener, isEscape, removeEscapeListener} from './global';

const ALERT_DURATION = 3000

let currentAlertNode;
let alertCloseButton;
let alertInner;
const escapeAlertListener = (evt) => {
	if(isEscape(evt)) {
		removeAlert();
	}
};

const overlayClickListener = (evt) => {
	evt.stopPropagation();
	const targetElement = evt.target;
	if(targetElement.closest('div') !== alertInner) {
		removeAlert();
	}
};
const addAlertListeners = () => {
	currentAlertNode.addEventListener('click', overlayClickListener);
	alertCloseButton.addEventListener('click', removeAlert);
	addEscapeListener(escapeAlertListener);
};
const removeAlertListeners = () => {
	currentAlertNode.removeEventListener('click', overlayClickListener);
	alertCloseButton.removeEventListener('click', removeAlert);
	removeEscapeListener(escapeAlertListener);
};


const addAlert = (type, message = '') => {
	if(type === 'custom') {
		const alert = (showAlert(type,message));
		setTimeout(() => alert.remove(), ALERT_DURATION);
		return;
	}
	currentAlertNode = (showAlert(type,message));
	alertCloseButton = currentAlertNode.querySelector('button');
	alertInner = currentAlertNode.querySelector('div');
	addAlertListeners();
};
function removeAlert () {
	removeAlertListeners();
	currentAlertNode.remove();
}


export {addAlert};
