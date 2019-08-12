const RandomPhoto = require('../types/randomPhoto');
const {	getRandomPhoto } = require('../queries/randomPhoto');

module.exports = {
	randomPhoto: {
		type: RandomPhoto.type,
		args: {},
		resolve: async (parent, args) => {
			return await getRandomPhoto(args);
		}
	}
};