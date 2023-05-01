import React from "react";
import Characters from "./Characters";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage-container">
      <h1>War and Peace</h1>
      <button
        onClick={(e) => {
          window.location.href = "/characters";
        }}
      >
        Characters
      </button>
      <button>Summary</button>
      <button
        onClick={(e) => {
          window.location.href = "/map";
        }}
      >
        Map
      </button>
    </div>
  );
}

export default Homepage;
