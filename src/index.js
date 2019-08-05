import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';



//combine all the reducers here
//if key is added , make sure you are using that key to access the state via props
const rootReducer = combineReducers({

});

//create a store
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

