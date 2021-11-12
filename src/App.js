import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Cart1 from "./components/Cart1";
import PrevOrders from "./components/PrevOrders";
import Starters from "./components/Starters";
import Deserts from "./components/Deserts";
import Curries from "./components/Curries";
import Drinks from "./components/Drinks";
import RiceItems from "./components/RiceItems";
import Tandooris from "./components/Tandooris";
import FastFoods from "./components/FastFoods";
// import Error from "./components/Error";
import { CartProvider } from "react-use-cart";
import { BrowserRouter , Route , Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
          <Switch>
            <Route exact path="/">
              <Body />
              <Footer /> 
            </Route>
            <Route exact path="/prev-orders">
              <PrevOrders />
            </Route>
            <CartProvider>
              <Route exact path="/menu">
                <Menu />
              </Route>
              <Route exact path="/starters">
                <Starters />
              </Route>
              <Route exact path="/curries">
              <Curries />
              </Route>
              <Route exact path="/rice-items">
              <RiceItems />
              </Route>
              <Route exact path="/deserts">
              <Deserts />
              </Route>            
              <Route exact path="/drinks">
                <Drinks />
              </Route>            
              <Route exact path="/tandooris">
                <Tandooris />
              </Route>
              <Route exact path="/fast-foods">
                <FastFoods />
              </Route>
              <Route exact path="/cart">
                <Cart1 />
              </Route>
              {/* <Route>
                <Error />
              </Route> */}
              </CartProvider>
          </Switch>         
    </BrowserRouter>


  );
}

export default App;
