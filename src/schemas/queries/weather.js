const axios = require('axios');
const convert = require('convert-units');
const ENDPOINTS = require('../../endpoints');

const getWeather = async args => {
	const {status, data: {
		sys,
		main,
		weather
	}} = await axios.get(ENDPOINTS.getWeather(args));

	return {
		...((status === 200) && {
			sunset: sys.sunset*1000,
			humidity: main.humidity,
			sunrise: sys.sunrise*1000,
			low: Math.floor(convert(main.temp_min).from('K').to('F')),
			high: Math.floor(convert(main.temp_max).from('K').to('F')),
			temperature: Math.floor(convert(main.temp).from('K').to('F')),
			condition: Array.isArray(weather) ? weather[0].main.toLowerCase() : weather.main.toLowerCase()
		})
	}
};

module.exports = {
    getWeather
};