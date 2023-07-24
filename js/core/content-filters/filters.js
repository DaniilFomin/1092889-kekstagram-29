import {getRandomUniqueArray} from '../../utils/randomizers';

const RANDOM_IMAGES_COUNT = 10;
const compareDiscussed = (a, b) => b.comments.length - a.comments.length;

const filterByRandom = (photos) => getRandomUniqueArray(photos.slice()).slice(0, RANDOM_IMAGES_COUNT);


const filterByDiscussed = (photos) => [...photos].sort(compareDiscussed);


export {filterByRandom, filterByDiscussed};
