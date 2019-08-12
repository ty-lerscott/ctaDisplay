import {ServiceAlertsConstants as SC} from 'constants/index';

import { onlyUniqueAlerts } from 'utils/alerts';

export const getServiceAlerts = () => (dispatch, getState, api) => {
	dispatch({
		type: SC.SERVICE_ALERTS_PENDING,
		payload: {}
	});

	return Promise.resolve(
		api({
			query: `
				query ServiceAlerts {
					serviceAlerts{
						id,
						description,
						impactedRoutes
					}
				}
			`
		})
	).then(({data: {data: {serviceAlerts}}}) => {
		dispatch({
			type: SC.SERVICE_ALERTS_FETCHED,
			payload: serviceAlerts
		});
		return onlyUniqueAlerts(serviceAlerts);
	});
	return;
}
