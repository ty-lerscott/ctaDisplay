import React from 'react';

import GlobalStyles from 'components/App/styles';

import Heading from 'components/Heading';
import Marquee from 'components/Marquee';
import Arrivals from 'components/Arrivals/controller';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyles/>
                <Heading />
                <Marquee />
                <Arrivals />
            </React.Fragment>
        )
    }
}