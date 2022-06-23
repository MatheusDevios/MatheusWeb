import React from 'react'
import './portfolio.css'
import IMG1 from '../assets/portfolio1.jpg'
import IMG2 from '../assets/portfolio2.jpg'
import IMG3 from '../assets/portfolio3.jpg'
import IMG4 from '../assets/portfolio4.jpg'
import IMG5 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.jpg'
import { Outlet, Link } from "react-router-dom";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/MatheusDevios',
    demo: 'project1'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Chart templetes & infographics in Figma',
    github: 'https://github.com/MatheusDevios',
    demo: 'project2'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/MatheusDevios',
    demo: 'project3'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com/MatheusDevios',
    demo: 'project4'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/MatheusDevios',
    demo: '/project5'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/MatheusDevios',
    demo: 'project6'
  }
]

const Portfolio = () => {
  return (
    <>
      <p></p>
      <section data-aos="zoom-in-up">
        <h5>My recent Work</h5>
        <h2>Portifolio</h2>

        <div className="container portfolioContainer">
          {
            data.map(({ id, image, title, github, demo }) => {
              return (
                <article key={id} className='portfolioItem'>
                  <div className="portfolioItemImage">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolioItem-cta">
                    <a href={github} className='btn' target='blank'>GitHub Project</a>
                    <Link to={demo} className='btn btn-primary' >Live Demo</Link>
                  </div>
                  <Outlet />
                </article>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Portfolio