import reducers from 'reducers';

import {
    compose,
    createStore,
    applyMiddleware
} from 'redux';

import thunk from 'libraries/thunk';
import logger from 'redux-logger';


export const createClientStore = (props) => {
    const rootReducer = reducers(props);

    const options = {
        isServer: false
    };

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(rootReducer, props ? props.state : {},
        composeEnhancers(applyMiddleware(
            thunk.withServer(options),
            logger
        ))
    )
}
