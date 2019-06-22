const FIELDS = require('../baseFields');

const ServiceAlerts = require('../types/serviceAlerts');
const {	getServiceAlerts } = require('../queries/serviceAlerts');

module.exports = {
	serviceAlerts: {
		type: FIELDS.list(ServiceAlerts.type),
		args: {},
		resolve: async (parent, args) => {
			return await getServiceAlerts(args);
		}
	}
};