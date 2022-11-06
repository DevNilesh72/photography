import React from "react";
import About from "./About";
import Banner from "./Banner";

export default function Home() {
  return (
    <div className="main-content">
      <Banner />
      <About />
    </div>
  );
}
