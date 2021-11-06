import React from "react";
import { useCart } from "react-use-cart";

function FoodCard(props)
{
    const{addItem}=useCart();
    const {title,imageUrl,price}=props;
    return(
        <div className="container">
            <img src={imageUrl} alt="pic" id="stimg" />
            <div className="middle">
                <div className="text">
                    {title} <br />
                    ${price}                
                </div>
            </div>
            <p><button className="butn" onClick={()=> addItem(props.item)}>Add to Cart</button></p>
        </div>
    );
}

export default FoodCard;