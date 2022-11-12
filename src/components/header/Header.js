import React, { useState } from "react";
import "./header.css";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
function Header() {
  const [closed, setClosed] = useState(true);

  const handleClick = () => {
    setClosed(!closed);
  };

  return (
    <>
      <section className="headerContainer">
        <div className="contentRound"></div>

        <div className="mainheader">
          <div className="wrapper">
            <nav className="nav">
              <div className="logo">
                <div className="logoTitle">
                  <NavLink to="/">
                    <p>webpeed</p>
                  </NavLink>
                </div>
                <div className="navLink1 menu" onClick={handleClick}>
                  {closed ? (
                    <RiMenuFill color="blue" />
                  ) : (
                    <RiCloseFill color="blue" />
                  )}
                </div>
              </div>

              <div className={closed ? "navItem hide" : "navItem preset"}>
                <li className="navLink ">
                  <NavLink to="/">Kto sme</NavLink>
                </li>
                <li className="navLink">
                  <NavLink to="/services">Služby</NavLink>
                </li>
                <li className="navLink">
                  <NavLink to="/contactus">Kontakty</NavLink>
                </li>
                <li className="navLink">
                  <NavLink to="/">
                    <div className="navBtn">
                      <button className="navBtn">
                        Nezáväzná ponuka optimalizácie
                      </button>
                    </div>
                  </NavLink>
                </li>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
