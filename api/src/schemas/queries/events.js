const {database} = require('../../../firebase/config');

function getEventsHelper() {
    return new Promise((resolve, reject) => {
        var eventsRef = database.ref("events");

        eventsRef.on('value', (data) => {
            resolve(data.val());
        }, (error) => {
            reject(error.code);
        });
    });
  }

const getEvents = async args => {
    const data = await getEventsHelper();

    return data;
};

module.exports = {
    getEvents
};