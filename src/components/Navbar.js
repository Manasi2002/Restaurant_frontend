import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
     <nav className="navbar navbar-expand-sm" id="navbg" >
        <div className="container-fluid" id="navb">
            
            
            <Link to="/" className="navbar-brand font-weight-bold text-light">
                <img src="assets\jam-removebg-preview.png" alt="Logo" className="img-fluid rounded-circle mx-3" id="nav-logo"/>
                <h4 class="nav-heading">JAM</h4>
            </Link>

            <Link to="/cart" className="ml-auto mx-3" id="cart_main">
                <div id="cart">
                    <i className="fas fa-shopping-cart" style={{color: "whitesmoke",}} id="nav-cart"></i> 
                </div>
                <div class="underline"></div>
            </Link>
            
            <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#collapseNav1"
            >
                <span className="fas fa-bars text-light"></span>
            </button>
            
            <div className="collapse navbar-collapse flex-grow-0" id="collapseNav1">
                <div className="navbar-nav">
                    <Link  to="/" className="nav-item nav-link text-light font-weight-light mx-3" id="home_main" style={{fontSize:"110%",}}>
                        <div id="home">
                            HOME
                        </div>
                        <div class="underline"></div>
                    </Link>
                </div>                
            </div>

            <div className="collapse navbar-collapse flex-grow-0" id="collapseNav1">
                <div className="navbar-nav">
                    <Link to="/menu" className="nav-item nav-link text-light font-weight-light mx-3" id="menu_main" style={{fontSize:"110%",}}>
                        <div id="menu">
                            MENU
                        </div>
                        <div class="underline"></div>
                    </Link>
                </div>                
            </div>
            <div className="collapse navbar-collapse flex-grow-0" id="collapseNav1">
                <div className="navbar-nav">                             
                     <Link to="/prev-orders"className="nav-item nav-link text-light font-weight-light mx-3" id="previousorders_main" style={{fontSize:"110%",}}> 
                        <div id="previousorders">
                            PREVIOUS  ORDERS 
                        </div>    
                        <div class="underline"></div>
                     </Link>
                </div>
            </div>   
        </div>             
     </nav>
    );
}

export default Navbar;