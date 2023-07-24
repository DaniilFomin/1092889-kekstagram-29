const Method = {
	GET : 'GET',
	POST : 'POST'
};
const Address = {
	BASE_URL : 'https://29.javascript.pages.academy/kekstagram',
};

const Route = {
	RESPONSE_URL : '/',
	REQUEST_URL : '/data',
};

const FetchError = {
	GET_ERROR : 'Данные не загруженны с сервера',
	POST_ERROR : 'Данные не загруженны на сервер'
};

const load = (route, errorText, method = Method.GET, body = null) =>
	fetch(`${Address.BASE_URL}${route}`, {
		method: method,
		body: body
	})
		.then((response) => {
			if(response.ok) {
				return response.json();
			}
			throw new Error();
		})
		.catch(() => {
			throw new Error(errorText);
		});


const getData = async (cb) => {
	try {
		const result = await load(Route.REQUEST_URL, FetchError.GET_ERROR);
		cb(result);
	} catch (err) {
		throw new Error(err.message);
	}
};

const sendData = async (onSuccess, onError, data) => {
	try {
		await load(Route.RESPONSE_URL, FetchError.POST_ERROR, Method.POST, data);
		onSuccess();
	} catch (err) {
		onError(err);
	}
};

export {getData, sendData};
