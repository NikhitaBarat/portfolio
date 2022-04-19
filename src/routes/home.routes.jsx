import React from 'react'
import HomeSection from '../components/home-section/home-section.component';
import About from '../components/about/about.component'
import Projects from '../components/projects/projects.component'

function Home() {
  return (
    <div>
        <HomeSection />
        <About />
        <Projects />
    </div>
  )
}

export default Home