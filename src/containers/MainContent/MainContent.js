import React,{Component} from 'react';
import {connect} from 'react-redux';


import {fetchProductData} from '../../store/actions';
import Products from '../Products/Products';
import Search from '../../components/Search/Search';
import Category from '../../components/Category/Category';



class MainContent extends Component {
    state={
        prod:[],
        loading:true,
        user:true
    }
    
    //dispatch action as soon as component mounts
    componentDidMount=()=>{
        this.props.fetchProductData();
        
    }

    render(){

        //initally display all products

        let products = this.props.data.productData;

        let categories=['All','vegetables','fruits'];
        //filter products on basis of category
        const filterCategory = (category) => {
            products = products.filter((product) => product.category === category)
            this.setState({
                prod:[...products]
            });
            if(category==='All'){
                this.setState({
                    prod:[...this.props.data.productData]
                })
            }
        }
    

        //Search Products
        const onchangeSearchFieldHandler = (event) => {
            products = products.filter(product=>product.title.toLowerCase().includes(event.target.value));
            this.setState({
                prod:[...products]
            });
        }

        const userChange = () => {
            this.state.user ? this.setState({user:false}) : this.setState({user:true})
        }

        return(
             <div className='container-fluid'>
                    <Category name={categories[0]} click={()=>filterCategory(categories[0])}/>
                    <Category name={categories[1]} click={()=>filterCategory(categories[1])}/>
                    <Category name = {categories[2]} click={()=>filterCategory(categories[2])} />
                    <Search changed={(event)=>onchangeSearchFieldHandler(event)} />
                    <button onClick={()=>userChange()} class='btn btn-danger'>Switch to {this.state.user ? 'Admin' : 'User'}</button>
                    <Products products = {this.state.prod} user={this.state.user} /> 
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