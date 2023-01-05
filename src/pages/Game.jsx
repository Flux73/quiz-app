import React from "react";
import Navbar from "../components/layout/Navbar";
import MainContainer from "../components/game/MainContainer";
import { Link, useLocation } from "react-router-dom";

const Game = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Navbar />
      <main>
        <MainContainer />
      </main>
    </>
  );
};

export default Game;
