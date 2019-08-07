import {ADD_TO_CART} from './actionTypes';

export const addToCart = (cartItems) => {
    
    return {
        type:ADD_TO_CART,
        cartItems,
    }

}