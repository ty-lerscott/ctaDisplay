import React from "react";
import ReactSvg from 'react-svg';
import {connect} from 'react-redux';
import objectPath from 'object-path';

import {getWeather} from 'actions/WeatherActions';

import {isAfterSunset, isBeforeSunrise, _10SecondsEllapsed} from 'utils/time';
import getStateInfo from 'utils/getStateInfo';

import { StyledWeather, Current, Condition, Temperature, Range, High, Low} from 'components/Weather/styles';

class Weather extends React.Component {
	componentDidMount() {
		this.props.getWeather();
	}

	componentDidUpdate(prevProps) {
		const time = getStateInfo(prevProps.time, this.props.time);

		if(_10SecondsEllapsed(this.props.time) && time.defined && time.changed) {
            this.props.getWeather();
        }
	}

	conditionName = () => {
		if (!objectPath.get(this.props, 'weather.condition')) return;

		const {
			sunset,
			sunrise,
			condition
		} = this.props.weather;

		const isTornado = condition.includes('tornado');
		const isThunder = condition.includes('thunderstorm');
		const isRain = condition.includes('drizzle') || condition.includes('rain');
		const isSnow = condition.includes('snow');
		const isCloud = condition.includes('clouds');
		const isSunny = condition.includes('clear');
		const isHaze = condition.includes('haze') || condition.includes('mist') || condition.includes('dust') || condition.includes('smoke') || condition.includes('fog') || condition.includes('squall');

		let svgName = `weather-${isAfterSunset(sunset) || isBeforeSunrise(sunrise) ? 'night-' : 'day-'}`;

		if (isTornado) {
			svgName += 'tornado';
		}

		if (isThunder && !isTornado) {
			svgName += 'thunder';
		}

		if (isSnow && !isCloud) {
			svgName += 'clouds-snow';
		}

		if (isRain && !isTornado && !isThunder) {
			svgName += 'rain';
		}

		if (isCloud && !isRain && !isThunder && !isTornado) {
			svgName += 'clouds';
		}

		if (isHaze && !isCloud && !isRain && !isThunder && !isTornado) {
			svgName += 'haze';
		}

		if (isSunny && !isThunder && !isTornado && !isSnow && !isCloud && !isRain && !isHaze){
			svgName += 'sun';
		}

		if (process.env.ENVIRONMENT === 'DEVELOPMENT') {
			console.warn({svgName, condition})
		}

		return svgName;
	}

	render() {
		const {
			low,
			high,
			temperature
		} = this.props.weather;

		return (
			<StyledWeather>
				<Current>
					<Condition>
						<ReactSvg src={`/assets/${this.conditionName()}.svg`} />
					</Condition>
					<Temperature>{`${temperature}°F`}</Temperature>
				</Current>
				<Range>
					<High>{high}</High>
					{' / '}
					<Low>{low}</Low>
				</Range>
			</StyledWeather>
		);
	}
}


const mapStateToProps = ({time: {time}, weather}) => ({
	time,
	weather
});

const mapDispatchToProps = {
	getWeather
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
