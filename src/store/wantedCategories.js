import categoryAllImg from "../assets/category-all.jpg";
import categoryFilmImg from "../assets/category-film.jpg";
import categoryFoodImg from "../assets/category-food.jpg";
import categoryGeneralImg from "../assets/category-general.jpg";
import categoryScienceImg from "../assets/category-science.jpg";
import categorySportImg from "../assets/category-sport.jpg";
import categoryGeographyImg from "../assets/category-geography.jpg";

const wantedCategories = [
  {
    id: "food_and_drink,general_knowledge,film_and_tv,geography,science,sport_and_leisure",
    category: "All",
    img: categoryAllImg,
    style: "all",
  },
  {
    id: "film_and_tv",
    category: "Film & TV",
    img: categoryFilmImg,
    style: "film",
  },
  {
    id: "food_and_drink",
    category: "Food & Drink",
    img: categoryFoodImg,
    style: "food",
  },
  {
    id: "general_knowledge",
    category: "General Knowledge",
    img: categoryGeneralImg,
    style: "general",
  },
  {
    id: "geography",
    category: "Geography",
    img: categoryGeographyImg,
    style: "geography",
  },
  {
    id: "science",
    category: "Science",
    img: categoryScienceImg,
    style: "science",
  },
  {
    id: "sport_and_leisure",
    category: "Sport & Leisure",
    img: categorySportImg,
    style: "sport",
  },
];

export default wantedCategories;
