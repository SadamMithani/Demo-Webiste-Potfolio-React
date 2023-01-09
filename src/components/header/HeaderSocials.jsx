import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://in.linkedin.com/sadammithani" target="_blanck"><BsLinkedin/></a>
        <a href="https://github.com/" target="_blanck"><FaGithub/></a>
        <a href="https://dribbble.com/Sadammithani" target="_blanck"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials