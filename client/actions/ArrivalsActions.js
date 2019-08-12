import {ArrivalsConstants as AC} from 'constants/index';

export const getArrivals = () => (dispatch, getState, api) => {
	dispatch({
		type: AC.ARRIVALS_PENDING,
		payload: {}
	})

	return Promise.all([
		api({
			query: `
				query TrainArrivals($stationId: Int!, $direction: String!) {
					trainArrivals(stationId: $stationId, direction: $direction) {
						id,
						route,
						error,
						direction,
						hasAlerts,
						isDelayed,
						destination,
						isPrediction,
						isApproaching,
						predictedArrivalTime
					}
				}
			`,
			variables: {
				stationId: Number(process.env.TRAIN_STOP_ID),
				direction: process.env.TRAIN_STOP_DIRECTION
			}
		}),
		api({
			query: `
				query BusArrivals($stopId: Int!, $route: Int!) {
					busArrivals(stopId: $stopId, route: $route) {
						id,
						route,
						error,
						stopName,
						direction,
						isDelayed,
						destination,
						predictionType,
						distanceFromStop,
						timeUntilArrival,
						predictedArrivalTime
					}
				}
			`,
			variables: {
				stopId: Number(process.env.BUS_STOP_ID),
				route: Number(process.env.BUS_ROUTE_NUMBER)
			}
		}),
		api({
			query: `
				query Rate {
					rate {
						rate,
						error,
						timestamp
					}
				}
			`
		})

	]).then(([
		{data:{data: {trainArrivals: trains, error: trainsError}}},
		{data:{data: {busArrivals: busses, error: bussesError}}}
	]) => {
		if (!!trains || !!busses) {
			dispatch({
				type: AC.ARRIVALS_FETCHED,
				payload: {
					trains: trains && trains.reduce((acc, {id, ...train}) => {
						acc[id] = {id,...train};
						return acc;
					}, {}),
					busses: busses && busses.reduce((acc, {id, ...bus}) => {
						acc[id] = {id,...bus};
						return acc;
					}, {})
				}
			})
		}

		if (trainsError || bussesError) {
			dispatch({
				type: AC.ARRIVALS_ERROR,
				payload: trainsError || bussesError
			})
		}

	});
	return;
}
