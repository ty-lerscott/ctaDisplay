import {ArrivalsConstants as AC} from 'constants/index';

export default (state = [], {type, payload}) => {
    switch (type) {
        case AC.ARRIVALS_FETCHED:
            const trains = payload.trains ? Object.entries(payload.trains).map(bus => bus[1]) : [];
            const busses = payload.busses ? Object.entries(payload.busses).map(bus => bus[1]) : [];

            return trains.concat(busses).slice(0, Number(process.env.DISPLAY_LIMIT)).filter(vehicle => !!vehicle.id);
        case AC.ARRIVALS_ERROR:
            console.warn(payload);
            return payload;
        case AC.ARRIVALS_PENDING:
        default:
            return state
    }
}