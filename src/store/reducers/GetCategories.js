import {GET_CATEGORIES} from '../actions/actionTypes';

const initialState = {
    categories : []
}

export const getCategories = (state = initialState,action) => {
    switch(action.type){
        case GET_CATEGORIES:
            return state;
    }
    return state;
}

