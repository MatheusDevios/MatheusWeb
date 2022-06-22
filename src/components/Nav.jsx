import React from 'react'
import './nav.css'
import { AiTwotoneHome } from 'react-icons/ai'
import { FaUserSecret } from 'react-icons/fa'
import { GiBookCover } from 'react-icons/gi'
import { RiServiceFill } from 'react-icons/ri'
import { RiMessage2Fill } from 'react-icons/ri'
import { RiReactjsLine } from 'react-icons/ri'
import { HiSpeakerphone } from 'react-icons/hi'
// import { useState } from 'react'

const Nav = () => {
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
      } else {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
      }
    })
  }
  window.addEventListener('scroll', scrollActive)


  return (
    <nav className='nav__menu'>
      <a href="#home" ><AiTwotoneHome /></a>
      <a href="#about" ><FaUserSecret /></a>
      <a href="#experience" ><GiBookCover /></a>
      <a href="#services" ><RiServiceFill /></a>
      <a href="#portfolio" ><RiReactjsLine /></a>
      <a href="#testimonials" ><HiSpeakerphone /></a>
      <a href="#contact" ><RiMessage2Fill /></a>
    </nav>
  )
}

export default Nav