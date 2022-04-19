import React from 'react'
import './contact.styles.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='form'>
        <h1>CONTACT</h1>
        <p>Get in touch!</p>
        {/* form */}
        <form action="/action_page.php">
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