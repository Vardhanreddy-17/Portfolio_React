import React from 'react'
import "./HeroSection.css"
import TypedComponent from './Typed';
import dots from '../assets/dots.png';
import cube from "../assets/cube.png";
import circle from "../assets/circle.png";
import zigzag from "../assets/zigzags.png";
import plus from "../assets/plus.png";
import userimage from "../assets/userimage.jpeg"
const HeroSection = () => {
  return (
    <div className='heroSection wrapper'>
    <div className='fadded-text absolute'>VardhanReddy</div>
    <div className='heroSection-left'>
        <div className='heroSection-heading'>Hi VardhanReddy!</div>
        <div className='heroSection-sub-heading '>
            I am <span class="role"><TypedComponent></TypedComponent></span>
        </div>
        <div className='heroSection-description'>
        I’m currently pursuing my B.Tech degree at KL University, with a passion for creating dynamic and user-friendly websites. Let's bring your vision to life!
        </div>
        <a href='https://drive.google.com/file/d/1qjc9R76mj3qVGpuBSWAWViiHzFRciR_H/view'  target='_new'><div className='btn-pink'>Hire me</div></a>
    </div>
    <div className='HeroSection-right'>
        <div className='absolute icons icon-dots'>
            <img src={dots} alt="icons" loading='lazy'/>
        </div>
        <div className='absolute icons icon-cube'>
            <img src={cube} alt="icons" loading='lazy'/>
        </div>
        <div className='absolute icons icon-circle'>
            <img src={circle} alt="icons" loading='lazy'/>
        </div>
        <div className='absolute icons icon-zigzag'>
            <img src={zigzag} alt="icons" loading='lazy'/>
        </div>
        <div className='absolute icons icon-plus'>
            <img src={plus} alt="icons" loading='lazy'/>
        </div>
        <div className='user-image'>
        <img src={userimage} alt="userimage" loading='lazy'/>
        </div>
    </div>
    </div>
  )
}

export default HeroSection;
