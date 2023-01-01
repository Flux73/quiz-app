import React from "react";

import styles from "./category.module.css";
import { Link } from "react-router-dom";

const Category = (props) => {
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
