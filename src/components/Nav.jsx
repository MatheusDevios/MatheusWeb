import React from 'react'
import './nav.css'
import { AiTwotoneHome } from 'react-icons/ai'
import { FaUserSecret } from 'react-icons/fa'
import { GiBookCover } from 'react-icons/gi'
import { RiServiceFill } from 'react-icons/ri'
import { RiMessage2Fill } from 'react-icons/ri'
import { RiReactjsLine } from 'react-icons/ri'
import { HiSpeakerphone } from 'react-icons/hi'

import { Link } from "react-scroll";

const Nav = () => {

  return (
    <nav className='nav__menu'>
      <Link activeClass="active" offset={-70} duration={500}  spy to="home"><AiTwotoneHome /></Link>
      <Link activeClass="active" offset={-70} duration={500}  spy to="about"><FaUserSecret /></Link>
      <Link activeClass="active" offset={-70} duration={500}  spy to="experience"><GiBookCover /></Link>
      <Link activeClass="active" offset={-70} duration={500}  spy to="services"><RiServiceFill /></Link>
      <Link activeClass="active" offset={-70} duration={500}  spy to="portfolio"><RiReactjsLine /></Link>
      <Link activeClass="active" offset={-70} duration={500}  spy to="testimonials"><HiSpeakerphone /></Link>
      <Link activeClass="active" offset={-70} duration={500}  spy to="contact"><RiMessage2Fill /></Link>
    </nav>
  )
}

export default Nav