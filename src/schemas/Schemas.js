module.exports = {
	// resolvers
	...require('./resolvers/busStop'),
	...require('./resolvers/busArrivals'),
    ...require('./resolvers/trainArrivals')
}