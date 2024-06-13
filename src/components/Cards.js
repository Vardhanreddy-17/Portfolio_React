import React from 'react'
import html from "../assets/HTML.png"
import css from "../assets/CSS.png"
import javascript from "../assets/Javascript.svg";
import express from "../assets/Express.png";
import tailwind from "../assets/Tailwind.png";
import nodejs from "../assets/NodeJs.svg";
import mongodb from "../assets/MongoDB.svg";
import vercel from "../assets/Vercel.svg";
import "./Cards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import spring from "../assets/springboot.svg";
import mysql from "../assets/mysql.svg"
import java from "../assets/java.svg"
import aws from "../assets/aws.svg"



const Cards = () => {
  return (
    <div className='project-section wrapper' id='projects'>
    <h2 className='page-header'>Projects</h2>
    <div className='project-container'>
        <div className='project-card' id="project1">
            <div className='project-number project-number-right'>01</div>
            <div className='project-content project-content-left'>
                <div className='project-skills-container'>
                <img class="project-skill" src={html} alt="html" loading='lazy' />
                <img class="project-skill" src={css} alt="CSS" loading='lazy'/>
                <img class="project-skill" src={javascript} alt="javascript" loading='lazy'/>
                <img class="project-skill" src={express} alt="express" loading='lazy'/>
                <img class="project-skill" src={tailwind} alt="tailwind" loading='lazy'/>
                <img class="project-skill" src={nodejs} alt="nodejs" loading='lazy'/>
                <img class="project-skill" src={mongodb} alt="mongodb" loading='lazy'/>
                <img class="project-skill" src={vercel} alt="vercel" loading='lazy'/>
                </div>
                <h2 className='projectheading'>StudyNotion</h2>
                <p className='project-subheading'>A Study Notion project offers free access to educational videos, allowing users to learn various subjects and skills at no cost</p>
                <div className='btn-group'>
                <a href='https://github.com/Vardhanreddy-17/Study_Notion_Backend' target='_new'><button class="btn-pink btn-project">Read More</button></a>
                            <a href="https://github.com/Vardhanreddy-17/Study_Notion_Backend" target='_new'>
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                            </a>
                            <a href="https://my-study-notion.vercel.app/" target='_new'>
                            <FontAwesomeIcon icon={faLink} className="icon" />
                            </a>
                </div>
            </div>
        </div>
        <div class="project-card" id="project2">
                  <div class="project-number project-number-left">02</div>
                  <div class="project-content project-content-right">
                    <div class="project-skill-container">
                      <img class="project-skill" src={html} alt="html" loading='lazy'/>
                      <img class="project-skill" src={css} alt="css" loading='lazy'/>
                      <img class="project-skill" src={javascript} alt="javascript" loading='lazy'/>
                      <img class="project-skill" src={spring} alt="spring" loading='lazy'/>
                      <img class="project-skill" src={mysql} alt="mysql"loading='lazy' />
                      <img class="project-skill" src={java} alt="java" loading='lazy'/>
                      <img class="project-skill" src={aws} alt="aws" loading='lazy'/>
                    </div>
                    <h2 class="project-heading">Hotel Management System</h2>
                    <p class="project-sub-heading">
                    A Hotel Booking Website enables users to easily search, compare, and book accommodations online, ensuring a seamless reservation experience
                    </p>
                    <div class="btn-group">
                      <button class="btn-pink btn-project">Read More</button>
                            <a href="https://github.com/Vardhanreddy-17/HOTEL-MANAGEMENT-SYSTEM" target='_new'>
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                            </a>
                            <a href="" target='_new'>
                            <FontAwesomeIcon icon={faLink} className="icon" />
                            </a>
                    </div>
                  </div>
                </div>
          
                <div class="project-card" id="project3">
                  <div class="project-number project-number-right">03</div>
                  <div class="project-content project-content-left">
                    <div class="project-skill-container">
                      <img class="project-skill" src={html} alt="html" loading='lazy'/>
                      <img class="project-skill" src={css} alt="css" loading='lazy'/>
                      <img class="project-skill" src={javascript} alt="javascript" loading='lazy'/>
                      <img class="project-skill" src={vercel} alt="vercel" loading='lazy'/>
                    </div>
          
                    <h2 class="project-heading">Random Password Generator</h2>
                    <p class="project-sub-heading">
                    A Random Password Generator creates strong, unique passwords to enhance security for your online accounts and data protection.
                    </p>
                    <div class="btn-group">
                      <button class="btn-pink btn-project">Read More</button>
                      <a href="https://github.com/Vardhanreddy-17/RandomPasswordGenerator" target='_new'>
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                            </a>
                            <a href="https://main--randompasswordprovider.netlify.app/" target='_new'>
                            <FontAwesomeIcon icon={faLink} className="icon" />
                      </a>
                    </div>
                  </div>
                </div>
          
                <div class="project-card" id="project4">
                  <div class="project-number project-number-left">04</div>
                  <div class="project-content project-content-right">
                    <div class="project-skill-container">
                      <img class="project-skill" src={html} alt="html" loading='lazy'/>
                      <img class="project-skill" src={css} alt="css" loading='lazy'/>
                      <img class="project-skill" src={javascript}  alt="javascript" loading='lazy'/>
                    </div>
                    <h2 class="project-heading">Parallax Website</h2>
                    <p class="project-sub-heading">
                    A Parallax Website creates an illusion of depth and movement by making background images move at a different speed than the foreground content
                    </p>
                    <div class="btn-group">
                      <button class="btn-pink btn-project">Read More</button>
                      <a href="https://github.com/Vardhanreddy-17/Parallax" target='_new'>
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                            </a>
                            <a href="https://parallax-p20dmsec9-vardhanreddy-17s-projects.vercel.app/" target='_new'>
                            <FontAwesomeIcon icon={faLink} className="icon" />
                      </a>
                    </div>
                  </div>
                </div>
            </div>
       </div>
  )
}

export default Cards;