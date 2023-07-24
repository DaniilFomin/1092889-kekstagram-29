import {setBigPicture, unsetBigPicture} from '../../renderers/big-picture';
import {addEscapeListener, removeModalState, isEscape, removeEscapeListener, addModalState} from '../global';
import {setComments, unsetComments} from './comments';
import {bigPicture, closeButton} from '../../elements/big-picture';


closeButton.addEventListener('click', closeBigPicture);
const escapeBigPictureListener = (evt) => {
	if(isEscape(evt)){
		closeBigPicture();
	}
};

const openBigPicture = (photo) => {
	setBigPicture(photo);
	bigPicture.classList.toggle('hidden');
	addEscapeListener(escapeBigPictureListener);
	addModalState();
	setComments(photo);
};

function closeBigPicture() {
	unsetBigPicture();
	bigPicture.classList.toggle('hidden');
	removeEscapeListener(escapeBigPictureListener);
	removeModalState();
	unsetComments();
}

export {
	openBigPicture,
};


