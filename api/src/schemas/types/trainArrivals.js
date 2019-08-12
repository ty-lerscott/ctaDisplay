const FIELDS = require('../baseFields');

const defaultFields = {
    id: FIELDS.id,
    route: FIELDS.string,
    error: FIELDS.string,
    direction: FIELDS.string,
    hasAlerts: FIELDS.boolean,
    isDelayed: FIELDS.boolean,
    destination: FIELDS.string,
    isPrediction: FIELDS.boolean,
    isApproaching: FIELDS.boolean,
    predictedArrivalTime: FIELDS.string
};

const TrainArrivalsType = FIELDS.object({
	name: 'TrainArrivals',
	description: 'A list of arrival predictions for all platforms at a given train station in a well-formed JSON object.\r\nEach separate prediction describes a single train, when it’s expected to arrive, and various bits of information that explain where it’s expected to arrive and certain attributes about the train',
	fields: () => defaultFields
});


module.exports = {
	type: TrainArrivalsType,
	defaultFields
};