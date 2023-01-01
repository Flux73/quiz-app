import React from "react";
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import Category from "../components/category/Categories";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Category />
      </main>
    </>
  );
};

export default Home;
