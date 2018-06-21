import React from 'react';

/* We import ReactDOM in the file where we want to do the final rendering.  */
import ReactDOM from 'react-dom';

import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
