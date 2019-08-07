import {GET_PRODUCT_DATA,ADD_PRODUCT} from '../actions/actionTypes';

const initialState = {
    productData : []
}

export const getProductData = (state = initialState,action) => {
    switch(action.type){
        case GET_PRODUCT_DATA:
            return {...state,productData:action.productData};
        case ADD_PRODUCT:
            return {...state,productData:action.productData};
        default:return {...state};
    }
}
