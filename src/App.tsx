import React from "react";
import "./scss/app.scss";
import "./App.css";
import { Header } from "./componets/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { FullBook } from "./pages/FullBook";

function App() {
  return (
    <div className="App">
      <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/book/:id" element={<FullBook />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
  );
}

export default App;
