const FIELDS = require('../baseFields');

const defaultFields = {
	low: FIELDS.integer,
	high: FIELDS.integer,
	sunset: FIELDS.string,
	sunrise: FIELDS.string,
	humidity: FIELDS.integer,
	condition: FIELDS.string,
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