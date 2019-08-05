import React from 'react';
import Product from '../../components/Product/Product';
import styles from './Products.module.css';

const Products = props => {
    return(
        <div className={styles.products}>
            {props.products.map(product=>{
                return <Product
                        image={product.imageUrl} 
                        title={product.title}
                        price={product.price}
                        category={product.category}    
                        />
            })}
        </div>
    )
}

export default Products;