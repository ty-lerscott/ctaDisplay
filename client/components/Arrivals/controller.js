import React from 'react';
import {connect} from 'react-redux';

import getStateInfo from 'utils/getStateInfo';
import {_10SecondsEllapsed} from 'utils/time';

import {getArrivals} from 'actions/ArrivalsActions';

import Container from 'components/Arrivals/container';

class Arrivals extends React.Component {
    state = {
        sortedArrivals: []
    };

    componentDidMount() {
        this.props.getArrivals().then(this.sortArrivals);
    }

    componentDidUpdate(prevProps) {
        const time = getStateInfo(prevProps.time, this.props.time);

        if(_10SecondsEllapsed(this.props.time) && time.defined && time.changed) {
            this.props.getArrivals().then(this.sortArrivals);
        }
    }

	sortArrivals = () => {
        const sortedArrivals = [...this.props.arrivals];

        sortedArrivals.sort((a, b) => {
            return new Date(a.predictedArrivalTime) - new Date(b.predictedArrivalTime);
        });

        this.setState({
            sortedArrivals
        });
	};

    render() {
        return (
            <Container
                sortedArrivals={this.state.sortedArrivals}
                arrivals={this.props.arrivals}
            />
		);
    }
}


const mapStateToProps = ({arrivals, time: {time}}) => ({
    time,
	arrivals
});

const mapDispatchToProps = {
    getArrivals
};

export default connect(mapStateToProps, mapDispatchToProps)(Arrivals);
