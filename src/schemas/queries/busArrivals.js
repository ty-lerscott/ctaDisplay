const {database} = require('../../../firebase/config');

function getBusArrivalsHelper() {
    return new Promise((resolve, reject) => {
        var busRef = database.ref("arrivals/busses");

        busRef.on('value', (data) => {
            resolve(data.val());
        }, (error) => {
            reject(error.code);
        });
    });
  }

const getBusArrivals = async args => {
    const data = await getBusArrivalsHelper();

    return data[args.stopId].filter(({route}) => Number(route) === args.route);
};

module.exports = {
    getBusArrivals
};