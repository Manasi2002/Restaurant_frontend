import React from "react";

function Footer()
{
    return(
            <div className="container-fluid text-center bg-dark" style= {{marginBottom:0}} id="footer">       
                <p className="text-light" style={{color: "white",fontSize: "110%"}}>Contact US:</p>     
                <a href="/" className="font-weight-light text-light"style={{color: "white",fontSize: "110%"}}><i className="fas fa-phone" id="call-fafa" style={{color: "white",fontSize: "120%"}}></i> +91 7989391182  </a>
                <a href="/" className="font-weight-light text-light ml-3"style={{color: "white",fontSize: "110%"}}><i className="fas fa-envelope" id="mail-fafa" style={{color: "white",fontSize: "120%" }}>
                </i> phemamanasi@gmail.com</a>
            </div>

    );
}

export default Footer;