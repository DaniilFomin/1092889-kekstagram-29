const effectsMap = new Map([
	['chrome', {
		effectType: 'grayscale',
		scaleData: 	{min:0,max:1,step:0.1},
		units: ''
	}],
	['sepia',{
		effectType: 'sepia',
		scaleData: 	{min:0,max:1,step:0.1},
		units: ''
	}],
	['marvin',{
		effectType: 'invert',
		scaleData: 	{min:0,max:100,step:1},
		units: '%'
	}],
	['phobos',{
		effectType: 'blur',
		scaleData: 	{min:0,max:3,step:0.1},
		units: 'px'
	}],
	['heat',{
		effectType: 'brightness',
		scaleData: 	{min:0,max:3,step:0.1},
		units: ''
	}]
]);

export {effectsMap};
