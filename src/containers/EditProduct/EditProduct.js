import React,{Component} from 'react';
import {connect} from 'react-redux';
import Text from '../../components/Text/Text';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import {editProduct} from '../../store/actions';
import styles from './EditProduct.module.css';

class EditProduct extends Component {


    state = {

        name:'',
        category:'',
        price:'',
        url:'',
        errors:{
            productName:'',
            productCategory:'',
            productPrice:'',
            productUrl:''
        },
        allFilled:false
        

    }

    handleTextChange = (event) => {
    
      let key = event.target.name;
      let errors = this.state.errors;
      let value = event.target.value;
      switch(event.target.name){
          case 'name' : errors.productName = value === '' ? 'Required' : ''
              break;
          case 'category' : errors.productCategory = value === '' ? 'Required' : ''
                     
              break;
          case 'price' :errors.productPrice = (value === '' ||  isNaN(value))  ? 'Number is expected' : ''
              break;
          case 'url' : errors.productUrl = value === '' ? 'Required' : ''
              break;
      }
      this.setState({[key]:value,errors:errors,allFilled:true});
    }
  
   onSubmitHandler = (event) => {
       event.preventDefault();
       let formValid = true;
       let allFilled = this.state.allFilled;
       let errors=this.state.errors;
       if(errors.productName.length>0 && formValid){
           formValid=false;
       }
       if(errors.productCategory.length>0 && formValid){
           formValid=false;
       }
       if(errors.productPrice.length>0 && formValid){
           formValid=false;
       }
       if(errors.productUrl.length>0 && formValid){
          formValid=false;
      }

       if(formValid && allFilled){
           //form the data to be passed
           //create a new object
           const newProduct = {
              category:this.state.category,
              imageUrl:this.state.url,
              price:this.state.price,
              title:this.state.name

           }
          
           //dispatch an action to add new Product
          this.props.editProduct(this.props.location.aboutProps.id,newProduct);
       }
       else{
           alert('Please check your form...Not Valid');
       }
   } 


    render(){
        return(
            <div className={styles.edit}>
                <Text type='text' placeholder='Product Name' name='name' changed={(event)=>this.handleTextChange(event)} />
                <p>{this.state.errors.productName}</p>
                <Text type='text' placeholder='Product Category' name='category'  changed={(event)=>this.handleTextChange(event)}/>
                <p>{this.state.errors.productType}</p>
                <Text type='text' placeholder='Price' name='price' changed={(event)=>this.handleTextChange(event)}/> 
                <p>{this.state.errors.productPrice}</p>
                <Text type='text' placeholder='Image Url' name='url' changed={(event)=>this.handleTextChange(event)}/> 
                <p>{this.state.errors.url}</p>
                <SubmitButton type='submit' clicked={(event) => this.onSubmitHandler(event)}>Save</SubmitButton>
            </div>        
        )
    }
   
}

const mapDispatchToProps = dispatch => {
    return {
        editProduct:(id,productData)=>dispatch(editProduct(id,productData))
    }
}
export default connect(null,mapDispatchToProps)(EditProduct);

