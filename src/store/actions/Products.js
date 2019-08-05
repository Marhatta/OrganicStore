import axios from 'axios';
import {GET_PRODUCT_DATA} from './actionTypes';

//async action to fetch product categories
export const fetchProductData = () => {
    return dispatch => {
        axios.get(' http://localhost:3000/api/products')
            .then(response => {
                //Response holds the products array
                dispatch(getProductData(response.data))
            })
            .catch(error=>{
                console.log(error,'Oops ! Cannot fetch data');
            })
    }
}


export const getProductData = productData => {
    return {
        type:GET_PRODUCT_DATA,
        productData
    }
} 