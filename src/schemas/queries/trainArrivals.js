const {database} = require('../../../firebase/config');

const {convertArrivalsQuery} = require('../../utils/search');

function getTrainArrivalsHelper(hasArgs) {
    return new Promise((resolve, reject) => {
        var trainRef = database.ref(`arrivals/trains/${hasArgs ? 'all' : 'default'}`);

        trainRef.on('value', (data) => {
            // console.warn('these are the values', data.val());
            resolve(data.val());
        }, (error) => {
            reject(error.code);
        });
    });
}

const filterResults = (results, query) => {
    return !!query ?
        [].concat.apply([],
            convertArrivalsQuery(query)
                .map(({route, station, direction}) => {
                    console.warn({route, station, direction})
                    return results[route]
                        .filter(train => train.direction === direction && train.stationId === station)
                        .map(train => {
                            train.route = route;
                            return train;
                        })
                })
    ) : results.filter(({direction}) => direction === 5).map(train => {
        train.route = train.route.toLowerCase();
        return train;
    });
}

const getTrainArrivals = async ({query}) => {
    const data = await getTrainArrivalsHelper(!!query);

    return filterResults(data, query);
};

module.exports = {
    getTrainArrivals
};