// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import App_1 from "./App_1";
import App_2 from "./App_2";
import App_3 from "./App_3";

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/App_1" element={<App_1 />} />
          <Route path="/App_2" element={<App_2 />} />
          <Route path="/App_3" element={<App_3 />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
