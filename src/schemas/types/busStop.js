const FIELDS = require('../baseFields');

const defaultFields = {
    id: FIELDS.id,
    name: FIELDS.string
};

const BusStopType = FIELDS.object({
	name: 'BusStop',
	description: 'A Stop for a specific route and direction',
	fields: () => defaultFields
});

module.exports = {
	type: BusStopType,
	defaultFields
};