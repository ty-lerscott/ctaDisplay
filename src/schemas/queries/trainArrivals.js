const axios = require('axios');

const CTAENDPOINTS = require('../../ctaEndpoints');

const directions = require('../../utils/directions');

const getTrainArrivals = async args => {
    const {status, data} = await axios.get(CTAENDPOINTS.getTrainArrivals(args));
    if (status === 200) {
        return data.ctatt.eta.map(train => ({
            id: train.rn,
            route: train.rt,
            arrivalTime: train.arrT,
            destination: train.destNm,
            direction: Number(train.trDr),
            hasAlerts: Number(train.isFlt) === 1,
            isDelayed: Number(train.isDly) === 1,
            isPrediction: Number(train.isSch) === 1,
            isApproaching: Number(train.isApp) === 1
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

    return [];
};

module.exports = {
    getTrainArrivals
};