import React from "react";
import FoodCard from "./FoodCard";

function FastFoods()
{
    const ffv =[
        {
            id: "49",
            imageUrl: "assets/Pizza.jpg",
            title: "Veg Pizza " ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "50",
            imageUrl: "assets/veg-burger.jpg",
            title: "Veg Burger ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "51",
            imageUrl: "assets/French Fries.jpg",
            title: "French Fries ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "52",
            imageUrl: "assets/veg-noodles.jpg",
            title: "Veg Noodles ",
            price: 19.99,
            cart: "Add to Cart",
        },
    ];
    const ffnv =[
        {
            id: "53",
            imageUrl: "assets/Chicken Pizza.jpg",
            title: "Chicken Pizza " ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "54",
            imageUrl: "assets/mutton burger.jpg",
            title: "Mutton Burger ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "55",
            imageUrl: "assets/fish sandwich.jpg",
            title: "Fish Sandwich ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "56",
            imageUrl: "assets/egg noodles.jpg",
            title: "Egg Noodle ",
            price: 19.99,
            cart: "Add to Cart",
        },
    ];

    return(
        <div id="stbody">
            <div className="container-fluid text-center h1" style={{fontFamily: "Brush Script MT, cursive", color: "burlywood"}} id="stcontainer">
        Fast Foods
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
                            ffv.map((item,index) => (
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
                        ffnv.map((item,index) => (
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
    )
}

export default FastFoods;