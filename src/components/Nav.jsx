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
  // const [activeNav, setActiveNav] = useState('#home')
  const sections = document.querySelectorAll('section[id]')

  // function activeLink() {
  //     sections.forEach((item)=>{
  //         item.classList.remove('active-link');
  //         this.classList.add('active-link')
  //     })
  // }
  // sections.forEach((item) =>{
  //     item.addEventListener('click', activeLink)
  // })
  
  console.log(sections);

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
    // <nav className='nav__menu'>
    //   <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiTwotoneHome /></a>
    //   <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserSecret /></a>
    //   <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiBookCover /></a>
    //   <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
    //   <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiReactjsLine /></a>
    //   {/* <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><HiSpeakerphone /></a> */}
    //   <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage2Fill /></a>
    // </nav>
  )
}

export default Nav