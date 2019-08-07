import {ADD_TO_CART,DELETE_FROM_CART} from '../actions/actionTypes';

const initialState = {
    cart:{
        cartItems:[],
        quantity:new Array(100).fill(0)
    },
    counter:0,
   
}


export const addToCart = (state=initialState,action) => {
  
    switch( action.type ){
            
           case ADD_TO_CART:
            //check if cartItems already has that item
            //if yes then increase the quantity 
            if(state.cart.cartItems.includes(action.cartItems)){
                state.cart.quantity[state.cart.cartItems.indexOf(action.cartItems)] += 1;
                return {...state}
            }
            //otherwise add the item and increment the counter
                state.cart.cartItems.push(action.cartItems);
                state.counter = state.counter + 1;
                return {...state};
            
                case DELETE_FROM_CART :
                let cartItems = [...state.cart.cartItems];
                cartItems = cartItems.filter(item=>item.title !== action.productData.title);
                state.cart.cartItems=cartItems;
                //Reduce the quantity value
                if(state.cart.cartItems.length>0){
                    state.counter -= 1;
                }
               
                
                return {...state};

    }
    return state;
}