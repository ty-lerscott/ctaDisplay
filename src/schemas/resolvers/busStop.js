const FIELDS = require('../baseFields');

const BusStop = require('../types/busStop');
const {	getBusStop } = require('../queries/busStop');

module.exports = {
	busStop: {
		type: BusStop.type,
		args: {
            stopName: FIELDS.string,
            direction: FIELDS.string,
            routeNumber: FIELDS.integer
		},
		resolve: async (parent, args) => {
			return await getBusStop(args);
		}
	}
};