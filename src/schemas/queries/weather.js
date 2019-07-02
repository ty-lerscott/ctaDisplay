const {database} = require('../../../firebase/config');

function getWeatherHelper() {
    return new Promise((resolve, reject) => {
        var weatherRef = database.ref("weather");

        weatherRef.on('value', (data) => {
            resolve(data.val());
        }, (error) => {
            reject(error.code);
        });
    });
}

const getWeather = async () => {
    const data = await getWeatherHelper();

    return data;
};

module.exports = {
    getWeather
};