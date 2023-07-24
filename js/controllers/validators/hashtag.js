const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;

const HashtagError = {
	MAX_COUNT : 'Хэш-тэгов должно быть не больше пяти',
	NON_UNIQUE : 'Хэш-теги повторяются',
	HASH_START : 'Хэш-тег должен начинаться с решётки',
	HASH_LENGTH : 'Максимальная длина хэш-тега 20 символов включая решётку',
	HASH_CHARACTERS : 'Cтрока после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.',
	ONLY_HASH : 'Хэш-тег не может состоять из одной решётки'
};

let hashtagError = '';

const getHashtagError = () => hashtagError;

const HASHTAG_TEMPLATE = new RegExp(/^#[a-zа-яё0-9]{1,19}$/);

const isStartsWithHashtag = (value) => value.startsWith('#');

const isValidHashtag = (value) => HASHTAG_TEMPLATE.test(value);

const isRequiredLength = (value) => value.length <= MAX_HASHTAG_LENGTH;

const isUniqueHashtags = (value) => value.length === new Set(value).size;
const isMaxCount = (value) => value.length <= MAX_HASHTAG_COUNT;

const validateHashtags = (value) => {

	if(value.length === 0) {
		return true;
	}

	const hashtags = value.trim().toLocaleLowerCase().split(/\s+/);

	if(!isUniqueHashtags((hashtags))) {
		hashtagError = HashtagError.NON_UNIQUE;
		return false;
	}
	if(!isMaxCount(hashtags)) {
		hashtagError = HashtagError.MAX_COUNT;
		return false;
	}

	return hashtags.every((hashtag) => {
		if (!isStartsWithHashtag(hashtag)) {
			hashtagError = HashtagError.HASH_START;
			return false;
		}

		if (hashtag === '#') {
			hashtagError = HashtagError.ONLY_HASH;
			return false;
		}

		if (!isRequiredLength(hashtag)) {
			hashtagError = HashtagError.HASH_LENGTH;
			return false;
		}
		if (!isValidHashtag(hashtag)) {
			hashtagError = HashtagError.HASH_CHARACTERS;
			return false;
		}

		return true;
	});
};


export {validateHashtags, getHashtagError};
