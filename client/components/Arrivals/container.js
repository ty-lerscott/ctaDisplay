import React from 'react';

import {Arrivals} from 'components/Arrivals/styles';

import Vehicle from 'components/Arrivals/Vehicle';

const Container = ({
	arrivals,
	sortedArrivals
}) => {
	return (
		<Arrivals>
			{arrivals.map(({id, ...vehicle}) => {
				return (
					<Vehicle
						key={`vehicle-${id}`}
						order={sortedArrivals.findIndex(elem => elem.id === id)}
						isBus={!!Number(vehicle.route)}
						isTrain={!Number(vehicle.route)}
						{...vehicle}
					/>
				);
			})}
		</Arrivals>
	);
};

export default Container;