const render = (root ,...elements) => {
	const fragment = document.createDocumentFragment();
	fragment.append(...elements);
	root.append(fragment);
};

export {render};
