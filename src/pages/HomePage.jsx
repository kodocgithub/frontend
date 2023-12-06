import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="max-container">
        <Hero />
      </main>
    </>
  );
};

export default HomePage;
