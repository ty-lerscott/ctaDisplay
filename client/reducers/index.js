import {combineReducers} from 'redux';

import time from 'reducers/TimeReducers';
import photo from 'reducers/PhotoReducers';
import events from 'reducers/EventsReducers';
import weather from 'reducers/WeatherReducers';
import arrivals from 'reducers/ArrivalsReducers';
import serviceAlerts from 'reducers/ServiceAlertsReducers';

//if I need to initial the reducers with some stuff do it as a function
export default (props) => combineReducers({
    time,
    photo,
    events,
    weather,
    arrivals,
    serviceAlerts
});