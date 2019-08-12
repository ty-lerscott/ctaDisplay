import styled, {keyframes} from 'styled-components';
import {darken} from 'polished';

import {border} from 'styles/common';
import {black, grey} from 'styles/colors';

export const StyledMarquee = styled.div`
	grid-area: marquee;
	height: 6vh;
	position:relative;
	border-top: ${border};
	border-bottom: ${border};
	border-top-color: ${darken(0.01, grey)};
	border-top-color: ${darken(0.01, grey)};
	background-color: ${darken(0.1, black)};
	display: flex;
	align-items: center;
	overflow: hidden;
`;



const scrollLeft = () => {
	return keyframes`
		0% { transform: translateX(100%); }
		100% { transform: translateX(-120%); }
	`;
}

export const ScrollingText = styled.p`
	width: 100%;
	font-size: 3vh;
	position: absolute;
	text-align: center;
	margin: 0;
	transform:translateX(100%);
	white-space: nowrap;

	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-duration: ${({duration}) => duration || 0};
	animation-name: ${scrollLeft()};
`;