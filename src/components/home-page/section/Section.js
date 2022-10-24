import React from "react";
import "./section.css";
function Section() {
  return (
    <section className="sectionContainer">
      <div className="sectionWrapper">
        <div className="wrapper">
          <div className="sectionBox">
            <div className="sectionTitle">
              <h2>
                Postaráme sa o <span>rýchlosť</span> vášho webu.
              </h2>
            </div>

            <div className="sectionContent">
              <div className="sectonDesc">
                <p>
                  Vykonáme audit rýchlosti a následne zapracujeme zmeny tak, aby
                  váš web bol rýchlejší.
                </p>
              </div>
              <div className="sectionBtn">
                <button>Mám záujem o nezáväznú ponuku</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
