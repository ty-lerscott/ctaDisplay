const getTrainArrivals = ({
    stopId,
    stationId,
    routeCode,
    maxResults = null
}) => {
    console.log(`http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${process.env.API_KEY_TRAIN}&outputType=JSON${!stopId ? '&mapid=' + stationId : ''}${!stationId ? '&stpid=' + stopId : ''}${!!maxResults ? '&max=' + maxResults : ''}${!!routeCode ? '&rt=' + routeCode : ''}`);
    return `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${process.env.API_KEY_TRAIN}&outputType=JSON${!stopId ? '&mapid=' + stationId : ''}${!stationId ? '&stpid=' + stopId : ''}${!!maxResults ? '&max=' + maxResults : ''}${!!routeCode ? '&rt=' + routeCode : ''}`;
};


module.exports = {
    getTrainArrivals
}