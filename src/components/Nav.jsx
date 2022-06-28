import React from 'react'
import './nav.css'
import { AiTwotoneHome } from 'react-icons/ai'
import { FaUserSecret } from 'react-icons/fa'
import { GiBookCover } from 'react-icons/gi'
import { RiServiceFill } from 'react-icons/ri'
import { RiMessage2Fill } from 'react-icons/ri'
import { RiReactjsLine } from 'react-icons/ri'
// import { HiSpeakerphone } from 'react-icons/hi'
import { Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';

import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className='nav__menu'>
      <Tooltip title='Home' placement="top" >
        <IconButton>
          <Link activeClass="active" offset={-70} duration={500} spy to="home"><AiTwotoneHome /></Link>
        </IconButton>
      </Tooltip>
      <Tooltip title='About' placement="top" >
        <IconButton>
          <Link activeClass="active" offset={-70} duration={500} spy to="about"><FaUserSecret /></Link>
        </IconButton>
      </Tooltip>
      <Tooltip title='Experience' placement="top" >
        <IconButton>
          <Link activeClass="active" offset={-70} duration={500} spy to="experience"><GiBookCover /></Link>
        </IconButton>
      </Tooltip>
      <Tooltip title='Services' placement="top" >
        <IconButton>
          <Link activeClass="active" offset={-70} duration={500} spy to="services"><RiServiceFill /></Link>
        </IconButton>
      </Tooltip>
      <Tooltip title='Portfolio' placement="top" >
        <IconButton>
          <Link activeClass="active" offset={-70} duration={500} spy to="portfolio"><RiReactjsLine /></Link>
        </IconButton>
      </Tooltip>
      {/* PUT BACK ONCE GET CLIENTS */}
      {/* <Tooltip title='Testimonials' placement="top" > */}
      {/* <IconButton> */}
      {/* <Link activeClass="active" offset={-70} duration={500}  spy to="testimonials"><HiSpeakerphone /></Link> */}
      {/* </IconButton> */}
      {/* </Tooltip> */}
      <Tooltip title='Contact' placement="top" >
        <IconButton>
          <Link activeClass="active" offset={-70} duration={500} spy to="contact"><RiMessage2Fill /></Link>
        </IconButton>
      </Tooltip>
    </nav>
  )
}

export default Nav