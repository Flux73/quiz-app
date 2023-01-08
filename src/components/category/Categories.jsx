import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initialStateFn } from "../../store/app-data-slice";
import Category from "./Category";

import styles from "./categories.module.css";
import Section from "../layout/Section";

const Categories = () => {
  const dispatch = useDispatch();
  const { wantedCategories } = useSelector((state) => state.appSlice);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(initialStateFn());
    }
  }, [location.pathname, dispatch]);

  return (
    <Section>
      <div className={styles.categories__container}>
        {wantedCategories.map((category, i) => (
          <Category
            className={styles[`category-${category.style}`]}
            categoryName={category.category}
            categoryImg={category.img}
            key={i}
          />
        ))}
      </div>
    </Section>
  );
};

export default Categories;
