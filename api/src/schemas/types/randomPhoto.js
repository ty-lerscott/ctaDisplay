const FIELDS = require('../baseFields');

const defaultFields = {
	url: FIELDS.string
};

const RandomPhotoType = FIELDS.object({
	name: 'RandomPhoto',
	description: 'A Random Photo from Unsplash',
	fields: () => defaultFields
});

module.exports = {
	type: RandomPhotoType,
	defaultFields
};