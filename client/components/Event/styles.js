import styled, {css} from 'styled-components';

import {grey, red, lightBlue} from 'styles/colors';
import {layout4xs, layout3xs} from 'styles/spacing';

export const ImageWrapper = styled.div`
	position: absolute;
	top:0; left: 0; right: 0; bottom: 0;
	z-index: -1;
	background-image: url(${props => props.backgroundImage});
	opacity: 0.20;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	transition: all 1s ease-in-out;
`;
