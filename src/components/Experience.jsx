import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <>
      <p></p>
      <section data-aos="zoom-in-up">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experienceContainer">
          <div className="experienceFrontend">
            <h3>Frontend Development</h3>
            <div className="experienceContent">
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>BootStrap</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
          </div>
          {/* Backend Development */}
          <div className="experienceBackend">
            <h3>Backend Development</h3>
            <div className="experienceContent">
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>Mongo DB</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>Mongoose</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>RestAPI</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
          </div>
          {/* iOS Development */}
          <div className="experienceIosdev">
            <h3>iOS Development</h3>
            <div className="experienceContent">
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>Swift</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>CoreML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>Core Data</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>CocoaPods</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>MVC Design Pattern</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experienceDetails'>
                <BsFillPatchCheckFill className='experienceDetailsIcon' />
                <div>
                  <h4>UIKit</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience