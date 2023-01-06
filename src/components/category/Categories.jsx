import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initialStateFn } from "../../store/app-data-slice";
import Category from "./Category";
import categoryAllImg from "../../assets/category-all.jpg";
import categoryFilmImg from "../../assets/category-film.jpg";
import categoryFoodImg from "../../assets/category-food.jpg";
import categoryGeneralImg from "../../assets/category-general.jpg";
import categoryScienceImg from "../../assets/category-science.jpg";
import categorySportImg from "../../assets/category-sport.jpg";
import categoryGeographyImg from "../../assets/category-geography.jpg";

import styles from "./categories.module.css";
import Section from "../layout/Section";

const categories = [
  { category: "All", img: categoryAllImg, style: "all" },
  { category: "Film & TV", img: categoryFilmImg, style: "film" },
  { category: "Food & Drink", img: categoryFoodImg, style: "food" },
  { category: "General Knowledge", img: categoryGeneralImg, style: "general" },
  { category: "Geography", img: categoryGeographyImg, style: "geography" },
  { category: "Science", img: categoryScienceImg, style: "science" },
  { category: "Sport & Leisure", img: categorySportImg, style: "sport" },
];

const Categories = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(initialStateFn());
    }
  }, [location.pathname, dispatch]);

  return (
    <Section>
      <div className={styles.categories__container}>
        {categories.map((category, i) => (
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
