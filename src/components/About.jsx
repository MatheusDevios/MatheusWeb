import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { GiFullFolder } from "react-icons/gi";

const about = () => {
  return (
    <>
      <p></p>
      <section data-aos="zoom-in-up">
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className="container aboutContainer">
          <div className="aboutMe">
            <div className="aboutMeImage">
              <img
                src={
                  "https://res.cloudinary.com/dotuxkpjj/image/upload/v1656600722/me-about_nsz0rv.jpg"
                }
                alt="me"
              />
            </div>
          </div>
          <div className="aboutContent">
            <div className="aboutCards">
              <article className="aboutCard">
                <FaAward className="aboutIcon" />
                <h5>Experience</h5>
                <small>Junior</small>
              </article>

              <article className="aboutCard hidden">
                <ImUsers className="aboutIcon" />
                <h5>Clients</h5>
                <small>3 Clients</small>
              </article>

              <article className="aboutCard">
                <GiFullFolder className="aboutIcon" />
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </div>
            <p>
              Hello! My name is Matheus, I'm brazilian, based in Cork and I'm a
              Junior Software Engineer passionate, energetic, creative and
              versatile problem solver eager to learn new technologies and take
              on challenges to revolutionise the industry. I come from an
              Electrical Engineering background, with great experience in
              Software and Hardware Support. I have just graduated with a
              Science in Computing at CCT College Dublin - Ireland. I am sure
              there are many transferable skills I developed through my career.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
