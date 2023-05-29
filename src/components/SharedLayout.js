import React from "react";
import {  Outlet } from "react-router-dom";

import "../styles/Home.css";
import Navbar from "./Navbar";
import Footer from './Footer'
function Home() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default Home;
