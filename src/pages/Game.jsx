import React from "react";
import Navbar from "../components/layout/Navbar";
import { useLocation } from "react-router-dom";

const Game = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Navbar />
      <p>{location.state.categoryName}</p>
    </>
  );
};

export default Game;
