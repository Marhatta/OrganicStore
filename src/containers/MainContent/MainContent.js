import React,{Component} from 'react';
import {connect} from 'react-redux';

import {fetchProductData} from '../../store/actions';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';

import Category from '../../components/Category/Category';


class MainContent extends Component {

    //dispatch action as soon as component mounts
    componentDidMount=()=>{
        this.props.fetchProductData();
    }

   
    render(){

        //initally display all products
        let products = this.props.data.productData;

        //filter products on basis of category
        const filterCategory = (category) => {
            return products.map(product => product.category === category);
        }
       
        //categories passed as props to <Sidebar />
        const categories = this.props.data.productData.map(product=>{
            
                            return <Category 
                                    product={product} 
                                    category={product.category} 
                                    filterCategory={()=>filterCategory(product.category)}
                                    />
                        });


        return(
                <div className='row container-fluid'>
                    <Categories categories={categories}  />
                    <Products products = {products} />
                </div>
        );
    }
}
    

const mapStateToProps = state => {
    return {
        data:state.productData
    }
} 

const mapDispatchToProps = dispatch => {
    return{
        fetchProductData : () => dispatch(fetchProductData())
    }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(MainContent);