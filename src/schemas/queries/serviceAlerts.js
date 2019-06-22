const axios = require('axios');

const CTAENDPOINTS = require('../../ctaEndpoints');

const getServiceAlerts = async args => {
    const {status, data} = await axios.get(CTAENDPOINTS.getServiceAlerts());
    if (status === 200) {
        return data.CTAAlerts.Alert.map(alert => ({
            id: alert.AlertId,
            description: alert.ShortDescription,
            severity: Number(alert.SeverityScore),
            impactedRoutes: Array.isArray(alert.ImpactedService.Service) ? alert.ImpactedService.Service : [alert.ImpactedService.Service]
        }));
    }

    return [{}]
    // else there's an error with the request

    // return [{
    //     error: data.ctatt.error[0].msg
    // }];
};

module.exports = {
    getServiceAlerts
};