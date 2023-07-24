import {filterByDiscussed, filterByRandom} from '../content-filters/filters';

const filtersByFilterType = new Map([
	['random', filterByRandom],
	['discussed', filterByDiscussed]
]
);

const getPhotosState = () => {
	let photosState = [];
	const updatePhotosState = (newState) => {
		photosState = newState;
	};
	const getPhotos = () => photosState;
	return [getPhotos, updatePhotosState];
};

const [getPhotos, updatePhotosState] = getPhotosState();

const getFilteredPhotos = (filterType = 'default') => {
	const photos = getPhotos();
	if (filterType === 'default') {
		return getPhotos();
	}
	return filtersByFilterType.get(filterType)(photos);
};

const getPhotoById = (id) => getPhotos().find((photo) => photo.id === id);

const getCommentsByPhotoId = (id) => getPhotoById(id).comments;

export {getPhotos, getPhotoById, getCommentsByPhotoId, updatePhotosState, getFilteredPhotos};
