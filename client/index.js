import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createClientStore} from 'utils/createStore';

import App from 'components/App';

const ClientStore = createClientStore();
window.ctaDisplay = ClientStore;

ReactDOM.render(<Provider store={ClientStore}><App /></Provider>, document.getElementById('ctaDisplay'));