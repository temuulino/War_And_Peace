import React, { useState } from "react";
import List from "./List";
import CharData from "./Data/CharData";

function Characters() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState({
    query: "",
    list: []
  });
  const handleChange = (e) => {
    const results = CharData.filter((char) => {
      if (e.target.value === "") return CharData;
      return char.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setState({
      query: e.target.value,
      lists: results
    });
  };

  return (
    <div className="char">
      <div className="char-searchbar">
        <input
          type="text"
          value={state.query}
          onChange={handleChange}
          placeholder="Search for a character"
        />
      </div>
      {/* This code uses the input to filter through */}
      {state.query === "" ? (
        CharData.map((val) => {
          return (
            <List id={val.id} img={val.img} name={val.name} about={val.about} />
          );
        })
      ) : !state.lists.length ? (
        <h1 className="not-found-char">No character found</h1>
      ) : (
        state.lists.map((char) => {
          return (
            <List
              id={char.id}
              img={char.img}
              name={char.name}
              about={char.about}
            />
          );
        })
      )}
    </div>
  );
}

export default Characters;
