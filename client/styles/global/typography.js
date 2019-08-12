import { createGlobalStyle } from 'styled-components';

import {globalSize, layoutmd} from 'styles/spacing';

import {grey} from 'styles/colors';

import {fontBold} from 'styles/fontVariables';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Domine:400,700|Roboto:300,400,700');
    ${'' /* font-family: 'Roboto', sans-serif; font-family: 'Domine', serif; */}
    html {
        font-size: ${globalSize};
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: white;
        font-size: ${globalSize};
    }

    h1,h4,h5,h6 {
        font-weight: ${fontBold};
    }

    h1 {
        font-size: 10vh;
    }

    h2 {
        font-size: 5vh;
    }

    h3 {
        font-size: 3.5vh;
        color: ${grey};
    }
`;