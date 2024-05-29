import React from 'react'
import Logo from '../assets/logo.png'
import { Link, a } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='left'>
        <img src={Logo}></img>
        </div>
        <div className='right'>
            <Link to ="/">Home</Link>
            <Link to ="/about">About</Link>
            <Link to ="/listings">Listings</Link>
            <Link to ="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
