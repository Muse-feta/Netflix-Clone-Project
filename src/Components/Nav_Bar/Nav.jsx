import React, { useEffect, useState } from 'react'
import './Nav.scss'
import Netflix_icon from './assets/net_icon.png'

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false)
        });
       return () => {
        window.removeEventListener("scroll",useEffect);
       };
    },[]);


  return (
    <div className={`nav ${show && 'nav_black'}`} >
      <img className="net_icon" src={Netflix_icon} alt="Netflix-icon" />

      <img
        className="net_avater"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix-Avater"
      />
    </div>
  );
}

export default Nav