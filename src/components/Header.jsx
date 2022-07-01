import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import HeaderSocials from './HeaderSocials'
import TypeAnimation from 'react-type-animation';

const Header = () => {
  return (
    <header>
      <div className="container headerContainer">
        <h5>Hi there, my name is</h5>
        <h1>Matheus Diniz</h1>
        <TypeAnimation
          className='type-animation'
          cursor={true}
          sequence={[' Full Stack Developer.', 1500, ' iOS Developer.', 1500]}
          wrapper="h5"
          repeat={Infinity}
        />
        <CallToAction />
        <HeaderSocials />

        <div className="me">
          <img src={'https://res.cloudinary.com/dotuxkpjj/image/upload/v1656600720/me_hioxee.png'} alt="me" />
        </div>

        <a href="#contact" className='scrollDown'>Let's Talk</a>
      </div>
    </header>
  )
}

export default Header