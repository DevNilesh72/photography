import React from 'react'
import "../../styles/header.css";
import LOGO from "../../SVGImages/logoDark.svg";
// https://css-tricks.com/css-link-hover-effects/#aa-the-rainbow-underline-link-hover-effect
export default function Header() {
  return (
    <div className='header'>
        <div>
            <img src={LOGO} className="logo"/>
        </div>
        <div>
          <ul className='header-nav'>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
    </div>
  )
}
