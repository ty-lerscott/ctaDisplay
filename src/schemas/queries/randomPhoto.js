const axios = require('axios');
const ENDPOINTS = require('../../endpoints');

const getRandomPhoto = async args => {
	const {status, data: {urls}} = await axios.get(ENDPOINTS.getRandomPhoto(args));
	return {
		url: urls.regular || ""
	}
};

module.exports = {
    getRandomPhoto
};