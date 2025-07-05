import React from 'react';
import ReactDOM from 'react-dom';
import './vendors/reset.css';
import 'semantic-ui-css/semantic.min.css';

import './index.css';
import './App.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
