import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


import './index.css';
import App from './App';
import {getProductData,addToCart} from './store/reducers';



//combine all the reducers here
//if key is added , make sure you are using that key to access the state via props
const rootReducer = combineReducers({
    productData:getProductData,
    cart:addToCart
});

//create a store
const store = createStore(rootReducer,applyMiddleware(thunk));

//Enable redux developer tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

