import {getPhotoById} from '../../../core/storage/photos';
import {openBigPicture} from '../big-picture/big-picture';
import {debounce} from '../../../utils/debounce';
import {renderThumbnails} from '../../renderers/thumbnails';
import {thumbnailsContainer} from '../../elements/thumbnails';

const DEBOUNCE_TIME = 500;

const thumbnailsClickListener = (evt) => {
	const target = evt.target;
	if (target.closest('.picture')){
		evt.preventDefault();
		const thumbnail = target.closest('.picture');
		const photoId = new URL(thumbnail.href).pathname.split('/').pop();
		const photo = getPhotoById(Number(photoId));
		openBigPicture(photo);
	}
};

const addThumbnailsListeners = () => {
	thumbnailsContainer.addEventListener('click',thumbnailsClickListener);
};

const removeThumbnailsListeners = () => {
	thumbnailsContainer.removeEventListener('click',thumbnailsClickListener);
};

const rerenderThumbnails = (photos) => {
	const pictures = Array.from(thumbnailsContainer.querySelectorAll('.picture'));
	if (pictures.length > 0) {
		pictures.forEach((el) => el.remove());
		removeThumbnailsListeners();
	}
	renderThumbnails(...photos);
	addThumbnailsListeners();
};

const debouncedRerenderThumbnails = debounce(rerenderThumbnails, DEBOUNCE_TIME);


export {debouncedRerenderThumbnails, addThumbnailsListeners};
