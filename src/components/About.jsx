import React from 'react'
import './about.css'
import ME from '../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { ImUsers } from 'react-icons/im'
import { GiFullFolder } from 'react-icons/gi'

const about = () => {
  return (
    <>
      <p ></p>
      <section data-aos="zoom-in-up">
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className="container aboutContainer">
          <div className="aboutMe">
            <div className="aboutMeImage">
              <img src={ME} alt="me" />
            </div>
          </div>
          <div className="aboutContent">
            <div className="aboutCards">
              <article className="aboutCard">
                <FaAward className='aboutIcon' />
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>

              <article className="aboutCard">
                <ImUsers className='aboutIcon' />
                <h5>Clients</h5>
                <small>3 Clients</small>
              </article>

              <article className="aboutCard">
                <GiFullFolder className='aboutIcon' />
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum accusamus, totam nisi in corrupti maxime repellat enim atque pariatur voluptate. Reiciendis totam id quae error eaque asperiores tenetur facere. Repudiandae.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default about