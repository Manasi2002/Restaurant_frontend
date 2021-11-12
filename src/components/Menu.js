import React from "react";
import MenuCard from "./MenuCard";
import MenuCard2 from "./MenuCard_2";
import {Link} from "react-router-dom";

function Menu() {
    const spo = [
        {
            id: "57", 
            imageUrl: "https://storage.googleapis.com/zopsmart-uploads/originals/20181205/ChineseSpecialCombo-20181205-021543.png",
            title: "Veg-Rice items + 3Starters",
            oprice: 19.99,
            price: 15,
        },
        {
            id: "58",
            imageUrl: "assets/Mutton Burger+French Fries+Coke.jpg",
            title: "Burger+French fries+coke",
            oprice: 19.99,
            price: 15,
        },
        {
            id: "59",
            imageUrl: "assets/Veg Noodles+Meat Balls.jpg",
            title: "Veg Noodles+Meat Balls",
            oprice: 19.99,
            price: 15,
        },
    ];
    const tr = [
        {
            id: "60",
            imageUrl: "assets/Shrimp Biryani.jpg",
            title: "Shrimp Biriyani",
            price: 19.99,
        },
        {
            id: "61",
            imageUrl: "assets/chicken lollipop.jpg",
            title: "Chicken Lollipop",
            price: 19.99,
        },
        {
            id: "62",
            imageUrl: "assets/Paneer-Tikka-Tawa.jpg",
            title: "Panner Tikka",
            price: 19.99,
        },
    ];
    return (
        <div className="container-fluid" id="menubody">
            <div className="container-fluid text-center h1" id="menucont" style={{ fontFamily: "Brush Script MT, cursive", color: "burlywood" }}>
                MENU
            </div>
            <div className="container">
                <div className="row">
                    <Link to="/starters" className="col-md-2 bts" >
                        Starters
                    </Link>
                    <Link to="/curries" className="col-md-2 bts" >
                        Curries
                    </Link>
                    <Link to="/rice-items" className="col-md-2 bts" >
                        Rice-Items
                    </Link>
                    <Link to="/tandooris" className="col-md-2 bts" >
                        Tandooris
                    </Link>
                </div>
                <div className="row">
                    <Link to="/deserts" className="col-md-3 bts2">
                        Deserts
                    </Link>
                    <Link to="/drinks" className="col-md-3 bts2">
                        Drinks
                    </Link>
                    <Link to="/fast-foods" className="col-md-3 bts2">
                        Fast Foods
                    </Link>
                    
                </div>
            </div>

            <div className="container h1" id="a" style={{ color: "burlywood" }}>
                <p style={{ fontFamily: "Brush Script MT, cursive", color: "burlywood" }} >Special Offers <i className="fas fa-bullhorn"></i></p>
                <div className="container">
                    <div className="row">
                        {
                            spo.map((item,index) => (
                                <div className="col-12 col-lg-4">
                                    <MenuCard title={item.title} imageUrl={item.imageUrl} price={item.price} oprice={item.oprice} item={item} key={index} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="container h1" id="a" style={{ color: "burlywood" }}>
                <p style={{ fontFamily: "Brush Script MT, cursive", color: "burlywood" }}>Trending:-</p>
                <div className="container">
                    <div className="row">
                        {
                            tr.map((item,index) => (
                                <div className="col-12 col-lg-4">
                                    <MenuCard2 title={item.title} imageUrl={item.imageUrl} price={item.price} item={item} key={index} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;