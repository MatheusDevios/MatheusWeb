import React from 'react'
import './services.css'
import { FiCheckCircle } from 'react-icons/fi'

const Services = () => {
  return ( 
    <>
      <p></p>
      <section data-aos="zoom-in-up">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container servicesContainer">
          <article className='service'>
            <div className="serviceHead">
              <h3>UI/UX Design</h3>
            </div>

            <ul className="serviceList">
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
            </ul>
          </article>
          {/* Web Development */}
          <article className='service'>
            <div className="serviceHead">
              <h3>Web Development</h3>
            </div>

            <ul className="serviceList">
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
            </ul>
          </article>
          {/* Content creation */}
          <article className='service'>
            <div className="serviceHead">
              <h3>Content Creation</h3>
            </div>

            <ul className="serviceList">
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}

export default Services