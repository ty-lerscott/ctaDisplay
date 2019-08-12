import React from "react";
import {connect} from 'react-redux';

import getStateInfo from 'utils/getStateInfo';
import {_1MinuteEllapsed, _30SecondsEllapsed} from 'utils/time';

import {getServiceAlerts} from 'actions/ServiceAlertsActions';

import {StyledMarquee, ScrollingText} from 'components/Marquee/styles';

class Marquee extends React.Component {
	state = {
		index: 0
	}

	componentDidMount() {
		this.props.getServiceAlerts();
	}

	async componentDidUpdate(prevProps) {
		const time = getStateInfo(prevProps.time, this.props.time);

		if(time.defined && time.changed && _1MinuteEllapsed(prevProps.time, this.props.time)) {
			await this.props.getServiceAlerts();
		}

		if (time.defined && time.changed && _30SecondsEllapsed(this.props.time)) {
			this.switchIndex();
		}
	}

	switchIndex = (reset) => {
		const { index } = this.state;
		const nextIndex = reset === 0 ? reset : (index === this.props.serviceAlerts.length - 1 ? 0 : index + 1);

		this.setState({
			index: nextIndex
		})
	}

	render() {
		const {
			serviceAlerts
		} = this.props;

		return (
			<StyledMarquee>
				<ScrollingText
					duration={!!serviceAlerts.length ? '30s' : 0}>
					{serviceAlerts[this.state.index]}
				</ScrollingText>
			</StyledMarquee>
		);
	}
}


const mapStateToProps = ({time: {time}, serviceAlerts}) => ({
	time,
	serviceAlerts
});

const mapDispatchToProps = {
	getServiceAlerts
};

Marquee.defaultProps = {
	serviceAlerts: []
}

export default connect(mapStateToProps, mapDispatchToProps)(Marquee);
