import React from "react";
import { useCart } from "react-use-cart";

function MenuCard2(props)
{
    const{addItem}=useCart();
    const {title,imageUrl,price}=props;
    return(
        <div className="card" id="menucard2">
            <img id="menimg" src={imageUrl} alt="pic" />
            <h4 className="title" style={{fontWeight: "lighter"}}>{title}</h4>
            <p className="price2"> $ {price}</p> 
            <p><button id="btn" onClick={()=> addItem(props.item)}>Add to Cart</button></p>
        </div>
    );
}

export default MenuCard2;