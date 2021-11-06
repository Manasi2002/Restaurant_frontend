import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
     <nav className="navbar navbar-expand-sm" id="navbg" >
        <div className="container-fluid" id="navb">
            <img src="assets\jam-removebg-preview.png" alt="Logo" className="img-fluid rounded-circle mx-3" style={{width: "2%",}}/>
            <Link to="/" className="navbar-brand font-weight-bold text-light"><h4>JAM
            </h4></Link>
            <Link to="/cart" className="ml-auto mx-3"><i className="fas fa-shopping-cart" style={{color: "whitesmoke",}}></i> </Link>
            
            <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#collapseNav1"
            >
                <span className="fas fa-bars text-light"></span>
            </button>

            <div className="collapse navbar-collapse flex-grow-0" id="collapseNav1">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link text-light font-weight-light mx-3" style={{fontSize:"110%",}}>
                        HOME
                    </Link>
                </div>                
            </div>

            <div className="collapse navbar-collapse flex-grow-0" id="collapseNav1">
                <div className="navbar-nav">
                    <Link to="/menu" className="nav-item nav-link text-light font-weight-light mx-3" style={{fontSize:"110%",}}>
                        MENU
                    </Link>
                </div>                
            </div>
            <div className="collapse navbar-collapse flex-grow-0" id="collapseNav1">
                <div className="navbar-nav">                             
                     <Link to="/prev-orders"className="nav-item nav-link text-light font-weight-light mx-3" style={{fontSize:"110%",}}> 
                         PREVIOUS  ORDERS     
                     </Link>
                </div>
            </div>   
        </div>             
     </nav>
    );
}

export default Navbar;