import React,{Component} from 'react';
import {connect} from 'react-redux';

import {fetchProductData} from '../../store/actions';
import Sidebar from '../Sidebar/Sidebar';
import Products from '../Products/Products';

import Category from '../../components/Category/Category';


class MainContent extends Component {

    //dispatch action as soon as component mounts
    componentDidMount=()=>{
        this.props.fetchProductData();
    }

   
    render(){

        let products = this.props.data.productData;
       
        //categories passed as props to <Sidebar />
        const categories = this.props.data.productData.map(product=>{
                            return <Category product={product}/>
                        });


        return(
                <div className='row container-fluid'>
                    <Sidebar categories={categories} className='col-md-6'/>
                    <Products products = {products} className='col-md-6'/>
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