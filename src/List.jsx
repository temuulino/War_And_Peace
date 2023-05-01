import React, { useState } from "react";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import MoreChar from "./MoreChar";

function List(props) {
  const [charid, setId] = useState("");
  const id = props.id;
  const img = props.img;
  const name = props.name;
  const about = props.about;
  const navigate = useNavigate();

  // I should be able to get the specific id from here
  // to give the user read more access
  // function handleClick() {
  //   MoreChar(props.id);
  //   window.location.href = "/characters/morechar";
  // }
  const handleClick = (id) => {
    navigate({
      pathname: "/characters/morechar",
      search: createSearchParams({
        id: props.id
      }).toString()
    });
  };

  return (
    <div className="list">
      <div className="list-container">
        <img src={props.img} alt="character-img" />
        <div className="list-about">
          <h2>{props.name}</h2>
          <p>{props.about}</p>
        </div>
      </div>
      {/* This way the button shows up on the bottom */}
      <button onClick={handleClick}>More</button>
    </div>
  );
}

export default List;
