// Home.js

import React from "react";
import NavBar from './NavBar'
import "./Home.css"; // Import your CSS file
import Carousel from "./Carousel";
import GroceryItems from "./GroceryItemCard";
import Footer from "./Footer";

const Home = () => (
  <div className="homepage">
    <NavBar />
    <h1 className="animated-text">Welcome to Our Grocery Store!</h1>
    <Carousel />
    <h2 className="featured-items-heading">Featured Grocery Items</h2>
    <GroceryItems />
    <Footer />
  </div>
);

export default Home;
