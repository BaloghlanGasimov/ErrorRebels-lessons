import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import langs from '../langData';

const Navbar = () => {

  const [mode,setMode] = useState(localStorage.getItem("myMode")==null?"light":localStorage.getItem("myMode"));

  useEffect(()=>{

    if(localStorage.getItem("myMode")==null){
      localStorage.setItem("myMode","light");
    }else{
      localStorage.setItem("myMode",mode);
    }

     document.body.className=mode;

  },[mode])

  const modeFunc = ()=>{
    if(mode=="light"){
      setMode("dark")
    }else{
      setMode("light")    
    }
    // mode !true
    // setMode(mode=="light"?"dark":"light");
  }



  const azData = langs.az;
  const enData = langs.en;

  const [langData,setLangData] = useState(enData);
  const [langMode,setLangMode] = useState("az");

  // console.log(langs.az.navbar.home);

  // console.log(langData);

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

            {langData.navbar.home}
          </a>

        </li>
            
        </NavLink>
        

        <NavLink to='/shop'>

        <li className="nav-item">
          <a className="nav-link" >
            {/* Shop */}
            {langData.navbar.shop}

          </a>
        </li>

        </NavLink>

        
        {/* <button className='btn btn-success'>light</button> */}

      </ul>
        <button className='btn btn-success me-3' onClick={modeFunc} >{mode=="light"?"dark":"light"} </button>
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