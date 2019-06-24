const FIELDS = require('../baseFields');

const defaultFields = {
	id: FIELDS.id,
	time: FIELDS.string,
    error: FIELDS.string,
	isSport: FIELDS.boolean,
	isConcert: FIELDS.boolean
};

const EventsType = FIELDS.object({
	name: 'Events',
	description: 'A list of events for Wrigley Field',
	fields: () => defaultFields
});

module.exports = {
	type: EventsType,
	defaultFields
};