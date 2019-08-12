import {EventsConstants as EC} from 'constants/index';

export const getEvents = () => (dispatch, getState, api) => {
	dispatch({
		type: EC.EVENTS_PENDING,
		payload: {}
	});

	return Promise.resolve(
		api({
			query: `
				query Events {
					events{
						time,
						isSport,
						isConcert
					}
				}
			`
		})
	).then(({data: {data: {events}}}) => {
		dispatch({
			type: EC.EVENTS_FETCHED,
			payload: events
		});
		return events;
	});
}
