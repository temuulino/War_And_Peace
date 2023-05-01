import React from "react";
import CharData from "./Data/CharData";
import List from "./List";
import { useSearchParams } from "react-router-dom";

function MoreChar(props) {
  const [searchparams] = useSearchParams();
  const id = searchparams.get("id");
  // console.log(searchparams.get("id"));

  const result = CharData.filter((char) => {
    if (id === char.id) return char;
  });
  console.log(result);

  // return (
  //   <div className="morechar-container">
  //     <div className="charalias-container">
  //       <img src={result} alt="character-pic" />
  //       {/* <h3>{charName}</h3>
  //       <h3>{result.map((val) => val.name)}</h3> */}
  //       <p>Age:</p>
  //     </div>
  //     <div className="charabout-container">{/* <p>{charMore}</p> */}</div>
  //   </div>
  // );

  return result.map((val) => {
    return (
      <div className="morechar-container">
        <div className="charalias-container">
          <img src={val.img} alt="character-pic" />
          <h3>{val.name}</h3>
          <p>Age:</p>
        </div>
        <div className="charabout-container">
          <p>{val.more}</p>
        </div>
      </div>
    );
  });
}

export default MoreChar;
