import React from "react";
import "./portfolio.css";
import IMG0 from "../assets/portfolio0.png";
import IMG1 from "../assets/portfolio1.jpg";
import IMG2 from "../assets/portfolio2.jpg";
import IMG3 from "../assets/portfolio3.jpg";
import IMG4 from "../assets/portfolio4.jpg";
import IMG5 from "../assets/portfolio5.jpg";
import IMG6 from "../assets/portfolio6.png";
import IMG7 from "../assets/portfolio7.png";
import { Outlet } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const data = [
  {
    id: 0,
    image: IMG6,
    title: "Xavier Barber",
    // github: "https://github.com/MatheusDevios/Food-App",
    demo: "https://www.xavier-barber.com/",
  },
  {
    id: 1,
    image: IMG0,
    title: "Ger's Garage",
    github: "https://github.com/MatheusDevios/Ger-s-Garage",
    demo: "https://gers-garage.netlify.app/",
  },
  {
    id: 2,
    image: IMG1,
    title: "Ordering MatMeals App",
    github: "https://github.com/MatheusDevios/Food-Order-App",
    demo: "https://order-food-react-app.netlify.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "ChatsApp",
    github: "https://github.com/MatheusDevios/ChatsApp",
    demo: "https://chats-app-matheusdevios.vercel.app/",
  },
  {
    id: 3,
    image: IMG2,
    title: "Netflix Clone",
    github: "https://github.com/MatheusDevios/netflix-clone",
    demo: "https://netflix-clonereactapp.netlify.app/",
  },
  {
    id: 4,
    image: IMG3,
    title: "Pokedex",
    github: "https://github.com/MatheusDevios/Pokemon-API",
    demo: "https://pokedex-app-s.netlify.app/",
  },
  {
    id: 6,
    image: IMG5,
    title: "Take Notes",
    github: "https://github.com/MatheusDevios/Notes-MERN-APP",
    demo: "https://take-notes-reactapp.netlify.app/",
  },
  {
    id: 5,
    image: IMG4,
    title: "Weather Forecast",
    github: "https://github.com/MatheusDevios/New-React-Weather-App",
    demo: "https://weatherdev-app.netlify.app/",
  },
];

let settings = {
  dots: true,
  infinite: true,
  swipeToSlide: true,
  speed: 1400,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: `slick-dots dotsPortfolio`,
};

const Portfolio = () => {
  return (
    <>
      <p></p>
      <section data-aos="zoom-in-up">
        <h5>My recent Work</h5>
        <h2>Portifolio</h2>

        <div className="container portfolioContainer">
          <Slider {...settings}>
            {data.map(({ id, image, title, github, demo }) => {
              return (
                <div key={id} className="portfolioItem">
                  <div className="portfolioItemImage">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolioItem-cta">
                    {id >= 1 ? (
                      <a href={github} className="btn" target="blank">
                        GitHub Project
                      </a>
                    ) : (
                      ""
                    )}
                    {id === 0 ? (
                      <a href={demo} className="btn btn-primary" target="blank">
                        Xavier-Barber Live
                      </a>
                    ) : (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                  <Outlet />
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
