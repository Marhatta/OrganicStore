import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {addToCart,deleteProduct} from '../../store/actions';
import styles from './Product.module.css';


const Product = props => {

        //Items to be added in cart
        const cartItems = {
            title : props.title,
            image : props.image,
            category :props.category,
            price :props.price
        }
        
        return(
            <div className={styles.card}>
                <h5>
                    {cartItems.title}   
                </h5>
                <img src={cartItems.image} className={styles.image}/>
                <h5>Category:{cartItems.category}</h5>
                <h6>Price:Rs. {cartItems.price}</h6>
                
                {!props.user ? 
                    <div>
                   
                    <Link to={{
                    pathname:'/edit',
                    aboutProps:{
                        id:props.id,
                        title:props.title,
                        price:props.price,
                        category:props.category,
                        image:props.image
                        }
                    }} 
                    className='btn btn-primary fa fa-edit mr-3'
                    > 
                     Edit
                    </Link>

                 <button onClick={()=>props.deleteProduct(props.id)} className='fa fa-trash  btn btn-danger'> Delete</button> 
                </div> : 

                <button className='btn btn-primary mr-3' onClick={()=>props.addToCart(cartItems)}>Add to Cart</button>  
                }
                
            </div>
        )
    }
  


const mapStateToProps = state => {
    return {
        counter:state.cart.cartCounter, 
        //here cart is the key of the reducer mentioned in index.js
        cartItems:state.cart.cartItems,
    }
} 

const mapDispatchToProps = dispatch => {
    return{
        addToCart : (cartItems) => dispatch(addToCart(cartItems)),
        deleteProduct : (productId) =>dispatch(deleteProduct(productId))
    }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);
