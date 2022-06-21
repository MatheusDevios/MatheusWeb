import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="headerSocials">
        <a href="https://www.linkedin.com/in/matheus-diniz-857070146/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/MatheusDevios" target="blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials