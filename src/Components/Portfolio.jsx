/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Hack It Sapiend national level hackathon winner 🎉",
    description:
      "Designed and implemented a machine learning model to analyze patients’ daily medical data, including parameters like Blood Pressure and Heart Rate, to predict their health status.",
    url: "https://devfolio.co/projects/surakshak-e928",
  },
  {
    title: "UniEx, an initialtive for university students",
    description:
      "Conceptualized and created a Web application catering to college students, enabling them to buy and sell second-hand books and stationary items within the campus resulting in over 100+ transactions.",
    url: "https://uniex-82398.web.app/",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://jolly-pebble-01e1cfd00.3.azurestaticapps.net/",
  },
  {
    title: "Secured Globalrank 3602 in Google Kickstart 2022 (Round H) ",
    description:
      " ",
    url: "https://drive.google.com/file/d/1OuMmKNNvZ1fiYaoLhxOQ-YzVOKmcc3fA/view",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
