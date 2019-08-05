import React,{Fragment} from 'react';


const Sidebar = props =>{
        return(
            <Fragment>
                <div>
                <h3 className='text-primary'>Categories</h3>
                {props.categories}
                </div>
                
            </Fragment>
        )
    }
    
export default Sidebar;