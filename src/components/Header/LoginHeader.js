import React from 'react'
import './../../style/Header.css'
import linkedinImg from './../../assets/linkedin.png'
import HeaderOption from './HeaderOption'
import { FaCompass } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { BsFillPeopleFill, BsFillBookFill } from "react-icons/bs";


function LoginHeader() {

  return (
    <div className='header'>
        <div className='header__left'>
            <img src={linkedinImg} alt='linkedin icon' />
        </div>
        <div className='header__right'>
            <HeaderOption title='Discover' Icon={FaCompass}/>
            <HeaderOption title='People' Icon={BsFillPeopleFill}/>
            <HeaderOption title='Learning' Icon={BsFillBookFill}/>
            <HeaderOption title='Jobs' Icon={IoBag}/>
        </div>
    </div>
  )
}

export default LoginHeader
