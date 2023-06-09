import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";

function Home() {
  return (
   
      <div className="headerContainer">
        <h1> COOKFOLIO </h1>
        <p> Redefining the way you cook</p>
        <Link to="/menu">
          <button> Recipes </button>
        </Link>
      </div>
   
  );
}

export default Home;
