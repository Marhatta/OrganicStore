import {GET_PRODUCT_DATA} from '../actions/actionTypes';

const initialState = {
    productData : []
}

export const getProductData = (state = initialState,action) => {
    switch(action.type){
        case GET_PRODUCT_DATA:
            return {...state,productData:action.productData};
    }
    return state;
}

