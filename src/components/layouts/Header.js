import React from 'react'
import "../../styles/header.css";
import LOGO from "../../SVGImages/logoDark.svg";
// https://css-tricks.com/css-link-hover-effects/#aa-the-rainbow-underline-link-hover-effect
export default function Header() {
  return (
    <div className='header'>
          <img src={LOGO} className="logo"/>
          <ul className='header-nav'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li className='header-button'>Button</li>
          </ul>
    </div>
  )
}
