const FIELDS = require('../baseFields');

const Events = require('../types/events');
const {	getEvents } = require('../queries/events');

module.exports = {
	events: {
		type: FIELDS.list(Events.type),
		args: {},
		resolve: async (parent, args) => {
			return await getEvents(args);
		}
	}
};