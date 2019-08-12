import {TimeConstants as TC} from 'constants/index';

export default (state = {
	dateOfMonth: null,
	dayOfWeek: null,
	month: null,
	time: null,
	year: null
}, {type, payload}) => {
    switch (type) {
        case TC.SET_TIME:
            return payload;
        default:
            return state
    }
};