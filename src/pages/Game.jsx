import React from "react";
import Navbar from "../components/layout/Navbar";
import MainContainer from "../components/game/MainContainer";
import { useLocation } from "react-router-dom";

const Game = () => {
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
