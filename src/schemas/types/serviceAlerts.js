const FIELDS = require('../baseFields');

const ImpactedRoute = require('./impactedRoute');

const defaultFields = {
	id: FIELDS.id,
	severity: FIELDS.integer,
	description: FIELDS.string
};

const ServiceAlerts = FIELDS.object({
	name: 'ServiceAlerts',
	description: 'A list of system wide alerts at any given time',
	fields: () => ({
		...defaultFields,
		impactedRoutes: {
			type: FIELDS.stringArray,
			resolve: ({impactedRoutes}, args) => impactedRoutes
		}
	})
});

module.exports = {
	type: ServiceAlerts,
	defaultFields
};