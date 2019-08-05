import React from 'react';
import styles from './Category.module.css';

const Category = props => {
    return(
        <button className={`${styles.category} btn btn-primary`} onClick={props.filterCategory}>
            {props.product.category}
        </button>
    )
}

export default Category;