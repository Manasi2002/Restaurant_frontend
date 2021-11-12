import React from "react";
import FoodCard from "./FoodCard";

function Drinks(){
    const ds =[
        {
            id: "33",
            imageUrl: "assets/Coca Cola.jpg",
            title: "Coke " ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "34",
            imageUrl: "assets/Coconut smoothie.jpg",
            title: "Smoothie ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "35",
            imageUrl: "assets/Rose Milk.jpg",
            title: "Rose Milk ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "36",
            imageUrl: "assets/Lemon juice.jpg",
            title: "Lemon Juice ",
            price: 19.99,
            cart: "Add to Cart",
        },
    ];
    const dh =[
        {
            id: "37",
            imageUrl: "assets/carlsberg.jpg",
            title: "Carlsberg " ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "38",
            imageUrl: "assets/Mojito.jpg",
            title: "Mojito ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "39",
            imageUrl: "assets/King Fisher.jpg",
            title: "Kingfisher ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "40",
            imageUrl: "assets/McDowells-No.1.jpg",
            title: "Mc Dowell's ",
            price: 19.99,
            cart: "Add to Cart",
        },
    ];
    return(
        <div id="stbody">
            <div className="container-fluid text-center h1" style={{fontFamily: "Brush Script MT, cursive", color: "burlywood"}} id="stcontainer">
        DRINKS
    </div>
    <div className="container-fluid text-center h1" id="stcontainer">
        <div className="row">
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-lg-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color: "burlywood"}}>
                        <p>Soft Drinks</p>
                    </div>
                </div>
                <div className="row" id="row1">
                {
                        ds.map((item,index)=>(
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
                        <p>Hard Drinks</p>
                    </div>
                </div>
                <div className="row" id="row1">
                {
                        dh.map((item,index)=>(
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

export default Drinks;