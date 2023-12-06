import React from "react";
import Navbar from "../components/Navbar";
import AllDocument from "../components/AllDocument";

const DocmanagePage = () => {
  return (
    <>
      <Navbar />
      <main className="max-container">
        <AllDocument />
      </main>
    </>
  );
};

export default DocmanagePage;
