const FIELDS = require('../baseFields');

const defaultFields = {
	id: FIELDS.id
};

const ImpactedRouteType = FIELDS.object({
	name: 'ImpactedService',
	description: 'The service/route impacted by a system alert',
	fields: () => defaultFields
});

module.exports = {
	type: ImpactedRouteType,
	defaultFields
};