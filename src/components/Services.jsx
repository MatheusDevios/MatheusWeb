import React from "react";
import "./services.css";
import { FiCheckCircle } from "react-icons/fi";

const Services = () => {
  return (
    <>
      <p></p>
      <section data-aos="zoom-in-up">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container servicesContainer">
          {/* Web Development */}
          <article className="service">
            <div className="serviceHead">
              <h3>Web/Mobile Development</h3>
            </div>

            <ul className="serviceList">
              <li>
                <FiCheckCircle className="serviceListIcon" />
                <p>Responsive Design.</p>
              </li>
              <li>
                <FiCheckCircle className="serviceListIcon" />
                <p>User Interface Design.</p>
              </li>
              <li>
                <FiCheckCircle className="serviceListIcon" />
                <p>E-Commerce.</p>
              </li>
              <li>
                <FiCheckCircle className="serviceListIcon" />
                <p>Online Ordering System / Payments.</p>
              </li>
              <li>
                <FiCheckCircle className="serviceListIcon" />
                <p>Dashboard Management System.</p>
              </li>
              <li>
                <FiCheckCircle className="serviceListIcon" />
                <p>Web Business Application.</p>
              </li>
              <li>
                <FiCheckCircle className="serviceListIcon" />
                <p>Event Calendar / Booking System</p>
              </li>
            </ul>
          </article>
          {/* iOS Development */}
          {/* <article className='service'>
            <div className="serviceHead">
              <h3>iOS Development</h3>
            </div>
            <ul className="serviceList">
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Responsive Apps.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>UI/UX Experience.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Augmented Reality Apps.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Data manipulation.</p>
              </li>
              <li><FiCheckCircle className='serviceListIcon' />
                <p>Machine Learning Apps.</p>
              </li>
            </ul>
          </article> */}
          {/* Content creation */}
          {/* <article className='service' >
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
          </article> */}
        </div>
      </section>
    </>
  );
};

export default Services;
