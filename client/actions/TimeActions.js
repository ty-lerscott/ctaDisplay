import {TimeConstants as TC} from 'constants/index';
import moment from 'moment';


export const getTime = () => (dispatch, getState, api) => {
	const time = moment();

	dispatch({
		type: TC.SET_TIME,
		payload: {
			dayOfWeek: time.day(),
			dateOfMonth: time.date(),
			month: time.month(),
			year: time.year(),
			time: time.format('h:mm:ss a')
		}
	})

	return Promise.resolve();
}
