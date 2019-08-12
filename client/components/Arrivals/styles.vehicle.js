import styled, {css, keyframes} from 'styled-components';

import {border} from 'styles/common';
import {layoutxs, layoutsm, layoutmd} from 'styles/spacing';
import {fontBold, fontNormal} from 'styles/fontVariables';
import {red,purple,lightBlue, r , lightGreen, orange_rgb, lightGreen_rgb} from 'styles/colors';

export const StyledVehicle = styled.div`
	position: absolute;
    height: calc(100%/(${Number(process.env.DISPLAY_LIMIT)}));
    width: 100vw;
	border-bottom: ${border};
	transition: all 0.5s ease-out;

	&.vehicle-0 {top: 0; z-index: 1;}
	&.vehicle-1 {top: calc((100%/${Number(process.env.DISPLAY_LIMIT)})*1); z-index: 2;}
	&.vehicle-2 {top: calc((100%/${Number(process.env.DISPLAY_LIMIT)})*2); z-index: 3;}
	&.vehicle-3 {top: calc((100%/${Number(process.env.DISPLAY_LIMIT)})*3); z-index: 4;}
	&.vehicle-4 {top: calc((100%/${Number(process.env.DISPLAY_LIMIT)})*4); z-index: 5;}
	&.vehicle-5 {top: calc((100%/${Number(process.env.DISPLAY_LIMIT)})*5); z-index: 6;}
	&.vehicle-6 {top: calc((100%/${Number(process.env.DISPLAY_LIMIT)})*6); z-index: 7;}
	&.vehicle-7 {top: calc((100%/${Number(process.env.DISPLAY_LIMIT)})*7); z-index: 8;}
	&.vehicle-8 {top: calc((100%/${Number(process.env.DISPLAY_LIMIT)})*8); z-index: 9;}
	&.vehicle-9 {top: calc((100%/${Number(process.env.DISPLAY_LIMIT)})*9); z-index: 10;}
`;

export const Body = styled.div`
	position: absolute;
	z-index: 10;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height:100%;
	width: 100%;
	display: grid;
	grid-template-areas: "icon content arrivalTime";
	grid-template-columns: 7.5vw 78.5vw 12vw;
	grid-column-gap: 1vw;
`;

export const Icon = styled.div`
	grid-area: icon;

	svg {
		fill: white;
		height: calc(69vh/(${process.env.DISPLAY_LIMIT}));
		padding: 2vh;
		width: 100%;
	}
`;

export const Content = styled.div`
	grid-area: content;
	/* padding: ${layoutsm}; */
	display: flex;
    align-items: center;
`;

export const Route = styled.h2`
	font-weight: ${fontBold};
	margin-right: calc(${layoutmd}/3);
`;

const glow = (isLive) => {
	return keyframes`
		0% { box-shadow: 0 0 0 0px ${isLive ? lightGreen_rgb : orange_rgb};}
		100% { box-shadow: 0 0 0 6px rgba(0, 0, 0, 0); }
	`;
}

export const Status = styled.div`
	height: calc(${layoutmd}/3);
	width: calc(${layoutmd}/3);
	border-radius: 50%;
	background-color: ${({isLive}) => isLive && lightGreen};
	border-color: ${({isLive}) => !isLive && lightGreen};
	${({isLive}) => css`
		animation: ${glow(isLive)} 1.5s ease-in-out infinite;
	`};
`;

export const ArrivalTime = styled.h4`
	grid-area: arrivalTime;
	display: flex;
    justify-content: center;
    align-items: center;
	font-size: ${layoutxs};
	/* padding: ${layoutsm}; */
	font-weight: ${fontNormal};
`;


export const ProgressBar = styled.div`
	position: absolute;
	z-index: 0;
	top: 0;
	left: 0;
	height:100%;
	width: 100%;
	pointer-events: none;
	transition: max-width ${({progress})=> progress === 0 ? '5' : '15'}s linear;
	max-width: ${({progress}) => `${progress}vw`};

	&.bus {
		background-color: ${lightBlue};
	}

	&.train-red {
		background-color: ${red};
	}

	&.train-p {
		background-color: ${purple};
	}
`;

