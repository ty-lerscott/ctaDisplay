const {database} = require('../../../firebase/config');

function getServiceAlertsHelper() {
    return new Promise((resolve, reject) => {
        var alertsRef = database.ref("alerts");

        alertsRef.on('value', (data) => {
            resolve(data.val());
        }, (error) => {
            reject(error.code);
        });
    });
}

const getServiceAlerts = async args => {
    const data = await getServiceAlertsHelper();

    return data;
};

module.exports = {
    getServiceAlerts
};