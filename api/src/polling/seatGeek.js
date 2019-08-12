const axios = require('axios');
const ENDPOINTS = require('../endpoints');
const {database} = require('../../firebase/config');

const getEvents = async () => {
	try {
		const {status, data: {events, error}} = await axios.get(ENDPOINTS.getEvents());

		const ref = database.ref('events');

		if (status === 200 && !!events.length && !error) {
			ref.set(
				events.map(({id, taxonomies, ...rest}) => ({
					id,
					isConcert: taxonomies.some(({name}) => name === 'concert'),
					isSport: taxonomies.some(({name}) => name === 'sports'),
					time: rest.datetime_local
				}))
			)
			// TODO: SAFE, non memory hogging log
		}
	} catch (err) {
		// TODO: SAFE, non memory hogging log
	}
}

const execute = () => {
	getEvents();
	setInterval(getEvents, process.env.POLLING_SEAT_GEEK);
}


module.exports = execute;