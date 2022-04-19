import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.component.js'
import Contact from './components/contact/contact.component.js'
import Home from './routes/home.routes.jsx'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
