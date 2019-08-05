import React,{Component,Fragment} from 'react';


class Sidebar extends Component{

    state = {
        productCategories = []
    }

    render(){

        this.state.productCategories.map(category => {
            <li>{category}</li>
        })

        return(
            <Fragment>

            </Fragment>
        )
    }
    
}

export default Sidebar;