import React from "react";
import { useLocation } from "react-router-dom";

const Game = () => {
  const location = useLocation();
  console.log(location);
  return <p>{location.state.categoryName}</p>;
};

export default Game;
