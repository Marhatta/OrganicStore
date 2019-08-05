import React,{Fragment} from 'react';
import {connect} from 'react-redux';

import Sidebar from '../Sidebar/Sidebar';
import Products from '../Products/Products';


const MainContent = props => {
    return(
        <Fragment>
            <Sidebar />
            <Products />
        </Fragment>
    );
}

const mapStateToProps = state => {
    
} 


export default connect(mapStateToProps,null)(MainContent);