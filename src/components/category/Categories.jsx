import React from "react";
import { useSelector } from "react-redux";
import Category from "./Category";

import styles from "./categories.module.css";
import Section from "../layout/Section";

const Categories = () => {
  const { wantedCategories } = useSelector((state) => state.appSlice);

  return (
    <Section>
      <div className={styles.categories__container}>
        {wantedCategories.map((category, i) => (
          <Category
            className={styles[`category-${category.style}`]}
            categoryName={category.category}
            key={i}
          />
        ))}
      </div>
    </Section>
  );
};

export default Categories;
