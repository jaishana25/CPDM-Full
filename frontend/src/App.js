// This Program is for the main file which renders all the files together and has routing data
//Author Name: Jaishana Bindhu Priya
//Last Modified:

//========= Headers
import "./App.css"; //styling 
//This code imports the Header component from the "./components/Header" file.
import Header from "./components/Header"; 
// This code imports the "Home" component from the "./components/Home" file.
import Home from "./components/Home"; 
// This code imports the Footer component from the "./components/Footer" file.
import Footer from "./components/Footer"; 
// This code imports the `Route` and `Routes` components from the `react-router-dom` library, which are commonly used for defining routes in a React application.
import { Route, Routes } from "react-router-dom"; 
// This code imports the "About" component from the "./components/About" file. 
import About from "./components/About";
// This code imports the Gallery component from the "./components/Gallery" file.
import Gallery from "./components/Gallery";
// This code imports the Research component from the "./components/Research" file.
import Research from "./components/Research";
// This code imports the People component from the "./components/People" file.
import People from "./components/People";
// This code imports the Activities component from the "./components/Activities" file.
import Activities from "./components/Activities";
// This code imports the Join component from the "./components/Join" file.
import Join from "./components/Join";
// This code imports the CardDetails component from the "./components/CardDetails" file.
import CardDetails from "./components/CardDetails";
// This code imports an image file named "up.png" from the "./components/images" directory for the icon that takes to "top of page"
import up from "./components/images/up.png";
// This code imports the Journal component from the "./components/Journal" file.
import Journal from "./components/Journal";
// This code imports the "Articles" component from the "./components/Articles" file.
import Articles from "./components/Articles";
// This code imports the Font Awesome library CSS file, which provides a collection of free icons for use in web applications.
import "@fortawesome/fontawesome-free/css/all.min.css";
//=========End Headers

function App() {
  return (
    <div className="App">
      {/*This code is rendering a header component which is top section of page, common in every page*/}
      <Header />
      {/*This code defines the routes for a web application using React Router. It specifies the different paths and components to render for each route*/}
      <Routes>

        {/*This code sets up a route for the home page ("/") and renders the Home component when the path matches*/}
        <Route path="/" element={<Home />} />
        {/*This code sets up a route for the "/about" path that renders the About component when the path is matched*/}
        <Route path="/about" element={<About />} />
        {/*This code sets up a route for the "/research" path that renders the Research component when the path is matched*/}
        <Route path="/research" element={<Research />} />
        {/*This code sets up a route for the "/people" path and renders the People component when the path is matched*/}
        <Route path="/people" element={<People />} />
        {/*This code sets up a route for the "/activities" path and renders the Activities component when the path is matched*/}
        <Route path="/activities" element={<Activities />} />
        {/*This code sets up a route for the "/gallery" path, rendering the Gallery component when the path is matched*/}
        <Route path="/gallery" element={<Gallery />} />
        {/*This code sets up a route for the "/join" path, rendering the Join component when the path is matched*/}
        <Route path="/join" element={<Join />} />
        {/*This code sets up a route for the "/card-details/:id" path and renders the CardDetails component when the path is matched*/}
        <Route path="/card-details/:id" element={<CardDetails />} />
        {/*This code sets up a route for the "/journal" path, rendering the Journal component when the path is matched*/}
        <Route path="/journal" element={<Journal />} />
        {/*This code sets up a route for the "/articles" path and renders the Articles component when the path is matched*/}
        <Route path="/articles" element={<Articles />} />
   
      </Routes>
      <a href="#">
        {/*This code selects the HTML element with the id "progress" and assigns it to a variable*/}
        <div id="progress">
          <img src={up} alt="up" width="30px" />
        </div>
      </a>

      <Footer />
    </div>
  );
}

export default App;
