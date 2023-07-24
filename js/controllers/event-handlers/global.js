const isEscape = ({key}) => key === 'Escape';

const addModalState = () => document.body.classList.add('modal-open');
const removeModalState = () => document.body.classList.remove('modal-open');

const addEscapeListener = (listener) => {
	document.addEventListener('keydown',listener);
};

const removeEscapeListener = (listener) => {
	document.removeEventListener('keydown', listener);
};

export {isEscape, addEscapeListener, removeEscapeListener, addModalState, removeModalState};

