import React from "react";
import FoodCard from "./FoodCard";


function Starters()
{
    const sv =[
        {
            id: "1",
            imageUrl: "assets/mushroom soup.jpg",
            title: "Mushroom Soup" ,
            price: 19.99,
            
        },
        {
            id: "2",
            imageUrl: "assets/veg-manchurian.jpg",
            title: "Veg Manchurian",
            price: 19.99,
            
        },
        {
            id: "3",
            imageUrl: "assets/panneeer 65.jpg",
            title: "Panneer 65",
            price: 19.99,
            
        },
        {
            id: "4",
            imageUrl: "assets/gobi 65.jpg",
            title: "Gobi 65",
            price: 19.99,
            
        },
    ];
    const snv =[
        {
            id: "5",
            imageUrl: "assets/chicken lollipop.jpg",
            title: "Chicken Lollipop" ,
            price: 19.99,
            
        },
        {
            id: "6",
            imageUrl: "assets/egg omlette.png",
            title: "Egg Omlette",
            price: 19.99,
            
        },
        {
            id: "7",
            imageUrl: "assets/meat ball.jpg",
            title: "Meat Balls",
            price: 19.99,
            
        },
        {
            id: "8",
            imageUrl: "assets/chilli fried prawns.jpg",
            title: "Chilli fried Prawns",
            price: 19.99,
            
        },
    ];
   
        return(
            <div id="stbody">
            <div className="container-fluid text-center h1" style={{ fontFamily: "Brush Script MT, cursive", color: "burlywood" }} id="stcontainer">
            STARTERS
            </div>
        <div className="container-fluid text-center h1" id="stcontainer">
            <div className="row">
                <div className="col-md-6 text-center h1">
                    <div className="row">
                        <div className="col-lg-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color: "burlywood"}}>
                            <p>Veg Starters</p>
                        </div>
                    </div>
                    <div className="row" id="row1">
                    {
                            sv.map((item,index)=>(
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
                        <div className="col-lg-12 text-center h1"style={{ fontFamily: "Brush Script MT, cursive", color: "burlywood" }} >
                            <p>Non-Veg Starters</p>
                        </div>
                    </div>
                    <div className="row" id="row1">
                    {
                            snv.map((item,index)=>(
                                <div className="col-lg-6">
                                    <FoodCard title={item.title} imageUrl={item.imageUrl} price={item.price} item={item} key={index}/>
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

export default Starters;