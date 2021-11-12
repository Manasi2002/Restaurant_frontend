import React from "react";
import FoodCard from "./FoodCard";

function RiceItems()
{
    const rv =[
        {
            id: "17",
            imageUrl: "assets/mushroom-biryani.jpg",
            title: "Mushroom Biriyani" ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "18",
            imageUrl: "assets/paneer-pulao.jpg",
            title: "Panner Rice",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "19",
            imageUrl: "assets/Veg Thali.jpg",
            title: "Veg Thali",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "20",
            imageUrl: "assets/curd-rice.jpg",
            title: "Curd Rice",
            price: 19.99,
            cart: "Add to Cart",
        },
    ];
    const rnv =[
        {
            id: "21",
            imageUrl: "assets/Shrimp Biryani.jpg",
            title: "Shrimp Biriyani" ,
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "22",
            imageUrl: "assets/fish biryani.jpg",
            title: "Fish Biriyani",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "23",
            imageUrl: "assets/Chicken Biryani.jpg",
            title: "Chicken Biriyani",
            price: 19.99,
            cart: "Add to Cart",
        },
        {
            id: "24",
            imageUrl: "assets/Egg Biryani (1).jpg",
            title: "Egg Biriyani",
            price: 19.99,
            cart: "Add to Cart",
        },
    ];
    return(
        <div id="stbody">
             <div className="container-fluid text-center h1" style={{fontFamily: "Brush Script MT, cursive", color: "burlywood"}} id="stcontainer">
        RICE ITEMS
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
                        rv.map((item,index)=>(
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
                        rnv.map((item,index)=>(
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

export default RiceItems;