const FIELDS = require('../baseFields');

const Weather = require('../types/weather');
const {	getWeather } = require('../queries/weather');

module.exports = {
	weather: {
		type: Weather.type,
		args: {},
		resolve: async (parent, args) => {
			return await getWeather(args);
		}
	}
};