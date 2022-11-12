import React from "react";
import "./contact.css";
function Contact() {
  return (
    <>
      <section className="contactContainer">
        <div className="contactWrapper">
          <div className="wrapper">
            <div className="contactBox">
              <div className="contactLeft">
                <div className="contactTitle">
                  <h1>Kontakty</h1>

                  <p>
                    Rýchlosť webu ovplyvňuje pozície v Google, konverzný pomer a
                    predaje.
                  </p>
                </div>

                <div className="contactLeftBox1">
                  <h2>Kontakt</h2>
                  <p>info@webspeed.sk</p>
                  <p>+424 944 365 465</p>
                </div>
                <div className="contactLeftBox2">
                  <h2>Kontakt</h2>
                  <p>Matate</p>
                  <p> IČO:654654</p>
                  <p> DIČ:654654</p>
                </div>
              </div>

              <div className="contactRight">
                <div className="rightBox">
                  <h2>
                    Kontaktný <span>formulár</span>
                  </h2>
                  <input
                    type="text"
                    name="text"
                    placeholder="Meno"
                    className="formText"
                  />
                  <input
                    type="text"
                    name="text"
                    placeholder="E-mail"
                    className="formText"
                  />
                  <input
                    type="text"
                    name="text"
                    placeholder="Poznámka"
                    className="formText"
                  />
                  <div className="checkBoxCon">
                    <input type="checkbox" name="check" className="checkBox" />
                    <p>
                      Súhlasím so <span>spracovaním osobných údajov</span>
                    </p>
                  </div>

                  <div className="btnBox">
                    <button>Odoslať správu</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactBackPage"></div>
      </section>
    </>
  );
}

export default Contact;
