import React from "react";
import "../../styles/header.css";
import LOGO from "../../SVGImages/logoDark.svg";
// https://css-tricks.com/css-link-hover-effects/#aa-the-rainbow-underline-link-hover-effect
export default function Header() {
  return (
    <div className="header">
      <section className="container">
        <img src={LOGO} className="logo" />
        <ul className="header-nav">
          <li className="nav-element">Home</li>
          <li className="nav-element">About</li>
          <li className="nav-element">
            Portfolio
            <ul className="sub-nav">
              <li className="nav-element">Albums</li>
              <li className="nav-element">Gallery</li>
              <li className="nav-element">
                Category
                <ul className="sub-nav">
                  <li className="nav-element">Weddings</li>
                  <li className="nav-element">Flims</li>
                  <li className="nav-element">Sports</li>
                  <li className="nav-element">Outdoor</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="nav-element">Contact</li>
          <li className="primary-cta">Button</li>
        </ul>
      </section>
    </div>
  );
}
