import { useState, useEffect } from "react";
import "./HomePage.css";
import Logo from "../assets/png/logo-white.png";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";

const images = [
  { imagesrc: house1, name: "sunset Villa", price: "$45" },
  { imagesrc: house2, name: "Sea view", price: "$47" },
  { imagesrc: house3, name: "Ocean Villa park", price: "$49" },
  { imagesrc: house4, name: "Saluv Apartment", price: "$55" },
  { imagesrc: house5, name: "Villa show", price: "$65" },
];

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextIndex = (currentImageIndex + 1) % images.length;

  return (
    <div className="Homecomponent">
      <div className="topComponent">
        <div className="glow-circle"></div>
        <div className="glow-circle2"></div>
        <div className="mainComponents">
          <div className="header">
            <img src={Logo} className="LogoImage" alt="" />
            <h1>Realti Estate Org</h1>
          </div>

          <p>Here you get to find the best home for you and your family</p>

          <div className="generalNumbersDiv">
            <div className="numbers">
              <span className="number">+340</span>
              <span>Properties</span>
            </div>
            <div className="numbers">
              <span className="number">+50</span>
              <span>Dealers</span>
            </div>
            <div className="numbers">
              <span className="number">+200</span>
              <span>Sold Houses</span>
            </div>
          </div>
        </div>
        <div className="slideshowWrapper">
          <div className="slideshow-container">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slideshow-slide ${
                  index === currentImageIndex ? "active" : "inactive"
                }`}
              >
                <img
                  src={image.imagesrc}
                  alt={images.name}
                  className="slideshow-image"
                />
                <div className="image-info">
                  <h3>{image.name}</h3>
                  <p>{image.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="next-slideshow-item"
          >
            <img
              src={images[nextIndex].imagesrc}
              alt={images[nextIndex].name}
              className="nextSlideShowImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
