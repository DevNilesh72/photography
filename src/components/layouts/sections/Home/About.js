import React from "react";

export default function About() {
  return (
    <div className="about-me">
      <div className="column-left"></div>
      <div className="column-right">
        <h1 className="primary-heading">About</h1>
        <h2 className="secondary-heading">Who I am and what I do</h2>
        <hr className="divider" />
        <p className="content">
          Hi, my name is <strong>Martin Vegas</strong>. I am an artist and
          photographer. Nemo enim ipsam voluptatem quia voluptas aspernatur aut
          odit aut fugit. Vivamus at nibh tincidunt, bibendum ligula id. Nemo
          enim ipsam voluptatem quiatotam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem.
        </p>
        <div className="btn-container">
          <button className="primary-cta">Read More</button>
          <button className="secondary-cta">Hire Me!</button>
        </div>
      </div>
    </div>
  );
}
