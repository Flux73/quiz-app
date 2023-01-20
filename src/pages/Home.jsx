import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import Category from "../components/category/Categories";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initialStateFn } from "../store/app-data-slice";

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(initialStateFn());
    }
  }, [location.pathname, dispatch]);
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
