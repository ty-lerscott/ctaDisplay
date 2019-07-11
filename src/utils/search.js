
const atob = require('atob');
const directions = require('./directions');
const trainStations = require('./trainStations');

const convertArrivalsQuery = (query) => {
    return !!query.length ? query.split('|').map(route => {
        route = atob(route).split(',').reduce((acc, variant) => {
            const [key, value] = variant.split('=');
            acc[key] = value;
            return acc;
        }, {}) || {};
        //TODO: make general so that bus can also use this

        route.direction = directions[route.route][route.direction];
        route.station = trainStations[route.station];
        return !!Object.keys(route).length ? route : {};
    }).reduce((acc, route) => {
        if (!Number(route.route)) {
            acc.push(route);
        }
        return acc;
    }, []) : null;
}

module.exports = {
	convertArrivalsQuery
}