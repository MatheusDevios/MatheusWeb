import React, { useRef } from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { RiWhatsappLine } from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_plgpslw', 'template_ls7jf6b', form.current, 'p3wTQ78Pz8N5cqz81')

    e.target.reset()
  };

  return (
    <>
      <p></p>
      <section data-aos="zoom-in-up">
        <h5>Contact Me</h5>
        <h2>Get In Touch</h2>

        <div className="container contactContainer">
          <div className="contactOptions">
            <article className="contactOption">
              <HiOutlineMail className='contactOptionIcon' />
              <h4>Email</h4>
              <h5>matheusdevios@gmail.com</h5>
              <a href="mailto:matheusdinizdev@gmail.com" target='blank'>Send a message</a>
            </article>
            <article className="contactOption">
              <RiMessengerLine className='contactOptionIcon' />
              <h4>Messenger</h4>
              <h5>Matheus Diniz</h5>
              <a href="https://m.me/MatheusCostaDiniz" target='blank'>Send a message</a>
            </article>
            <article className="contactOption">
              <RiWhatsappLine className='contactOptionIcon' />
              <h4>WhatsApp</h4>
              <h5>083 412 3288</h5>
              <a href="https://wa.me/353834123288" target='blank'>Send a message</a>
            </article>
          </div>
          {/* FORM ON THE RIGHT */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <input type="text" name='subject' placeholder='Subject' required />
            <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact