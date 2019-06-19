const FIELDS = require('../baseFields');

const BusArrivals = require('../types/busArrivals');
const {	getBusArrivals } = require('../queries/busArrivals');

module.exports = {
	busArrivals: {
		type: FIELDS.list(BusArrivals.type),
		args: {
            stopId: BusArrivals.defaultFields.id,
            routeNumber: FIELDS.integer
		},
		resolve: async (parent, args) => {
			return await getBusArrivals(args);
		}
	}
};