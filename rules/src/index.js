import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';


ReactDOM.render(<Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
