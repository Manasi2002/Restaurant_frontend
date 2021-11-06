import React from "react";
import FoodCard from "./FoodCard";

function Deserts()
{
    const di =[
        {
            id: "41",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "ButterScotch " ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "42",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "Chocolate ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "43",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "Vannila ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "44",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "Strawberry ",
            price: 19.99,
            cart: "Add to Cart",
        },
    ];
    const dc =[
        {
            id: "45",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "Blue Berry " ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "46",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "Chocolate ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "47",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "REd Velvet ",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "48",
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "Orange ",
            price: 19.99,
            cart: "Add to Cart",
        },
    ];
    return(
        <div id="stbody">
            <div className="container-fluid text-center h1" style={{fontFamily: "Brush Script MT, cursive", color: "burlywood"}} id="stcontainer">
        REFRESHMENTS
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