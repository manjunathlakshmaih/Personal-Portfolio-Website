import "./BottomContent.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const BottomContent = () => {
  const [stars, setStars] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await axios.get(
          `https://github.com/manjunathlakshmaih` // Replace {owner} and {repo} with your GitHub username and repository name
        );
        setStars(response.data.stargazers_count);
      } catch (err) {
        setError("Failed to fetch star count.");
        console.error(err);
      }
    };

    fetchStars();
  }, []);

  return (
    <div className="BottomContent-fld">
      <div className="fld-1">
        <ul className="list-items">
          <li><a href="http://localhost:3000/#">Home</a></li>
          <li><a href="http://localhost:3000/#">Blog</a></li>
          <li><a href="http://localhost:3000/#">About</a></li>
          <li><a href="http://localhost:3000/#">DashBoard</a></li>
        </ul>
        <ul className="list-items">
          <li><a href="#">Guestbook</a></li>
          <li><a href="#">Uses</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Links</a></li>
        </ul>
        <ul className="list-items">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="https://github.com/manjunathlakshmaih">GitHub</a></li>
          <li><a href="https://www.youtube.com/">YouTube</a></li>
        </ul>
      </div>

      <div className="footer-fld">
        {/* <footer> */}
        <p>&copy; 2024 Manju</p>
        <div className="github-stars">
          {error ? (
            <p>{error}</p>
          ) : stars === null ? (
            <p>Loading star count...</p>
          ) : (
            <p>
              <i className="fa fa-star" style={{ color: "gold" }}></i> {stars}{" "}
              Stars
            </p>
          )}
        </div>
        {/* </footer> */}
      </div>
    </div>
  );
};

export default BottomContent;
