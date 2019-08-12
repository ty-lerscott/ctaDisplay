import {parseToRgb, parseToHsl, hsl, rgb} from 'polished';

const black_string		 = "rgb(28,23,28)";
const red_string 	 	 = "rgb(244, 67, 54)";
const purple_string		 = "rgb(103, 58, 183)";
const lightBlue_string	 = "rgb(3, 169, 244)";
const grey_string		 = "rgb(158, 158, 158)";
const orange_string		 = "rgb(255, 152, 0)";
const lightGreen_string = "rgb(104, 159, 56)";

export const black 	 	= hsl(parseToHsl(black_string));
export const red 	 	= hsl(parseToHsl(red_string));
export const purple  	= hsl(parseToHsl(purple_string));
export const lightBlue	= hsl(parseToHsl(lightBlue_string));
export const grey 	 	= hsl(parseToHsl(grey_string));
export const orange 	= hsl(parseToHsl(orange_string));
export const lightGreen = hsl(parseToHsl(lightGreen_string));

export const orange_rgb 	= rgb(parseToRgb(orange_string));
export const lightGreen_rgb = rgb(parseToRgb(lightGreen_string));
