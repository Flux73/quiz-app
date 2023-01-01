import Home from "./pages/Home";
import Game from "./pages/Game";
import { Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  console.log(window.matchMedia("(prefers-color-scheme: light)").matches);
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/category/:category" element={<Game />} />
        <Route path="*" element={<div>Not Found</div>} />
        {/* <></> */}
      </Routes>
    </div>
  );
};

export default App;
