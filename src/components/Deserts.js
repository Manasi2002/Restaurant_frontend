import React from "react";
import FoodCard from "./FoodCard";

function Deserts()
{
    const di =[
        {
            id: "41",
            imageUrl: "assets/Butter-scotch-ice-cream.jpg",
            title: "ButterScotch " ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "42",
            imageUrl: "assets/Chocolate ice cream.jpg",
            title: "Chocolate ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "43",
            imageUrl: "assets/Vannila Ice cream.jpg",
            title: "Vannila ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "44",
            imageUrl: "assets/Strawberry Ice cream (1).jpg",
            title: "Strawberry ",
            price: 19.99,
            cart: "Add to Cart",
        },
    ];
    const dc =[
        {
            id: "45",
            imageUrl: "assets/blue berry cake.jpg",
            title: "Blue Berry " ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "46",
            imageUrl: "assets/Chocolate Cake.jpg",
            title: "Chocolate",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "47",
            imageUrl: "assets/Red velvet.jpg",
            title: "Red Velvet ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "48",
            imageUrl: "assets/Mango cake.jpg",
            title: "Orange ",
            price: 19.99,
            cart: "Add to Cart",
        },
    ];
    return(
        <div id="stbody">
            <div className="container-fluid text-center h1" style={{fontFamily: "Brush Script MT, cursive", color: "burlywood"}} id="stcontainer">
        DESERTS
    </div>
    <div className="container-fluid text-center h1" id="stcontainer">
        <div className="row">
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-lg-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color: "burlywood"}}>
                        <p>Ice Creams</p>
                    </div>
                </div>
                <div className="row" id="row1">
                {
                        di.map((item,index)=>(
                            <div className="col-lg-6">
                                <FoodCard title={item.title} imageUrl={item.imageUrl} price={item.price} item={item} key={index} />
                            </div>
                        ))
                }
                </div>
                
                <div className="row">
                    <div className=" col-lg-12 container">
                        <a href="/" id="more">
                            See More <i className="fas fa-angle-double-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-lg-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color: "burlywood"}}>
                        <p>Cakes</p>
                    </div>
                </div>
                <div className="row" id="row1">
                {
                        dc.map((item,index)=>(
                            <div className="col-lg-6">
                                <FoodCard title={item.title} imageUrl={item.imageUrl} price={item.price} item={item} key={index} />
                            </div>
                        ))
                }
                </div>
                <div className="row">
                    <div className="container">
                        <a href="/" id="more">
                            See More <i className="fas fa-angle-double-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
        </div>
    );
}

export default Deserts;