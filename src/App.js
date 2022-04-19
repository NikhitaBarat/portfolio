import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.component.js'
import HomeSection from './components/home-section/home-section.component';
import About from './components/about/about.component.js'
import Projects from './components/projects/projects.component.js'
import Contact from './components/contact/contact.component.js'

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <About />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

export default App;
