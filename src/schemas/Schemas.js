module.exports = {
	// resolvers
	...require('./resolvers/rate'),
	...require('./resolvers/busStop'),
	...require('./resolvers/busArrivals'),
	...require('./resolvers/serviceAlerts'),
    ...require('./resolvers/trainArrivals')
}