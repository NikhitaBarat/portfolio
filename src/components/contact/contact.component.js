import React from 'react'
import './contact.styles.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='form'>
        <h1>CONTACT</h1>
        <p>Get in touch!</p>
        {/* form */}
        <form action="https://formsubmit.co/bnikhita003@gmail.com" method="POST">
          <input type="text" id="name" placeholder="Your Name" />
          <input type="text" id="email" placeholder="Your Email" />
          <textarea placeholder='Message'></textarea>
          <input type="submit" value="Send message" />
        </form>
        {/* button */}
      </div>
      <div className='map'>

      </div>
    </div>
  )
}

export default Contact