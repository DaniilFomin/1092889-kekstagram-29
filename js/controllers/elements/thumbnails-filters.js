const contentFiltersContainer = document.querySelector('.img-filters');
const filterForm = contentFiltersContainer.querySelector('.img-filters__form');

if(!contentFiltersContainer) {
	throw new Error('Filter bar not found');
}

export {
	contentFiltersContainer,
	filterForm
};
