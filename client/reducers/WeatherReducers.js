import {WeatherConstants as WC} from 'constants/index';

export default (state = {
	low: "",
	high: "",
	sunset: "",
	sunrise: "",
	humidity: "",
	condition: "",
	temperature: ""
}, {type, payload}) => {
    switch (type) {
        case WC.WEATHER_FETCHED:
            return payload;
        default:
            return state
    }
};