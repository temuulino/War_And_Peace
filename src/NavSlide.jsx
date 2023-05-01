import React, { useState } from "react";

function NavSlide() {
  const [isshow, setShow] = useState(false);

  function handleHide() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  return (
    <nav className="navslide-container">
      {/* <button id="roundButton" onClick={handleShow}></button> */}
      <img
        src="https://static.thenounproject.com/png/1600037-200.png"
        id="roundButton"
        alt="menu"
        onClick={handleShow}
      />
      <h2>War and Peace</h2>
      <div
        id="flyoutMenu"
        className={isshow ? "show" : ""}
        onClick={handleHide}
      >
        <h2>
          <a href="/">Home</a>
        </h2>
        <h2>
          <a href="/characters">Characters</a>
        </h2>
        <h2>
          <a href="/summary">Summary</a>
        </h2>
        <h2>
          <a href="/map">Map</a>
        </h2>
      </div>
    </nav>
  );
}

export default NavSlide;
