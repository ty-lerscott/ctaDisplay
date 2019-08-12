import {WeatherConstants as WC} from 'constants/index';

export const getWeather = () => (dispatch, getState, api) => {
	dispatch({
		type: WC.WEATHER_PENDING,
		payload: {}
	});

	return Promise.resolve(
		api({
			query: `
				query Weather {
					weather{
						low,
						high,
						sunset,
						sunrise,
						humidity,
						condition,
						temperature
					}
				}
			`
		})
	).then(({data: {data: {weather}}}) => {
		dispatch({
			type: WC.WEATHER_FETCHED,
			payload: weather
		});
		return;
	});
}
