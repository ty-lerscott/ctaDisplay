const axios = require('axios');
const ENDPOINTS = require('../endpoints');
const {database} = require('../../firebase/config');
const timestamp = require('../utils/timestamp');

const getBusArrivals = async ({
	stopId=5350,
	routeNumber=36,
	direction='south'
} = {}) => {
	try {
		const {status, data} = await axios.get(ENDPOINTS.getBusArrivals({stopId, routeNumber, direction}));
		const busses = data['bustime-response'];

		const ref = database.ref('arrivals');
		const bussesRef = ref.child('busses');

		if (status === 200 && !!busses.prd.length && !busses.hasOwnProperty('error')) {
			bussesRef.set({
				[stopId]: busses.prd.map(bus => ({
					id: bus.vid,
					route: bus.rt,
					zone: bus.zone,
					stopName: bus.stpnm,
					direction: bus.rtdir,
					isDelayed: !!bus.dly,
					destination: bus.des,
					predictionType: bus.typ === 'A' ? 'arrival' : 'departure' ,
					distanceFromStop: Number(bus.dstp) || 0,
					timeUntilArrival: Number(bus.prdctdn) || 0,
					predictedArrivalTime: timestamp(bus.prdtm)
				})).filter(({direction: busDirection}) => {
					switch (direction) {
						case 'north':
							return busDirection.toLowerCase() === 'northbound';
						case 'south':
							return busDirection.toLowerCase() === 'southbound';
						default:
							return true;
					}
				})
			})
			// TODO: SAFE, non memory hogging log
		}
	} catch (err) {
		// TODO: SAFE, non memory hogging log
	}
}

const execute = () => {
	getBusArrivals();
	setInterval(getBusArrivals, process.env.POLLING_BUS_ARRIVALS);
}


module.exports = execute;