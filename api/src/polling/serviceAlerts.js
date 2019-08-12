const axios = require('axios');
const ENDPOINTS = require('../endpoints');
const {database} = require('../../firebase/config');

const getServiceAlerts = async () => {
	try {
		const {status, data} = await axios.get(ENDPOINTS.getServiceAlerts());

		const ref = database.ref('alerts');

		if (status === 200 && !!data.CTAAlerts.Alert.length) {
			ref.set(
				data.CTAAlerts.Alert.map(alert => ({
					id: alert.AlertId,
					description: alert.ShortDescription,
					severity: Number(alert.SeverityScore),
					impactedRoutes: (Array.isArray(alert.ImpactedService.Service) ? alert.ImpactedService.Service : [alert.ImpactedService.Service]).map(({ServiceId}) => ServiceId)
				}))
			)
			// TODO: SAFE, non memory hogging log
		}
	} catch (err) {
		// TODO: SAFE, non memory hogging log
	}

}

const execute = () => {
	getServiceAlerts();
	setInterval(getServiceAlerts, process.env.POLLING_SERVICE_ALERTS);
}

module.exports = execute;
