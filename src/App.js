import React from "react";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import FeaturePizza from "./Pages/Home/FeaturedPizza";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        
      </Routes>
    </>
  );
}

export default App;
