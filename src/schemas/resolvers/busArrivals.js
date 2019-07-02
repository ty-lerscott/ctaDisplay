const FIELDS = require('../baseFields');

const BusArrivals = require('../types/busArrivals');
const {	getBusArrivals } = require('../queries/busArrivals');

module.exports = {
	busArrivals: {
		type: FIELDS.list(BusArrivals.type),
		args: {
            stopId: FIELDS.integer,
            route: FIELDS.integer
		},
		resolve: async (parent, args) => {
			return await getBusArrivals(args);
		}
	}
};