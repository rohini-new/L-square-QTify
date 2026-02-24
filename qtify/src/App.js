import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  return (
    <>
      <Navbar searchData={[]} />
      <Hero />
    </>
  );
}

export default App;
