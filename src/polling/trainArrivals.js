const axios = require('axios');
const ENDPOINTS = require('../endpoints');
const {database} = require('../../firebase/config');

const getTrainArrivals = async ({
	stationId=40540,
	direction='south'
} = {}) => {
	try {
		const {status, data} = await axios.get(ENDPOINTS.getTrainArrivals({stationId, direction}));

		const ref = database.ref('arrivals');
		const trainsRef = ref.child('trains');

		if (status === 200 && !!data.ctatt.eta.length) {
			trainsRef.set({
				[stationId]: data.ctatt.eta.map(train => ({
					id: train.rn,
					route: train.rt,
					destination: train.destNm,
					direction: Number(train.trDr),
					predictedArrivalTime: train.arrT,
					hasAlerts: Number(train.isFlt) === 1,
					isDelayed: Number(train.isDly) === 1,
					isPrediction: Number(train.isSch) === 1,
					isApproaching: Number(train.isApp) === 1
				})).filter(({direction: trainDirection}) => {
					switch (direction) {
						case 'north':
							return trainDirection === 1;
						case 'south':
							return trainDirection === 5;
						default:
							return true;
					}
				})
			})
			console.warn('updated train arrivals database')
		}
	} catch (err) {
		console.warn('there was an error in requesting train arrivals', err)
	}
}

const execute = () => {
	getTrainArrivals();
	setInterval(getTrainArrivals, process.env.POLLING_TRAIN_ARRIVALS);
}


module.exports = execute;