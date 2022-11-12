import React from "react";
import "./speedTest.css";

function SpeedTest() {
  return (
    <section>
      <div className="speedContainer">
        <div className="wrapper speedWrapper">
          <div className="speedTitle">
            <h1>Test je hotový</h1>
          </div>
          <div className="speedBooster">
            <img src="/image/rocketUp.png" alt="rocket" />
          </div>
          <div className="speedQuad">
            <div className="speedCirc">
              <p>100</p>
              <p>%</p>
            </div>
            <div className="speedContext">
              <p>Lighthouse skóre</p>
              <p className="speedPol">
                (LPS): Rýchly &nbsp;
                <span>
                  <img src="./image/pol.png" alt="" />
                </span>
              </p>
            </div>
          </div>
          <div className="speedTestBtn">
            <button>Přejít na meření stránky</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpeedTest;
