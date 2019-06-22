const FIELDS = require('../baseFields');

const ImpactedRoute = require('./impactedRoute');

const defaultFields = {
	id: FIELDS.id,
	description: FIELDS.string,
	severity: FIELDS.integer
};

const ServiceAlerts = FIELDS.object({
	name: 'ServiceAlerts',
	description: 'A list of system wide alerts at any given time',
	fields: () => ({
		...defaultFields,
		impactedRoutes: {
			type: FIELDS.list(ImpactedRoute.type),
			resolve: ({impactedRoutes}, args) => {
				return impactedRoutes.map(({ServiceId: id}) => ({id}))
			}
		}
	})
});

module.exports = {
	type: ServiceAlerts,
	defaultFields
};