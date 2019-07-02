const axios = require('axios');
const ENDPOINTS = require('../endpoints');
const {database} = require('../../firebase/config');

const getUnsplashPhoto = async (args) => {
	try {
		const {status, data: {urls}} = await axios.get(ENDPOINTS.getRandomPhoto(args));

		var photos = database.ref("unsplash");

		if (status === 200 && urls.regular) {
			photos.push(urls.regular);
			console.warn('updated unsplash database')
		}
	} catch (err) {
		console.warn('there was an error in requesting unsplash', err);
	}
}

const execute = () => {
	getUnsplashPhoto();
	setInterval(getUnsplashPhoto, process.env.POLLING_UNSPLASH);
}


module.exports = execute;