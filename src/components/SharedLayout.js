import React from "react";
import {  Outlet } from "react-router-dom";

import "../styles/Home.css";
import Navbar from "./Navbar";
function Home() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  );
}

export default Home;
