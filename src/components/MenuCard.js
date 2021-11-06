import React from "react";
import { useCart } from "react-use-cart";

function MenuCard(props)
{
    const{addItem}=useCart();
    const {title,imageUrl,price,oprice}=props;
    return(
        <div className="card" id="menucard">
            <img id="menimg" src={imageUrl} alt="pic" />
            <h4 className="title" style={{fontWeight: "lighter"}}>{title}</h4>
            <p className="price"> <del> $ {oprice}</del> $ {price}</p>
            <p><button id="btn" onClick={()=> addItem(props.item)}>Add to Cart</button></p>
        </div>
    );
}

export default MenuCard;