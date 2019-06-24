const axios = require('axios');

const ENDPOINTS = require('../../endpoints');

const getBusStop = async args => {
    const direction = `${args.direction.charAt(0).toUpperCase()}${args.direction.slice(1).toLowerCase()}bound`;

    const {status, data} = await axios.get(ENDPOINTS.getBusStop({
        direction,
        routeNumber: args.routeNumber
    }));


    if (status === 200) {
        const stop = data['bustime-response'].stops.find(stop => stop.stpnm === args.stopName);

        return {
            id: stop.stpid,
            name: stop.stpnm
        };
    }
    // else there's an error with the request
    return [];
};

module.exports = {
    getBusStop
};