const {database} = require('../../../firebase/config');

function getTrainArrivalsHelper() {
    return new Promise((resolve, reject) => {
        var trainRef = database.ref("arrivals/trains");

        trainRef.on('value', (data) => {
            resolve(data.val());
        }, (error) => {
            reject(error.code);
        });
    });
}

const getTrainArrivals = async ({
    stationId,
    direction
}) => {
    const data = await getTrainArrivalsHelper();

    return data[stationId].filter(({direction: trainDir}) => {
        switch (direction) {
            case 'north':
                return trainDir === 1;
            case 'south':
                return trainDir === 5;
            default:
                return true;
        }
    });
};

module.exports = {
    getTrainArrivals
};