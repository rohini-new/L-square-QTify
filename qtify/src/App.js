import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Songs from "./components/Songs/Songs";
import "./App.css";

function App() {
  return (
    <>
      <Navbar searchData={[]} />
      <Hero />
      <Section title="Top Albums" endpoint="/albums/top" />
      <Section title="New Albums" endpoint="/albums/new" />
      <Songs />
    </>
  );
}

export default App;
