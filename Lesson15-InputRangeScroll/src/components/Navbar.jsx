import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <NavLink to='/' >

        <li className="nav-item">
          <a className="nav-link" >

            Home
          </a>

        </li>
            
        </NavLink>
        

        <NavLink to='/shop'>

        <li className="nav-item">
          <a className="nav-link" >
            Shop
          </a>
        </li>

        </NavLink>

        
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

        
    </div>
  )
}

export default Navbar