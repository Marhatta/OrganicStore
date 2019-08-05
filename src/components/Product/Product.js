import React from 'react';
import styles from './Product.module.css';

const Product = props => {
    return(
        <div className={styles.card}>
            <h3>{props.title}</h3>
            <img src={props.image} className={styles.image}/>
            <h4>Category:{props.category}</h4>
            <h3>Price:{props.price}</h3>
            <button className='btn btn-danger'>Add to Cart</button>
        </div>
    )
}
export default Product;