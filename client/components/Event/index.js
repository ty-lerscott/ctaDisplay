import React from "react";
import {connect} from 'react-redux';

import {getEvents} from 'actions/EventsActions';
import {getRandomPhoto} from 'actions/PhotoActions';

import getStateInfo from 'utils/getStateInfo';

import {currentEvent} from 'utils/events';
import {_12HoursEllapsed, _5MinutesEllapsed} from 'utils/time';

import { ImageWrapper } from 'components/Event/styles';

class Event extends React.Component {
	componentDidMount() {
		this.props.getEvents().then(events => {
			const current = currentEvent(events);

			if (!Object.entries(current).length) {
				this.props.getRandomPhoto();
			}
		})
	}

	componentDidUpdate(prevProps) {
		const time = getStateInfo(prevProps.time, this.props.time);
		const event = getStateInfo(prevProps.currentEvent, this.props.currentEvent);

		if (time.defined && time.changed) {
			const _12HoursLater = _12HoursEllapsed(prevProps.time, this.props.time);
			const _5MinutesLater= _5MinutesEllapsed(prevProps.time, this.props.time);

			if (_12HoursLater) {
				this.props.getEvents();
			}

			if ((_5MinutesLater || event.defined && event.changed) && !Object.entries(this.props.currentEvent).length) {
				this.props.getRandomPhoto();
			}
		}
	}

	getBackgroundImage = () => {
		const {isSport, isConcert} = this.props.currentEvent;

		return isSport ? 'assets/sport_banner.png' : isConcert ? 'assets/concert_banner.jpg' : this.props.photo.url;
	}

	render() {
		return (
			<ImageWrapper
				backgroundImage={this.getBackgroundImage()}
			/>
		);
	}
}


const mapStateToProps = ({time: {time}, events, photo}) => ({
	time,
	photo,
	currentEvent: currentEvent(events)
});

const mapDispatchToProps = {
	getEvents,
	getRandomPhoto
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
