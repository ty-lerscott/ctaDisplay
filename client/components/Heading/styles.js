import styled from 'styled-components';

import {layoutsm, layout3xs} from 'styles/spacing';

export const StyledHeading = styled.div`
    grid-area: heading;
	position: relative;
`;

export const Calendar = styled.div`
	grid-area: calendar;
	display: flex;
    flex-direction: column;
`;

export const Day = styled.h1`
	grid-area: day;
`;

export const Date = styled.h3`
	grid-area: date;
`;

export const Time = styled.h2`
	text-align: right;
`;

export const CalendarWrapper = styled.div`
	grid-area: calendar;
	display: grid;
	grid-template-areas: "calendar time";
	grid-template-columns: 4fr 1fr;
	padding: ${layoutsm};
	height: 25vh;
    align-items: center;
`;

export const TimeAndWeather = styled.div`
	grid-area: time;
	display: grid;
	grid-template-areas: "clock" "temperature";
	grid-template-rows: auto 1fr;
	grid-row-gap: ${layout3xs};
`;