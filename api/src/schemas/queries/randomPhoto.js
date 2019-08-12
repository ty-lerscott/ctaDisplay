const {database} = require('../../../firebase/config');

function getEventsHelper() {
    return new Promise((resolve, reject) => {
        var eventsRef = database.ref("unsplash");

        eventsRef.on('value', (data) => {
            resolve(data.val());
        }, (error) => {
            reject(error.code);
        });
    });
}

const getRandomPhoto = async args => {
	const data = await getEventsHelper();

	const photos = Object.values(data);

    return {
		url: photos[Math.floor(Math.random()*photos.length)]
	}
};

module.exports = {
    getRandomPhoto
};