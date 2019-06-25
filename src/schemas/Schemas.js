module.exports = {
	// resolvers
	...require('./resolvers/rate'),
	...require('./resolvers/events'),
	...require('./resolvers/busStop'),
	...require('./resolvers/weather'),
	...require('./resolvers/randomPhoto'),
	...require('./resolvers/busArrivals'),
	...require('./resolvers/serviceAlerts'),
    ...require('./resolvers/trainArrivals')
}