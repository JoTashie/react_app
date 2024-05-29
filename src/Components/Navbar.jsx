import React from 'react'
import Logo from '../assets/logo.png'
import { a } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='left'>
        <img src={Logo}></img>
        </div>
        <div className='right'>
            <a to ="/">Home</a>
            <a to ="/about">About</a>
            <a to ="/listings">Listings</a>
            <a to ="/contact">Contact</a>
        </div>
    </div>
  )
}

export default Navbar
