import {GET_PRODUCTS} from '../actions/actionTypes';


const initialState = {
    products:[]
}

export const getProducts = (state = initialState ,action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return state;
    }
    return state;
}


