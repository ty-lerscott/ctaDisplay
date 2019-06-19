const FIELDS = require('../baseFields');

const TrainArrivals = require('../types/trainArrivals');
const {	getTrainArrivals } = require('../queries/trainArrivals');

module.exports = {
	trainArrivals: {
		type: FIELDS.list(TrainArrivals.type),
		args: {
            stationId: TrainArrivals.defaultFields.id,
            direction: FIELDS.string
		},
		resolve: async (parent, args) => {
			return await getTrainArrivals(args);
		}
	}
};