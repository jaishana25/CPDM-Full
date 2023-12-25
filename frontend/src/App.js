
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route , Routes } from "react-router-dom";
import About from './components/About';

import Gallery from './components/Gallery';
import Research from './components/Research';
import People from './components/People';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Join from './components/Join';
import CardDetails from './components/CardDetails';
import up from './components/images/up.png';

import Journal from './components/Journal';

import Articles from './components/Articles';
import Prof from './components/Prof';// index.js or App.js
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/research" element={<Research/>}/>
        <Route path="/people" element={<People/>}/>
        <Route path="/activities" element={<Activities/>}/>
       
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/card-details/:id" element={<CardDetails/>} />
     
        <Route path="/journal" element={<Journal/>}/>
 
        <Route path="/articles" element={<Articles/>}/>
        <Route path="/prof" element={<Prof/>}/>
      


      </Routes>
      <a href="#">
      <div id="progress">
        <img src={up} alt="up" width="30px"/>
    

      </div>
      </a>

      
      
      <Footer />
      
   

    </div>
  );
}

export default App;