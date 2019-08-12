const FIELDS = require('../baseFields');

const defaultFields = {
    timestamp: FIELDS.string,
	rate: FIELDS.integer,
	error: FIELDS.string
};

const RateType = FIELDS.object({
	name: 'Rate',
	description: 'A way to see the number of requests made in a day',
	fields: () => defaultFields
});

module.exports = {
	type: RateType,
	defaultFields
};