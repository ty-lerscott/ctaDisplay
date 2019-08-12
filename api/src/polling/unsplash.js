const axios = require('axios');
const ENDPOINTS = require('../endpoints');
const {database} = require('../../firebase/config');

const getUnsplashPhoto = async (args) => {
	try {
		const {status, data: {urls}} = await axios.get(ENDPOINTS.getRandomPhoto(args));

		var photos = database.ref("unsplash");

		if (status === 200 && urls.regular) {
			photos.push(urls.regular);
			// TODO: SAFE, non memory hogging log
		}
	} catch (err) {
		// TODO: SAFE, non memory hogging log
	}
}

const execute = () => {
	getUnsplashPhoto();
	setInterval(getUnsplashPhoto, process.env.POLLING_UNSPLASH);
}


module.exports = execute;