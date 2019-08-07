import React,{Component} from 'react';
import {connect} from 'react-redux';

import CartItem from '../../components/CartItem/CartItem';
import styles from './Cart.module.css';

class Cart extends Component {

    state={
        cartItems:[]
    }

    render(){
       
        return(
            <div className={styles.cart}>
            <h2>Your Items</h2>
            <hr />
            <h2 className={styles.heading}>Name</h2>
            <h2 className={styles.heading}>Image</h2>
            <h2 className={styles.heading}>Price</h2>
            <h2 className={styles.heading}>Category</h2>
            <h2 className={styles.heading}>Quantity</h2>
            <hr />
                {this.props.cartItems.map((item,index)=>{
                return  <CartItem item={item} quantity={this.props.quantity} index={index} />
                })}
           </div>
        ) 
    }
    
}

const mapStateToProps = state => {
    return {
        cartItems:state.cart.cart.cartItems,
        quantity:state.cart.cart.quantity,
        productData:state.productData.productData
    }
}

export default connect(mapStateToProps)(Cart);