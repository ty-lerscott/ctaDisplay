const axios = require('axios');
const {getDefaultTrains, getAllTrains} = require('../endpoints');
const {database} = require('../../firebase/config');

const DEFAULT_STATION_ID = 40540;

const getTrainArrivals = async (args) => {
	try {
		const allTrains = await axios.get(getAllTrains());
		const defaultTrains = await axios.get(getDefaultTrains(DEFAULT_STATION_ID));

		const ref = database.ref('arrivals/trains');

		if (defaultTrains.status === 200 && !!defaultTrains.data.ctatt.eta.length) {
			ref.child('default').set(
				defaultTrains.data.ctatt.eta.map(train => ({
					id: train.rn,
					route: train.rt,
					destination: train.destNm,
					direction: Number(train.trDr),
					predictedArrivalTime: train.arrT,
					hasAlerts: Number(train.isFlt) === 1,
					isDelayed: Number(train.isDly) === 1,
					isPrediction: Number(train.isSch) === 1,
					isApproaching: Number(train.isApp) === 1
				})).filter(({direction}) => direction === 5)
			)
			console.warn('updated default train arrivals database')
		}

		if (allTrains.status === 200 && !!allTrains.data.ctatt.route.length) {
			const routes = allTrains.data.ctatt.route;

			routes.forEach(({train, ...route}) => {
				const trains = train;
				if (!!trains && !!trains.length) {
					ref.child(`all/${[route['@name']]}`).set(
						trains.map(train => ({
							id: train.rn,
							destination: train.destNm,
							stationName: train.nextStaNm,
							direction: Number(train.trDr),
							predictedArrivalTime: train.arrT,
							stationId: Number(train.nextStaId),
							isDelayed: Number(train.isDly) === 1,
							isApproaching: Number(train.isApp) === 1
						}))
					)
				}

			})
			console.warn('updated all train arrivals database')
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