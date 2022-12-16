//import { useEffect, useRef } from 'react'
//import gsap from 'gsap-trial'
//import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/coop.svg'
import LogoS2 from '../../../assets/images/dev.svg'
import './index.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      {/* <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript,  Developer"
      /> */}
      <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript,  Developer"
      />
      <img
        className="solid-logo2"
        src={LogoS2}
        alt="JavaScript,  Developer"
      />
    </div>
    
  )
}

export default Logo