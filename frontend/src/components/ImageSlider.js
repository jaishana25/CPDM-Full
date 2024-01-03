// This Program is for slider carousel code in home page
//Author Name: Jaishana Bindhu Priya
//Last Modified:

//========= Headers
import React, { useState, useEffect } from "react"; //reactjs components
import { SliderData } from "./SliderData"; //get data for the sliding compoenents
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"; //the left and right arrow in slider carousel
//=========End Headers

const ImageSlider = ({ slides }) => {
  // This code uses the useState hook to create a state variable called 'current' and a function called 'setCurrent' to update its value. The initial value of 'current' is set to 0.
  const [current, setCurrent] = useState(0);
  // Variable "length" is assigned the value of the length property of the "slides" array, indicating the number of elements in the array.
  const length = slides.length;
  // This code creates a reference to be used for managing intervals in a React component.
  const intervalRef = React.useRef();
  // This code defines a function called nextSlide that does not take any arguments.
  const nextSlide = () => {
    // // Updates the current value to either 0 or the next index in the array, based on whether the current value is the last index or not.
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  //  defines a function called prevSlide that does not take any arguments. It is  used to navigate to the previous slide in a slideshow or carousel.
  const prevSlide = () => {
    // Updates the current value based on a condition: if current is 0, sets it to length - 1, otherwise decrements it by 1.
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  // This code is using the useEffect hook to execute a function when the component mounts or when a specific dependency changes.
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
    <section className="slider">
      {/* =====================slider carousel code ========================= */}
{/* This code renders a clickable left arrow icon that triggers the "prevSlide" function when clicked */}
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

    {/* This code is using the map function to iterate over an array called SliderData and return a new array with modified elements*/}
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          > {/* This code checks if the current index is equal to the current value, and if so, it executes the code inside the parentheses */}
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

export default ImageSlider;
