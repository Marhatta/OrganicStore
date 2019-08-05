import React , {Fragment} from 'react';


const Navbar = () => {
    return(
        <Fragment>
        <nav className="navbar navbar-expand-sm bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Link 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link 3</a>
                </li>
            </ul>

        </nav>
        </Fragment>
        
)}

export default Navbar;