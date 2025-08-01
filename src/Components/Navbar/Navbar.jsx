import React, { useState } from "react";
import { NavLink ,Link } from "react-router-dom";
export default function Navbar() {

  const [isScroll , setIsScroll] = useState(false)
  function handleScroll(){
    console.log('scroll');
    
    if (window.scrollY > 40){
      setIsScroll(true)
    }else{
      setIsScroll(false)
    }
  }
  window.addEventListener('scroll',handleScroll )


  



  return <>
      <nav className={`${isScroll ? 'py-1':'py-4'} navbar navbar-expand-lg position-fixed start-0 end-0 top-0 z-3 `}>
        <div className="container">
          <Link to={''} className="fs-2"> Start Framework </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav gap-5 ms-auto">
              <li className="nav-item">
                <NavLink to={'about'} aria-current="page">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'portfolio'} aria-current="page">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'contact'} aria-current="page">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>






      
    </>
}
