import React from "react";
import "./service.css";
function Service() {
  return (
    <section className="serviceContainer">
      <div className="serviceWrapper">
        <div className="wrapper">
          <div className="serviceContent">
            <div className="leftService">
              <h1>Kto sme</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum imperdiet ipsum odio, eget cursus nisi molestie a.
                Curabitur non dictum quam. Pellentesque tempus nunc a euismod
                congue. Nunc facilisis fermentum mi a pharetra. Sed tincidunt
                mauris vitae varius imperdiet. Aliquam ullamcorper, mauris non
                viverra tristique, massa justo accumsan metus, vitae aliquam
                turpis eros id ipsum. Vivamus mi ante, gravida vitae enim ac,
                porta commodo est. Duis erat velit, finibus at suscipit ac,
                ullamcorper eget massa. Morbi consectetur pulvinar consequat.
                Suspendisse sed nunc pellentesque ligula consectetur cursus id
                vel neque. Donec dapibus, sapien eget laoreet posuere, nisi ex
                porta metus, vitae viverra orci nunc bibendum nibh. Nullam eget
                felis a sem ullamcorper sagittis. Mauris aliquam tincidunt leo
                vel porta.
              </p>
            </div>
            <div className="rightService contentSection1">
              <div className="contentImage1">
                <img src="/image/rocket.png" alt="rocket" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
