import React from "react";
import "./analytics.css";
import img1 from "../../../assets/d1.png";
import img2 from "../../../assets/d2.png";
import img3 from "../../../assets/d3.png";
import img4 from "../../../assets/d4.png";

function Analytics() {
  const data = [
    {
      title: "Lepšie konverzie",
      image: img1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat, erat sed elementum egestas, eros lorem luctus eros...",
    },
    {
      title: "Zvýšenie ziskov",
      image: img2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat, erat sed elementum egestas, eros lorem luctus eros...",
    },
    {
      title: "Vyššie pozície v Google",
      image: img3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat, erat sed elementum egestas, eros lorem luctus eros...",
    },
    {
      title: "Spokojnejší návštevníci",
      image: img4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat, erat sed elementum egestas, eros lorem luctus eros...",
    },
  ];

  return (
    <section className="analyticsContaiener">
      <div className="analyticsWrapper">
        <div className="wrapper">
          <div className="aBox">
            <div className="bTitle">
              <h2>
                Otestujte si aktuálnu
                <span className="spanTag">
                  rýchlosť <br /> svojho webu
                </span>
              </h2>
            </div>
            <div className="bInputBox">
              <label>Adresa vašej web stránky</label>
              <input
                type="text"
                placeholder="Napríklad www.gooogle.sk"
                id="inputInput"
              />
              <button>&#x1F680; Spustiť test</button>
            </div>
          </div>

          <div className="aSecondDiv">
            <div className="asecTitle">
              <span className="spanTag">Rýchly web </span>
              <h2>je dnes už nevyhnutnosť.</h2>
            </div>

            <div className="asecBox">
              {data &&
                data.map((item, index) => {
                  return (
                    <div className="asecCard" key={index}>
                      <div className="asecImage">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="acardTitle">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// /image/bar-chart.png
export default Analytics;
