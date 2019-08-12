const FIELDS = require('../baseFields');

const defaultFields = {
	low: FIELDS.integer,
	high: FIELDS.integer,
	humidity: FIELDS.integer,
	condition: FIELDS.string,
	sunset: FIELDS.biginteger,
	sunrise: FIELDS.biginteger,
	temperature: FIELDS.integer
};

const WeatherType = FIELDS.object({
	name: 'Weather',
	description: 'Weather Data',
	fields: () => defaultFields
});

module.exports = {
	type: WeatherType,
	defaultFields
};