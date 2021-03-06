import React from "react";
import "./portfolio.css";
import IMG1 from "../assets/portfolio1.jpg";
import IMG2 from "../assets/portfolio2.jpg";
import IMG3 from "../assets/portfolio3.jpg";
import IMG4 from "../assets/portfolio4.jpg";
import IMG5 from "../assets/portfolio5.jpg";
import IMG6 from "../assets/portfolio6.png";
import { Outlet, Link } from "react-router-dom";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Ordering MatMeals App",
    github: "https://github.com/MatheusDevios/Food-App",
    demo: "https://order-food-react-app.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Netflix Clone",
    github: "https://github.com/MatheusDevios/netflix-clone",
    demo: "https://netflix-clonereactapp.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Pokedex",
    github: "https://github.com/MatheusDevios/Pokemon-API",
    demo: "https://pokedex-app-s.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Weather Forecast",
    github: "https://github.com/MatheusDevios/New-React-Weather-App",
    demo: "https://weatherdev-app.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Take Notes",
    github: "https://github.com/MatheusDevios/Notes-Application",
    demo: "https://take-notes-reactapp.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Login/Sign Up Authentication and Security with Node",
    github: "https://github.com/MatheusDevios/Authentication-Security",
    demo: "Authentication-and-Security",
  },
];

const Portfolio = () => {
  return (
    <>
      <p></p>
      <section data-aos="zoom-in-up">
        <h5>My recent Work</h5>
        <h2>Portifolio</h2>

        <div className="container portfolioContainer">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolioItem">
                <div className="portfolioItemImage">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolioItem-cta">
                  <a href={github} className="btn" target="blank">
                    GitHub Project
                  </a>
                  {id <= 5 ? (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <Link to={demo} className="btn btn-primary">
                      Live Demo
                    </Link>
                  )}
                </div>
                <Outlet />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
