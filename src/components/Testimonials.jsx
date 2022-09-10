import React from "react";
import "./testimonials.css";
import AVATAR1 from "../assets/avatar1.png";
// import AVATAR2 from "../assets/avatar2.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import { Email } from "@mui/icons-material";

const data = [
  {
    image: AVATAR1,
    name: "Junio Xavier",
    review:
      "It really improved my workflow, as I don't have to worry about scheduling my clients, and I reaceive every appointment by Email and also on the app which gives me my agenda organized the way I please, It even helped me to get more clients. Every day one of my clients praises me about my Website. I'm really happy about it.",
  },
  // {
  //   image: AVATAR2,
  //   name: 'Debora Garcia',
  //   review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore possimus reiciendis, voluptatibus ad impedit delectus odio deleniti error aspernatur tempora reprehenderit omnis dolor voluptate earum accusamus vitae eaque. Exercitationem, atque.'
  // },
];

const Testimonials = () => {
  return (
    <>
      <p></p>
      <section data-aos="zoom-in-up">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper
          className="container testimonialsContainer"
          // Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ image, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="clientsAvatar">
                  <img src={image} alt={name} />
                </div>
                <h5 className="clientName">{name}</h5>
                <small className="clientReview">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
