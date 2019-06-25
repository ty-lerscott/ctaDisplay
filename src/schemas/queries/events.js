const axios = require('axios');
const ENDPOINTS = require('../../endpoints');

const getEvents = async args => {
	const {status, data: {events}} = await axios.get(ENDPOINTS.getEvents(args));

	return [
		...((status === 200) && events.map(({id, taxonomies, ...rest}) => ({
			id,
			isConcert: taxonomies.some(({name}) => name === 'concert'),
			isSport: taxonomies.some(({name}) => name === 'sports'),
			time: rest.datetime_local
		})))
	]
};

module.exports = {
    getEvents
};