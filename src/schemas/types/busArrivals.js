const FIELDS = require('../baseFields');

const defaultFields = {
    id: FIELDS.id,
    zone: FIELDS.string,
    error: FIELDS.string,
	stopName: FIELDS.string,
    busNumber: FIELDS.string,
    direction: FIELDS.string,
	hasAlerts: FIELDS.boolean,
	isDelayed: FIELDS.boolean,
	destination: FIELDS.string,
    predictionType: FIELDS.string,
	timeUntilArrival: FIELDS.integer,
	distanceFromStop: FIELDS.integer,
	predictedArrivalTime: FIELDS.string
};

const BusArrivalsType = FIELDS.object({
	name: 'BusArrivals',
	description: 'A list of arrival predictions for one or more stops or one or more vehicles',
	fields: () => defaultFields
});

module.exports = {
	type: BusArrivalsType,
	defaultFields
};