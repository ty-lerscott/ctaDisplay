import {ServiceAlertsConstants as SC} from 'constants/index';

import { onlyUniqueAlerts } from 'utils/alerts';

export default (state = [], {type, payload}) => {
    switch (type) {
        case SC.SERVICE_ALERTS_FETCHED:
			return onlyUniqueAlerts(payload);
        case SC.SERVICE_ALERTS_ERROR:
            console.warn(payload);
            return payload;
        case SC.SERVICE_ALERTS_PENDING:
        default:
            return state
    }
}