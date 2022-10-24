import React from "react";
import "./content.css";

function Content() {
  return (
    <section className="contentContainer">
      <div className="contentRound"></div>

      <div className="contentWrapper">
        <div className="wrapper">
          <div className="content">
            <div className="contentTitle">
              <h1>
                Je váš web dostatočne
                <span className="spanTitle">rýchly?</span>
              </h1>
              <p>
                Rýchlosť webu ovplyvňuje pozície v Google,
                <br />
                konverzný pomer a predaje.
              </p>
            </div>
            <div className="contentSection">
              <div className="contentImage">
                <img src="/image/rocket.png" alt="rocket" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
