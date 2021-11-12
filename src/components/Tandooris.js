import React from "react";
import FoodCard from "./FoodCard";

function Tandooris()
{
    const tv =[
        {
            id: "25",
            imageUrl: "assets/Paneer-Tikka-Tawa.jpg",
            title: "Panner Tikka" ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "26",
            imageUrl: "assets/cauliflower tikka.jpg",
            title: "Cauliflower Tikka",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "27",
            imageUrl: "assets/aloo tikka (1).jpg",
            title: "Aloo Tikka ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "28",
            imageUrl: "assets/babycorn tikka.jpg",
            title: "Babycorn Tikka ",
            price: 19.99,
            cart: "Add to Cart",
        },
    ];
    const tnv =[
        {
            id: "29",
            imageUrl: "assets/Egg Tikka (1).jpg",
            title: "Egg Tikka " ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "30",
            imageUrl: "assets/chicken tikka.jpg",
            title: "Chicken Leg Tikka ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "31",
            imageUrl: "assets/Crab Tandoori.jpg",
            title: "Crab Tikka ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "32",
            imageUrl: "assets/fish tikka.jpg",
            title: "Fish Tikka ",
            price: 19.99,
            cart: "Add to Cart",
        },
    ];
    return(
        <div id="stbody">
            <div className="container-fluid text-center h1" style={{fontFamily: "Brush Script MT, cursive", color: "burlywood"}} id="stcontainer">
        Tandooris & Tikkas
    </div>
    <div className="container-fluid text-center h1" id="stcontainer">
        <div className="row">
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-lg-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color: "burlywood"}}>
                        <p>Veg Items</p>
                    </div>
                </div>
                <div className="row" id="row1">
                    {
                        tv.map((item,index)=> (
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
                        <p>Non-Veg Items</p>
                    </div>
                </div>
                <div className="row" id="row1">
                    {
                        tnv.map((item,index)=>(
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

export default Tandooris;