import React, { useState, useEffect } from "react";
import "./description.css";

const Description = () => {
  const words = ["stunning", "amazing", "fantastic"];
  const [currentWord, setCurrentWord] = useState(words[0]); 

  useEffect(() => {
    const wordChangeInterval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000); 

    return () => {
      clearInterval(wordChangeInterval); 
    };
  }, []);

  return (
    <div className="description_fld">
      <div className="details_cont">
        <h3>Hello!</h3>
        <div>
          <h1 className="introduction">I am Manjunath L</h1>
          <p className="description">
            I'm Manju, a Full Stack Developer creating{" "}
            <span className="highlight">{currentWord}</span> websites using React....
          </p>
        </div>
      </div>
      <div className="logo_fld">
        <h1 className="logo">M</h1>
      </div>
    </div>
  );
};

export default Description;
