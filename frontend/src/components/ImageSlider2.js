// This Program is for the carousel code in gallery page
//Author Name: Jaishana Bindhu Priya
//Last Modified:

//========= Headers
import React, { useState, useEffect } from "react"; //reactjs components
import { SliderData } from "./SliderData"; //get data for the sliding compoenents
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"; //the left and right arrow in slider carousel
//=========End Headers

const ImageSlider2 = ({ slides }) => {
  // This code uses the useState hook to create a state variable called 'current' with an initial value of 0, and a function 'setCurrent' to update its value.
  const [current, setCurrent] = useState(0);
  // Assigns the length of the "slides" array to the variable "length".
  const length = slides.length;
  // This code creates a reference to be used with React's useEffect hook to manage intervals in a functional component.
  const intervalRef = React.useRef();
// This code defines a function called nextSlide that does not take any arguments.
  const nextSlide = () => {
    // // Sets the current value to either 0 or increments it by 1, based on whether it is equal to the length minus 1 or not.
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    // Updates the current value based on a ternary condition: if current is 0, sets it to length - 1, otherwise decrements it by 1.
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  useEffect(() => {
    // Auto play slides every 5 seconds
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalRef.current);
  }, [current]);

  const handleDotClick = (index) => {
    setCurrent(index);
  };
// Checks if the "slides" variable is an array and has at least one element. If not, it returns false.
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider2">
      {/* =====================slider carousel code ========================= */}
{/* This code renders a clickable left arrow icon that triggers the "prevSlide" function when clicked */}
      <FaArrowAltCircleLeft className="left-arrow2" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow2" onClick={nextSlide} />
      {/* This code is using the map function to iterate over an array called SliderData and return a new array with modified elements*/}
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
             {/* This code checks if the current index is equal to the current value, and if so, it executes the code inside the parentheses */}
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
            {/* ============================================== */}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider2;
