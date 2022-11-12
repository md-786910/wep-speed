import React from "react";
import "./footer.css";
function Footer() {
  return (
    <section className="footerContainer">
      <div className="footerWrapper">
        <div className="wrapper">
          <div className="footerBox">
            <div className="leftFooter">
              <div className="footerTitle">
                <h2>
                  <span>WEBSPEED.SK</span>
                  je súčasťou digitálnej agentúry
                  <span id="metate">MATATE</span>
                </h2>
              </div>
              <div className="footerDesc">
                <p>
                  MATATE je agentúra, ktorá dlhodobo pôsobí v oblasti tvorby
                  webových stránok na mieru a v online marketingu.
                </p>
              </div>
              <div className="footerBtn">
                <button>Prejsť na web www.matate.sk </button>
              </div>
            </div>

            <div className="rightFooter"></div>
          </div>

          <div className="footerLogo">
            <img src="./image/flogo.png" alt="" />
          </div>

          <div className="footerPowered">
            <p>
              Pracujeme pod hlavičkou agentúry <span>MATATE</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
