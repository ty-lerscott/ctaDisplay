import React from 'react';
import moment from 'moment';
import ReactSvg from 'react-svg';

import {
    Body,
    Icon,
    Route,
    Status,
    Content,
    ArrivalTime,
    ProgressBar,
    StyledVehicle
} from 'components/Arrivals/styles.vehicle';

const setProgressBarClass = ({isBus, route}) => {
    return isBus ? 'bus' : `train-${route ? route.toLowerCase() : 'general'}`
}

const getTimeUntilArrival = (arrivalTime) => {
    let remaining = moment(arrivalTime).startOf('minute').fromNow().split(' ');
    const minutes = Number(remaining[1]);

    return !!minutes ? `${minutes}` : remaining[remaining.length-1] === 'ago' ? -1 : 0;
}

const Vehicle = ({
    id,
    order,
    isBus,
    route,
    direction,
    destination,
    isPrediction,
    predictedArrivalTime
}) => {
    const timeRemaining = getTimeUntilArrival(predictedArrivalTime);

    const progress = (Number(timeRemaining)/Number(process.env.TRAVEL_TIME_IN_MINUTES))*100;

    return (
        <StyledVehicle
            id={id}
            className={`vehicle-${order}`}
            data-order={order}>
            <Body>
                <Icon>
                    <ReactSvg src={`/assets/icon-${isBus ? 'bus' : 'train'}.svg`} />
                </Icon>
                <Content>
                    <Route>{isBus ? `${route} ${direction}` : destination}</Route>
                    <Status
                        isLive={!isPrediction}
                    />
                </Content>
                <ArrivalTime>{timeRemaining > 0 ? `${timeRemaining} min` : timeRemaining === 0 ? 'Arriving' : 'Departing'}</ArrivalTime>
            </Body>
            <ProgressBar
                className={setProgressBarClass({isBus, route})}
                progress={timeRemaining > 0 ? progress : timeRemaining === 0 ? 7.5 : 0}
            />
        </StyledVehicle>
    );
};

export default Vehicle;