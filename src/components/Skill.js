import React from 'react'
import "./Skill.css"
import vector from "../assets/blob vector.png"
import html from "../assets/HTML.png"
import css from '../assets/CSS.png'
import javascript from "../assets/Javascript.svg"
import react from "../assets/React.png"
import node from "../assets/NodeJs.svg"
import java from "../assets/java.svg"
import tailwind from "../assets/Tailwind.png"
import bootstrap from "../assets/Bootstrap.svg"
import mysql from "../assets/mysql.svg"
import express from "../assets/Express.png"
import git from "../assets/Git.svg"
import github from "../assets/Github.svg"
import aws from "../assets/aws.svg"
import mongodb from "../assets/MongoDB.svg"
import vercel from "../assets/Vercel.svg"
import python from "../assets/python.svg"
import c from "../assets/c.svg"
import docker from "../assets/Docker.svg"
import redhat from "../assets/redhat.png"
import spring from "../assets/springboot.svg"

const Skill = () => {
  return (
    <div id='skills' className='container skill-container wrapper'>
    <div className='skill-fade-text'></div>

    <div className='skill-container-left'>
        <h2 className='skill-heading'>
            <span className='caps'>M</span>e and
            <br/>
            MyTech Stack
        </h2>
        <div class="skill-subHeading">
                <p>
                Atla Vardhan Reddy is my name, and I am a Full Stack Web Developer with over three years of experience. I have had the opportunity to work with a variety of technologies and platforms throughout my career. My journey began at KL University in Guntur, where I pursued a B. Tech in Computer Science and Engineering and graduated with a CGPA of 9.57. During my time there, I developed a strong foundation in various programming languages and tools.
                </p>
                <p>
                My technical skills are diverse and comprehensive. I am proficient in several programming languages, including Java, JavaScript, Python, C, HTML, CSS, and SQL. I have also worked extensively with various frameworks such as Node.js, Spring Boot, React.js, Express.js, and Tailwind CSS. My experience with databases includes MySQL, PostgreSQL, and MongoDB. I am familiar with developer tools like VS Code, PyCharm, IntelliJ, Eclipse, Git, Spring Tool Suite, Postman, and Android Studio.
                </p>
                <p>
               
                </p>
        </div>
    </div>
    <div class="skill-container-right">
        <img src={vector} class="blob-style" alt="blob-vectoe" />
        <img src={html} alt="html" class="skills-logo" />
        <img src={css} alt="css" class="skills-logo" />
        <img src={javascript} alt="javascript" class="skills-logo" />
        <img src={react} alt="react" class="skills-logo" />
        <img src={node} alt="node" class="skills-logo" />
        <img src={spring} alt="next" class="skills-logo" />
        <img src={java} alt="redux" class="skills-logo" />
        <img src={tailwind} alt="tailwind" class="skills-logo" />
        <img src={bootstrap} alt="bootstrap" class="skills-logo" />
        <img src={mysql} alt="material" class="skills-logo" />
        <img src={express} alt="express" class="skills-logo" />
        <img src={git} alt="git" class="skills-logo" />
        <img src={github} alt="github" class="skills-logo" />
        <img src={aws} alt="graph" class="skills-logo" />
        <img src={mongodb} alt="mongodb" class="skills-logo" />
        <img src={vercel} alt="vercel" class="skills-logo" />
        <img src={python} alt="chart" class="skills-logo" />
        <img src={c} alt="bash" class="skills-logo" />
        <img src={docker} alt="docker" class="skills-logo" />
        <img src={redhat} alt="k8" class="skills-logo" />
    </div>  
</div>
  )
}

export default Skill;
