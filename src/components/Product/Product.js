import React from 'react';

const Product = props => {
    return(
        <div className={props.class}>
            <h3>{props.title}</h3>
            <img src={props.image} />
            <h3>{props.price}</h3>
            <button>Add to Cart</button>
        </div>
    )
}
export default Product;