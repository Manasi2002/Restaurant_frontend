import React from "react";
import FoodCard from "./FoodCard";

function Curries(){
    const cv =[
        {
            id: "9",
            imageUrl: "assets/chana massala.jpg",
            title: "Chana Massala" ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "10",
            imageUrl: "assets/palak panner.jpg",
            title: "Palak Panner",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "11",
            imageUrl: "assets/mixed-vegetable-curry.jpg",
            title: "Mixed-Vegy",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "12",
            imageUrl: "assets/mushroom masala.jpg",
            title: "Mushroom Massala" ,
            price:  19.99,
            cart: "Add to Cart",
        },
    ];
    const cnv =[
        {
            id: "13",
            imageUrl: "assets/chicken-curry.jpg",
            title: "Chicken Curry" ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "14",
            imageUrl: "assets/mutton-keema.jpg",
            title: "Mutton Curry ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "15",
            imageUrl: "assets/fish curry (1).jpg",
            title: " Fish Curry ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "16",
            imageUrl: "assets/egg curry.jpg",
            title: "Egg Curry",
            price: 19.99,
            cart: "Add to Cart",
        },
    ];
    return(
        <div id="stbody">
            <div className="container-fluid text-center h1" style={{fontFamily: "Brush Script MT, cursive", color: "burlywood"}} id="stcontainer">
        CURRIES
    </div>
    <div className="container-fluid text-center h1" id="stcontainer">
        <div className="row">
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-lg-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color: "burlywood"}}>
                        <p>Veg Curries</p>
                    </div>
                </div>
                <div className="row" id="row1">
                {
                        cv.map((item,index)=>(
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
                        <p>Non-Veg Curries</p>
                    </div>
                </div>
                <div className="row" id="row1">
                {
                        cnv.map((item,index)=>(
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

export default Curries;