//import { useEffect, useRef } from 'react'
//import gsap from 'gsap-trial'
//import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/D.png'
import './index.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript,  Developer"
      />
    </div>
    
  )
}

export default Logo