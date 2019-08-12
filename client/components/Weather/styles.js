import styled from 'styled-components';

import {grey, red, lightBlue} from 'styles/colors';
import {layout4xs, layout3xs} from 'styles/spacing';

export const StyledWeather = styled.div`
	text-align: right;
`;

export const Current = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const Condition = styled.div`
	grid-area: condition;

	svg {
		height: 100%;
		width: auto;
		fill: white;
	}
`;

export const Temperature = styled.h3`
	grid-area: current;
	margin-left: ${layout3xs};
`;

export const Range = styled.div`
	color: ${grey};
	margin-top: ${layout4xs};
`;

export const High = styled.span`
	color: ${red};
`;

export const Low = styled.span`
	color: ${lightBlue};
`;
