import {getCommentsByPhotoId} from './photos';

const packsFromArray = (photoComments, packLength) => {
	const packs = [];
	let lastElementIndex = 0;
	while(lastElementIndex < photoComments.length){
		packs.push(photoComments.slice(lastElementIndex, lastElementIndex + packLength));
		lastElementIndex += packLength;
	}
	return packs;
};
function* generateIterablePacks(arr, packLength) {
	const iterableArray = arr.slice();
	const insufficientElements = arr.length % packLength || packLength;
	const lastElements = iterableArray.splice(-insufficientElements,insufficientElements);

	yield* packsFromArray(iterableArray,packLength);
	return lastElements;
}

const getCommentsPack = (id, packLength) => {
	const comments = getCommentsByPhotoId(id);
	return generateIterablePacks(comments, packLength);
};


export {
	getCommentsPack
};
