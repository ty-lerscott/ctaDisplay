const getTrainArrivals = ({
    stopId,
    stationId,
    routeCode,
    maxResults = null
}) => `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${process.env.API_KEY_TRAIN}&outputType=JSON${!stopId ? '&mapid=' + stationId : ''}${!stationId ? '&stpid=' + stopId : ''}${!!maxResults ? '&max=' + maxResults : ''}${!!routeCode ? '&rt=' + routeCode : ''}`;

const getBusStop = ({
    routeNumber,
    direction
}) => `http://www.ctabustracker.com/bustime/api/v2/getstops?format=json&key=${process.env.API_KEY_BUS}&rt=${routeNumber}&dir=${direction}`;

const getBusArrivals = ({
    stopId,
    routeNumber
}) => `http://www.ctabustracker.com/bustime/api/v2/getpredictions?format=json&key=${process.env.API_KEY_BUS}&stpid=${stopId}&rt=${routeNumber}`;


const getServiceAlerts = () => 'http://lapi.transitchicago.com/api/1.0/alerts.aspx?outputType=JSON';

module.exports = {
    getBusStop,
    getBusArrivals,
    getTrainArrivals,
    getServiceAlerts
}