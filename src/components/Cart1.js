import React from "react";
import { useCart } from "react-use-cart";

function Cart1(props)
{
    const { isEmpty,items,totalUniqueItems,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart }=useCart();
    if(isEmpty) return( 
    <div className="text-center">
        <h1 className="text-center" id="emptyCart">Your Cart is Empty!!!</h1>
     <img src="https://assets.materialup.com/uploads/87d4df96-a55f-4f4b-9a17-a696eded97f3/preview.gif" alt="gif"/>
    </div>);
    return(
        <div className="container-fluid text-center " id="cartcontainer">
            <div className="row text-justify-center">
                <div className="col-12 text-center">
                    <h5>Cart: ({totalUniqueItems}) Total Items:({totalItems}) </h5>
                    <table className="table table-light table-hover">
                            <tbody>
                                {items.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>
                                            <img src={item.imageUrl} style={{height:"6rem"}} alt="pic"/>
                                        </td>
                                        <td id="harry" >{item.title}</td>
                                        <td id="harry">${item.price}</td>
                                        <td id="harry">
                                            <button className="btn btn-info mx-1" onClick={()=>updateItemQuantity(item.id,item.quantity-1)} >-</button>
                                            {item.quantity}
                                            <button className="btn btn-info mx-1" onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
                                            <i class="fas fa-trash" style={{color:"red",}} aria-hidden="true" onClick={()=>removeItem(item.id)}></i>                                            
                                        </td>
                                    </tr>
                                )
                                })}
                            </tbody>
                    </table>
                </div>
                <div className="col-12 text-center">
                        <h2>Total Price: $ {cartTotal}</h2>
                </div>
                <div className="col-12 text-center">
                    <button className="btn btn-danger mx-2" onClick={()=>emptyCart()}>Clear Cart</button>
                    <button className="btn btn-primary mx-2 "type="submit">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default Cart1;