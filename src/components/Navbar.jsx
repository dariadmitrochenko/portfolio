import React from 'react';
import { useState } from 'react';
import { navLinks } from '../constants';


const Navbar = () => {
  return (
    <nav w-full flex py-6 justify-between items-center navbar>
    <ul className="list-none sm:flex hidden justify-end items-center flex-1" >
      {navLinks.map((nav, index) => (
        <li key={nav.id} className={`font-poppins`}><a href={`#$nav.id}`}>{nav.text}</a></li>
      ))}
    </ul>

    </nav>
  )
}

export default Navbar
