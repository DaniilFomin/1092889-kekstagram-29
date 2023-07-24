const getRandomInt = (min, max) => {
	const lower = Math.floor(min);
	const upper = Math.ceil(max);
	return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomArrayElement = (arr) => arr[getRandomInt(0, arr.length - 1)];

const getRandomUniqueArray = (arr) => {
	const uniqueElements = new Set();
	const arrayUniqueLength = new Set(arr).size;
	while(uniqueElements.size !== arrayUniqueLength) {
		uniqueElements.add(getRandomArrayElement(arr));
	}
	return Array.from(uniqueElements);
};

export {
	getRandomInt,
	getRandomArrayElement,
	getRandomUniqueArray
};
