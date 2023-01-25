import React from "react";

import styles from "./category.module.css";
import { Link } from "react-router-dom";

const Category = (props) => {
  // This changes the category's name so it can be used in the url: example (Film & TV => film_and_tv)
  const apiName = props.categoryName
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll(" ", "_");

  return (
    <Link
      to={`/category/${apiName}`}
      state={{ categoryName: props.categoryName, apiName }}
      className={`${styles.category} ${props.className}`}
    >
      {props.categoryName}
    </Link>
  );
};

export default Category;
