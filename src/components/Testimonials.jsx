import React from 'react'
import './testimonials.css'
import AVATAR1 from '../assets/avatar1.jpg'
import AVATAR2 from '../assets/avatar2.jpg'
import AVATAR3 from '../assets/avatar3.jpg'
import AVATAR4 from '../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: AVATAR1,
    name: 'Debora Garcia',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore possimus reiciendis, voluptatibus ad impedit delectus odio deleniti error aspernatur tempora reprehenderit omnis dolor voluptate earum accusamus vitae eaque. Exercitationem, atque.'
  },
  {
    image: AVATAR2,
    name: 'Victor Garcia',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore possimus reiciendis, voluptatibus ad impedit delectus odio deleniti error aspernatur tempora reprehenderit omnis dolor voluptate earum accusamus vitae eaque. Exercitationem, atque.'
  },
  {
    image: AVATAR3,
    name: 'Junio Xavier',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore possimus reiciendis, voluptatibus ad impedit delectus odio deleniti error aspernatur tempora reprehenderit omnis dolor voluptate earum accusamus vitae eaque. Exercitationem, atque.'
  },
  {
    image: AVATAR4,
    name: 'Gabrielle Uhckamn',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore possimus reiciendis, voluptatibus ad impedit delectus odio deleniti error aspernatur tempora reprehenderit omnis dolor voluptate earum accusamus vitae eaque. Exercitationem, atque.'
  }
]

const Testimonials = () => {
  return (
    <>
      <p></p>
      <section data-aos="zoom-in-up">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonialsContainer"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {
            data.map(({ image, name, review }, index) => {
              return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="clientsAvatar">
                    <img src={image} alt={name} />
                  </div>
                  <h5 className='clientName'>{name}</h5>
                  <small className='clientReview'>
                    {review}
                  </small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </section>
    </>
  )
}

export default Testimonials