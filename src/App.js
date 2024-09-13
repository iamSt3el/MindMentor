import React from "react";
import "./App.css";
import Intro from "./pages/Intropage";
import MainPage from "./pages/Homepage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/homepage" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
