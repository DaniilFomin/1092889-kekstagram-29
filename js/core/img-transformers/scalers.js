const MIN_VALUE = 25;
const MAX_VALUE = 100;
const ADD_VALUE = 25;

const scaleUp = (value) => {
	value += ADD_VALUE;
	if (value >= MAX_VALUE) {
		return MAX_VALUE;
	}
	return value;
};

const scaleDown = (value) => {
	value -= ADD_VALUE;
	if (value <= MIN_VALUE) {
		return MIN_VALUE;
	}
	return value;
};

export {scaleUp, scaleDown};
