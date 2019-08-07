import React from 'react';
import styles from './CartItem.module.css';

const CartItem = props => {
    
    return(
        <div >
            <h2 className={styles.cartItem}>{props.item.title}</h2>
            <img className={styles.image} src={props.item.image} />
            <h2 className={styles.cartItem}>{props.item.price}</h2>
            <h2 className={styles.cartItem}>{props.item.category}</h2>
            <h2 className={styles.cartItem}>{props.quantity[props.index]}</h2>
            <hr />

        </div>
    )
}

export default CartItem;