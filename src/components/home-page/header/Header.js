import React from "react";
import "./header.css";
function Header() {
  return (
    <>
      <section className="headerContainer">
        <div className="mainheader">
          <div className="wrapper">
            <nav className="nav">
              <div className="logo">
                <div>
                  <img src="/logo.jpeg" alt="" />
                </div>
                <div className="logoTitle">
                  <p>webpeed</p>
                </div>
              </div>
              <div className="navItem">
                <li className="navLink">Kto sme </li>
                <li className="navLink">Služby</li>
                <li className="navLink">Kontakty</li>
                <li className="navLink">
                  <div className="navBtn">
                    <button className="navBtn">
                      Nezáväzná ponuka optimalizácie
                    </button>
                  </div>
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
