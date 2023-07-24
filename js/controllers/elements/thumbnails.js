const thumbnailsContainer = document.querySelector('.pictures');
if (!thumbnailsContainer) {
	throw new Error('Thumbnails container not found');
}

export {
	thumbnailsContainer
};

