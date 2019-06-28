const axios = require('axios');
const ENDPOINTS = require('../endpoints');
const {database} = require('../../firebase/config');
const timestamp = require('../utils/timestamp');

const getServiceAlerts = async ({
	stopId=5350,
	routeNumber=36,
	direction='south'
} = {}) => {
	try {
		const {status, data} = await axios.get(ENDPOINTS.getServiceAlerts());

		const ref = database.ref('serviceAlerts');

		if (status === 200 && !!data.CTAAlerts.Alert.length) {
			ref.set({
				alerts: data.CTAAlerts.Alert.map(alert => ({
					id: alert.AlertId,
					description: alert.ShortDescription,
					severity: Number(alert.SeverityScore),
					impactedRoutes: Array.isArray(alert.ImpactedService.Service) ? alert.ImpactedService.Service : [alert.ImpactedService.Service]
				}));
			})
			console.warn('updated service alerts database')
		}
	} catch (err) {
		console.warn('there was an error in requesting service alerts', err);
	}

}

const execute = () => {
	getServiceAlerts();
	setInterval(getServiceAlerts, process.env.POLLING_SERVICE_ALERTS);
}

module.exports = execute;
