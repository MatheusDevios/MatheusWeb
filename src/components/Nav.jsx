import React from 'react'
import './nav.css'
import { AiTwotoneHome } from 'react-icons/ai'
import { FaUserSecret } from 'react-icons/fa'
import { GiBookCover } from 'react-icons/gi'
import { RiServiceFill } from 'react-icons/ri'
import { RiMessage2Fill } from 'react-icons/ri'
import { RiReactjsLine } from 'react-icons/ri'
// import { HiSpeakerphone } from 'react-icons/hi'
// import {Tooltip} from '@mui/material';
import Tooltip from "@material-ui/core/Tooltip";

import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className='nav__menu'>
      <Tooltip title='Home' >
        <Link activeClass="active" offset={-70} duration={500} spy to="home"><AiTwotoneHome /></Link>
      </Tooltip>
      <Tooltip title='About' >
        <Link activeClass="active" offset={-70} duration={500} spy to="about"><FaUserSecret /></Link>
      </Tooltip>
      <Tooltip title='Experience' >
        <Link activeClass="active" offset={-70} duration={500} spy to="experience"><GiBookCover /></Link>
      </Tooltip>
      <Tooltip title='Services' >
        <Link activeClass="active" offset={-70} duration={500} spy to="services"><RiServiceFill /></Link>
      </Tooltip>
      <Tooltip title='Portfolio' >
        <Link activeClass="active" offset={-70} duration={500} spy to="portfolio"><RiReactjsLine /></Link>
      </Tooltip>
      {/* PUT BACK ONCE GET CLIENTS */}
      {/* <Tooltip title='Testimonials' > */}
      {/* <Link activeClass="active" offset={-70} duration={500}  spy to="testimonials"><HiSpeakerphone /></Link> */}
      {/* </Tooltip> */}
      <Tooltip title='Contact' >
        <Link activeClass="active" offset={-70} duration={500} spy to="contact"><RiMessage2Fill /></Link>
      </Tooltip>
    </nav>
  )
}

export default Nav