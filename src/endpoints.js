const getDefaultTrains = (stationId) => `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${process.env.API_KEY_TRAIN}&outputType=JSON&mapid=${stationId}&max=10`;
const getAllTrains = () => `http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=${process.env.API_KEY_TRAIN}&rt=red,blue,brn,g,org,p,pink,y&outputType=JSON`;

const getBusStop = ({
    routeNumber,
    direction
}) => `http://www.ctabustracker.com/bustime/api/v2/getstops?format=json&key=${process.env.API_KEY_BUS}&rt=${routeNumber}&dir=${direction}`;

const getBusArrivals = ({
    stopId,
    routeNumber
}) => `http://www.ctabustracker.com/bustime/api/v2/getpredictions?format=json&key=${process.env.API_KEY_BUS}&stpid=${stopId}&rt=${routeNumber}`;

const getServiceAlerts = () => 'http://lapi.transitchicago.com/api/1.0/alerts.aspx?outputType=JSON';

const getWeather = () => `http://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY_WEATHER}&zip=60640`;

const getEvents = () => `https://api.seatgeek.com/2/events?venue.id=11&client_id=${process.env.API_KEY_SEAT_GEEK}`;

const getRandomPhoto = () => `https://api.unsplash.com/photos/random/?featured=true&orientation=landscape&client_id=${process.env.API_KEY_UNSPLASH}`;

module.exports = {
    getEvents,
    getBusStop,
    getWeather,
    getAllTrains,
    getRandomPhoto,
    getBusArrivals,
    getDefaultTrains,
    getServiceAlerts
}