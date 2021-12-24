import React, { useState } from "react";
import "./Experience.scss";

const Experience = () => {
  let [openLoyal, ToggleLoyal] = useState("none");
  let [openIqgeo, ToggleIqgeo] = useState("none");
  let [openZillow, ToggleZillow] = useState("none");

  const handleLoyalToggle = () => {
    openLoyal === "none" ? ToggleLoyal("block") : ToggleLoyal("none");
  };

  const handleIqgeoToggle = () => {
    openIqgeo === "none" ? ToggleIqgeo("block") : ToggleIqgeo("none");
  };

  const handleZillowToggle = () => {
    openZillow === "none" ? ToggleZillow("block") : ToggleZillow("none");
  };

  return (
    <main className="Experience">
      <section id="experience-container">
        {/*Loyal Health Card */}
        <button id="loyal-button" onClick={handleLoyalToggle} class="accordion">
          Loyal Health - Front End Engineer
          <i class="arrow down"></i>
        </button>
        <section
          class="panel"
          id="loyal-panel"
          style={{ display: `${openLoyal}` }}
        >
          <section>
            <p id="loyal-details">
              <u>January 2022 - Present</u>
              <br />
              Details Coming Soon...
            </p>
          </section>
        </section>

        {/*IQGeo Card */}
        <button id="iqgeo-button" onClick={handleIqgeoToggle} class="accordion">
          IQGeo - Delivery Software Engineer
          <i class="arrow down"></i>
        </button>
        <section
          class="panel"
          id="iqgeo-panel"
          style={{ display: `${openIqgeo}` }}
        >
          <section>
            <p id="iqgeo-details">
              <u>January 2020 - January 2022</u>
              <br />
              At{" "}
              <a href="https://www.iqgeo.com/" target="blank" id="iqgeo-link">
                {" "}
                IQGeo
              </a>
              , I spent my days customizing a web based geo-spatial platform for
              clients, enhancing both front and back end functionality, and
              responding to client’s software needs as they arise. My day to day
              involved the following tasks:
            </p>
            <ul id="iqgeo-list">
              <li>
                Utilize JavaScript, React, HTML5/CSS3 and other technologies to
                build new features and enhancements for clients.
              </li>
              <li>
                Collaborate with clients to create various design documents
                (LOE, SRS, & LLD).
              </li>
              <li>
                Oversee code deployments to various environments (QA, STG, &
                PROD).
              </li>
              <li>Use Linux servers to develop, test, and deploy software.</li>
              <li>
                Use FogBugz/Jira to track, troubleshoot, and resolve bugs for
                clients in a timely manner.
              </li>
              <li>
                Perform regular maintenance and troubleshooting of Linux
                servers.
              </li>
              <li>
                Implement new installs of myWorld and other IQGeo products.
              </li>
            </ul>
          </section>
        </section>

        {/*Zillow Card */}
        <button
          id="zillow-button"
          onClick={handleZillowToggle}
          class="accordion"
        >
          Zillow - Client Engagement Specialist
          <i class="arrow down"></i>
        </button>
        <section
          class="panel"
          id="zillow-panel"
          style={{ display: `${openZillow}` }}
        >
          <section>
            <p id="zillow-details">
              <u>Septempber 2015 - January 2019</u>
              <br />
              At{" "}
              <a href="https://www.zillow.com/" target="blank" id="zillow-link">
                {" "}
                Zillow
              </a>
              , I spent my days connecting consumers and real estate agents
              vis-a-vis a host of different CRM Platforms. Although this was a
              non-software role, Zillow was instrumental in driving me towards a
              career in software engineering. Also, I learned invaluable lessons
              about the importance of company culture and values. My day to day
              involved the following tasks:
              <ul>
                <li>
                  Coach real estate agents on the products, tools, and services
                  provided by Zillow Group.
                </li>
                <li>
                  Use CRM’s such as Salesforce and Big Purple Dot to manage
                  Zillow Group clients.
                </li>
                <li>
                  Provide customer service outreach to consumers seeking real
                  estate via phone, text, and email.
                </li>
                <li>
                  Top productivity and metric performer for entire tenure
                  qualifying for every max quarterly bonus.
                </li>
              </ul>
            </p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Experience;
