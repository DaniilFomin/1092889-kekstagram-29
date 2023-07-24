import {render} from '../../utils/render';
import {thumbnailTemplate} from '../elements/template';
import {thumbnailsContainer} from '../elements/thumbnails';
const createThumbnailNode = (photo) => {

	const thumbnail = thumbnailTemplate.cloneNode(true);
	const thumbnailImg = thumbnail.querySelector('.picture__img');
	const thumbnailInfo = thumbnail.querySelector('.picture__info');
	const thumbnailComments = thumbnailInfo.querySelector('.picture__comments');
	const thumbnailLikes = thumbnailInfo.querySelector('.picture__likes');

	thumbnail.href = `photos/${photo.id}`;
	thumbnailImg.src = photo.url;
	thumbnailImg.alt = photo.description;
	thumbnailComments.textContent = photo.comments.length.toString();
	thumbnailLikes.textContent = photo.likes.toString();

	return thumbnail;
};
const renderThumbnails = (...photos) => {
	const thumbnails = photos.map(createThumbnailNode);
	render(thumbnailsContainer, ...thumbnails);
};


export {renderThumbnails};

