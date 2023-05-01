import React, { useState } from "react";

function Navigation() {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <div className="menu-items">
          <button
            onClick={(e) => {
              window.location.href = "/characters";
            }}
          >
            Home
          </button>
          <button
            onClick={(e) => {
              window.location.href = "/characters";
            }}
          >
            Characters
          </button>
          <button
            onClick={(e) => {
              window.location.href = "/characters";
            }}
          >
            Summary
          </button>
          <button
            onClick={(e) => {
              window.location.href = "/characters";
            }}
          >
            Map
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
