import React from "react";
import "../CSS/home.css";
import NavBar from "./../Components/NavBar";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <body className="home-layout">
        <h1 className="header">BIENVENIDO</h1>
      </body>
    </React.Fragment>
  );
};

export default Home;
