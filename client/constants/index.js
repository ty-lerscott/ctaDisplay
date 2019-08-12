import {spreadToObject} from 'utils/array';

import Time from 'constants/TimeConstants';
import Photo from 'constants/PhotoConstants';
import Events from 'constants/EventsConstants';
import Weather from 'constants/WeatherConstants';
import Arrivals from 'constants/ArrivalsConstants';
import ServiceAlerts from 'constants/ServiceAlertsConstants';

export const TimeConstants = spreadToObject(Time);
export const PhotoConstants = spreadToObject(Photo);
export const EventsConstants = spreadToObject(Events);
export const WeatherConstants = spreadToObject(Weather);
export const ArrivalsConstants = spreadToObject(Arrivals);
export const ServiceAlertsConstants = spreadToObject(ServiceAlerts);