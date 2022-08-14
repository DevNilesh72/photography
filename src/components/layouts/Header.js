import React from 'react'
import "../../styles/header.css";
import LOGO from "../../SVGImages/logoDark.svg";

export default function Header() {
  return (
    <div className='header'>
        <div>
            <img src={LOGO} className="logo"/>
        </div>
        <div>
            options
        </div>
    </div>
  )
}
