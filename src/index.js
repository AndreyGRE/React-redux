import React  from 'react';
import ReactDOM from 'react-dom'
import{Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer';
//import * as actions from './acton'
import App from './Compomemts/app';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));