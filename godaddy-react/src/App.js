import "./app.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignOut from "./pages/SignOut/SignOut";
import SignUp from "./pages/SignUp/SignUp";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='product' element={<Product></Product>}></Route>
          <Route path='cart' element={<Cart></Cart>}></Route>
          <Route path='login' element={<SignIn></SignIn>}></Route>
          <Route path='logout' element={<SignOut></SignOut>}></Route>
          <Route path='account'>
            <Route path='create' element={<SignUp></SignUp>}></Route>
          </Route>
        </Routes>
      </Router>
    );
  }
}
