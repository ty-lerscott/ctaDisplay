const axios = require('axios');
const CTAENDPOINTS = require('../../ctaEndpoints');
const timestamp = require('../../utils/timestamp');

const getBusArrivals = async args => {
    const {status, data} = await axios.get(CTAENDPOINTS.getBusArrivals(args));
    const busses = data['bustime-response'];

	if (status === 200 && !busses.error) {
        return busses.prd.map(bus => ({
            type: 'bus',
			id: bus.vid,
            zone: bus.zone,
			busNumber: bus.rt,
			stopName: bus.stpnm,
			direction: bus.rtdir,
			isDelayed: !!bus.dly,
			destination: bus.des,
			predictionType: bus.typ === 'A' ? 'arrival' : 'departure' ,
			distanceFromStop: Number(bus.dstp) || 0,
			timeUntilArrival: Number(bus.prdctdn) || 0,
			predictedArrivalTime: timestamp(bus.prdtm)
        })).filter(({direction}) => {
            switch (args.direction) {
                case 'north':
                    return direction === 1;
                case 'south':
                    return direction === 5;
                default:
                    return true;
            }
        });
    }
    // else there's an error with the request
    return [{
        error: busses.error[1].msg
    }];
};

module.exports = {
    getBusArrivals
};