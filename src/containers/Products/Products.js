import React,{Fragment} from 'react';
import Product from '../../components/Product/Product';

const Products = props => {
    return(
        <Fragment>
            {props.products.map(product=>{
                return <Product
                        image={product.imageURL} 
                        title={product.title}
                        price={product.price}    
                        />
            })}
        </Fragment>
    )
}

export default Products;