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
          <input type="text" id="name" name='name' placeholder="Your Name" required/>
          <input type="text" id="email" name='email' placeholder="Your Email" required/>
          <textarea placeholder='Message' name='name'></textarea>
          <button className='button-form' type="submit">Send message</button>
        </form>
        {/* button */}
      </div>
      <div className='map'>

      </div>
    </div>
  )
}

export default Contact