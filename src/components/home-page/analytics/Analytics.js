import React from "react";
import "./analytics.css";
function Analytics() {
  const data = [
    {
      title: "Lepšie konverzie",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat, erat sed elementum egestas, eros lorem luctus eros...",
    },
    {
      title: "Zvýšenie ziskov",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat, erat sed elementum egestas, eros lorem luctus eros...",
    },
    {
      title: "Vyššie pozície v Google",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat, erat sed elementum egestas, eros lorem luctus eros...",
    },
    {
      title: "Spokojnejší návštevníci",
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
                <span>rýchlosť svojho webu</span>
              </h2>
            </div>
            <div className="bInputBox">
              <label htmlFor="lab">Adresa vašej web stránky</label>
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
              <h2>
                <span>Rýchly web </span>
                <br />
                je dnes už
                <br /> nevyhnutnosť.
              </h2>
            </div>

            <div className="asecBox">
              {data &&
                data.map((item, index) => {
                  return (
                    <div className="asecCard" key={index}>
                      <div className="asecImage">
                        <img src="/image/bar-chart.png" alt="" />
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

export default Analytics;
