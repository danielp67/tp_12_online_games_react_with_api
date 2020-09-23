import React from 'react';
import {  Link } from "react-router-dom";
import ThemeTogglerButton from './ThemeToggler';



function Nav(){

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
    <Link className="navbar-brand" to="/">Online Games</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/games">Games</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown link
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="/">Action</a>
            <a className="dropdown-item" href="/">Another action</a>
            <a className="dropdown-item" href="/">Something else here</a>
          </div>
        </li>
      </ul>
      <div className="">
      <ThemeTogglerButton />
      </div>
    </div>
  </nav>

)

}


export default Nav