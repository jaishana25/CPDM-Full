// This Program is for on click of "see more" of latest news , that page
//Author Name: Jaishana Bindhu Priya
//Last Modified:

//========= Headers
import React from "react"; //reactjs components
import { useState, useEffect } from "react"; //reactjs components
import axios from "axios"; //api to fetch data
//=========End Headers

function Articles() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/news/");
        console.log(response.data);
        setNewsData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchNewsData();
  }, []);

  return (
    <div className="body">
      {/* =====================has list of every news with image and expandable details section========================= */}
      <div className="lines-container">
        <div className="line"></div>

        <div className="line"></div>
      </div>

      <p className="phd-text2">Latest News</p>
      <div className="lines-container">
        <div className="line"></div>
      </div>
{/* gets data from backend regarding latest news, the heading, image and details and displays in list format  */}
      {newsData.map((entry, index) => (
        <div className="wrapperr" key={index}>
          <div className="collapsible">
            <input type="checkbox" id={`collapsible-head-${index}`} />
            <label htmlFor={`collapsible-head-${index}`}>
              <img src={entry.npic} alt={entry.news} className="productimg" />
              <p className="prodname">{entry.news}</p>
            </label>
            <div className="collapsible-text">
              <p>{entry.ndetails}</p>
            </div>
          </div>
          {/*==========================================================================*/}
        </div>
      ))}

      <br />
    </div>
  );
}

export default Articles;
