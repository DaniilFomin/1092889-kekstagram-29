const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const pictureDescription = bigPicture.querySelector('.social__caption');
const commentsVisibleCount = bigPicture.querySelector('.social__comment-count');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentsContainer = bigPicture.querySelector('.social__comments');
const loadCommentsButton = bigPicture.querySelector('.social__comments-loader');

if (!bigPicture) {
	throw new Error('Big picture not found');
}

export {
	bigPicture,
	bigPictureImg,
	likesCount,
	commentsCount,
	pictureDescription,
	commentsVisibleCount,
	closeButton,
	commentsContainer,
	loadCommentsButton
};
