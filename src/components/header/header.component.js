import './header.styles.css'
import React from 'react'
import AnchorIcon from '@mui/icons-material/Anchor';

function Header() {
  return (
    <div className='header_'>
      <div className='logo'>
        <AnchorIcon fontSize="large"/>
      </div>
      <div className='nav_options'>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/projects'>Projects</a></li>
          <li><a href='/resume'>Resume</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header