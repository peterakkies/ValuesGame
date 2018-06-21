import React from 'react';

/* We import ReactDOM in the file where we want to do the final rendering.  */
import ReactDOM from 'react-dom';

import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

/* Add Bootstrap CSS. */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
