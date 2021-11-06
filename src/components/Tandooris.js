import React from "react";
import FoodCard from "./FoodCard";

function Tandooris()
{
    const tv =[
        {
            id: "25",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "Panner Tikka" ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "26",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "Cauliflower Tikka",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "27",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "Aloo Tikka ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "28",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "Babycorn Tikka ",
            price: 19.99,
            cart: "Add to Cart",
        },
    ];
    const tnv =[
        {
            id: "29",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "Egg Tikka " ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "30",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "Chicken Leg Tikka ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "31",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "Crab Tikka ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "32",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
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