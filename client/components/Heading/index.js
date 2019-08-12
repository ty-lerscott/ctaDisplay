import React from "react";
import {connect} from 'react-redux';

import {getDayOfWeek, getMonth} from 'utils/time';

import { getTime } from 'actions/TimeActions';

import { StyledHeading, Day, Calendar, Date, Time, CalendarWrapper, TimeAndWeather } from 'components/Heading/styles';

import Event from 'components/Event';
import Weather from 'components/Weather';

class Heading extends React.Component {
	componentDidMount() {
		const {
			getTime
		} = this.props;

		getTime().then(() => {
			setInterval(() => {
				getTime();
			}, 1000);
		});
	}

	render() {
		const {
			year,
			time,
			month,
			dayOfWeek,
			dateOfMonth,
		} = this.props.time;

		return (
			<StyledHeading>
				<CalendarWrapper>
					<Calendar>
						<Day>{getDayOfWeek(dayOfWeek)}</Day>
						<Date>{`${getMonth(month)} ${dateOfMonth}, ${year}`}</Date>
					</Calendar>
					<TimeAndWeather>
						<Time>{time}</Time>
						<Weather />
					</TimeAndWeather>
				</CalendarWrapper>
				<Event />
			</StyledHeading>
		);
	}
}


const mapStateToProps = ({time}) => ({
	time
});

const mapDispatchToProps = {
	getTime
};

export default connect(mapStateToProps, mapDispatchToProps)(Heading);
