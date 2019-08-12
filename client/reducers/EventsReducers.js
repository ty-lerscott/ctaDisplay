import {EventsConstants as EC} from 'constants/index';

export default (state = [], {type, payload}) => {
    switch (type) {
        case EC.EVENTS_FETCHED:
            return payload;
        case EC.EVENTS_ERROR:
            console.warn(payload);
            return payload;
        case EC.EVENTS_PENDING:
        default:
            return state
    }
}