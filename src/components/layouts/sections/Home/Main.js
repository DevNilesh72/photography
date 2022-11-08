import React from "react";
import About from "./About";
import Banner from "./Banner";
import Gallery from "./Gallery";

export default function Home() {
  return (
    <div className="main-content">
      <Banner />
      <About />
      <Gallery />
    </div>
  );
}
