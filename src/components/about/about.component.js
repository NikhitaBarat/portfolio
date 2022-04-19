import React from 'react'
import './about.styles.css'
import Profile from '../../assets/my-image.jpg'

function About() {
    return (
        <div className='about'>
            <div className='image'>
                <img src={Profile} alt='' />
                {/* Create an overlay effect on hover */}
                {/* <div class="overlay">
                    <div class="text">Barat Nikhita</div></div> */}
            </div>
            <div className='about-content'>
                <div className='summary'>
                    <h1>ABOUT</h1>
                    <p>Hi, I'm Barat Nikhita, sophomore at Kalinga Institute of Industrial technology pursuing Computer Science and Engineering Degree.  I'm passionate about Machine Learning and Web development. </p>
                    {/* button */}
                    <button>Download CV</button>
                </div>
                <div className='contact'>
                    <div className='contact-title'>
                        Contact me here!</div>
                    <div className='contact-details'>
                        <span className='gray'>Email</span> - bnikhita003@gmail.com <br />
                        <span className='gray'>Phone</span> - +91 9679083539</div>

                </div>
            </div>
        </div>
    )
}

export default About