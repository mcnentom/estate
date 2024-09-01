import { useState, useEffect } from "react";
import "./HomePage.css";
import Logo from "../assets/png/logo-white.png";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";
import { Typed } from "react-typed";
import { Link, Element } from "react-scroll";
import { TiTickOutline } from "react-icons/ti";
import { FaShieldHalved } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { RiPriceTag3Fill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

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

  useEffect(() => {
    const multiple = new Typed(".houseName1", {
      strings: [
        "sunset Villa",
        "Sea view",
        "Ocean Villa park",
        "Saluv Apartment",
        "Villa show",
      ],
      typeSpeed: 120,
      backSpeed: 20,
      backDelay: 7500,
      loop: true,
    });

    return () => {
      multiple.destroy();
    };
  }, []);

  const nextIndex = (currentImageIndex + 1) % images.length;
  const thirdNextIndex = (nextIndex + 1) % images.length;

  return (
    <div className="Homecomponent">
      <div className="headerDiv">
        <nav>
          <ul className="headerLinks">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="mission" smooth={true} duration={500}>
                Our Mission
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="glow-circle"></div>
      <div className="glow-circle2"></div>
      <Element name="home">
        <div className="topComponent">
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
            <h3 className="houseName">
              <span className="houseName1"></span>
            </h3>
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
                    <p>{image.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="next-slideshow-item">
              <img
                src={images[nextIndex].imagesrc}
                alt={images[nextIndex].name}
                className="nextSlideShowImage"
              />
            </div>
            <div className="next-slideshow-item3">
              <img
                src={images[thirdNextIndex].imagesrc}
                alt={images[thirdNextIndex].name}
                className="nextSlideShowImage3"
              />
            </div>
          </div>
        </div>
      </Element>

      <Element name="about">
        <div className="mainAboutDiv">
          <div className="aboutHeading">
            <span className="stroke-Text">What We</span>
            <span>Offer</span>
            <span className="stroke-Text">To You</span>
          </div>
          <div className="textDiv">
            <div className="sampleText">
            <span><FaShieldHalved /></span>
              <h4>Protection from Frauder</h4>
              <p>
                Here you get a legal and validate property right from our
                dealers
              </p>
            </div>
            <div className="sampleText">
              <span><FaHouseChimney /></span>
              <h4>Best Property in the market</h4>
              <p>
                We ensure that you get the property of your wish and not nothing
                away from your expectation
              </p>
            </div>
            <div className="sampleText">
              <span><RiPriceTag3Fill /></span>
              <h4>Best Prices</h4>
              <p>
                Our prices are affordable and innthe range of your pocket
                depending on your preferrences
              </p>
            </div>
            <div className="sampleText">
              <span><GrTransaction /></span>
              <h4>Efficient transactions</h4>
              <p>
                We offer security by ensuring the dealer and customer have a
                mediator in closing the deal
              </p>
            </div>
          </div>
          <div className="whyUs">
            <div className="imageDiv">
              <span className="span1">
              <img src={house1} alt="" className="house1" />
              <span className="imageDiv1">
                <img src={house2} alt="" className="house" />
                <img src={house3} alt="" className="house" />
              </span>
              </span>
              <span>
                <img src={house4} alt="" className="house2" />
              </span>
            </div>
            <div className="whyUsDetails">
              <h2><span className="stroke-Text">Why</span> choose Us</h2>
              <p><TiTickOutline />The best of the best prices</p>
              <p><TiTickOutline />Best custoer services</p>
              <p><TiTickOutline />Best dealer customer relationship</p>
              <p><TiTickOutline />Best security</p>
            </div>
          </div>
        </div>
      </Element>
      <Element name="mission" className="mission">
        <div className="missionDiv">
          <div className="missionHeaderDiv">
            <h2 className="missionHeader">
              Our Mission:<span>Building the future</span>
            </h2>
            <p className="missionPtag">
              Our Goal is to shape communities that enrich,fortify the
              sorrounding neighborhoods with our efficient services ranging from
              selling to advertising,counselling and ensuring our custoers get
              the best out of their money
            </p>
          </div>

          <div className="values">
            <h1>Values that drive us to do what we do</h1>
            <ol>
              <li>Unique & Premium Design</li>
              <li>
                meticulously crafted to align with the latest web design trends.
              </li>
              <li>Boosted SEO and Lightning-Fast Speed,</li>
              <li>
                Realtifye Pro, a Real Estate Webflow Template takes optimization
                seriously.
              </li>
              <li>
                From content map structure to DOM and Heading Structure, we have
                implemented robust SEO practices for optimal performance.
              </li>
            </ol>
          </div>
        </div>
        <img src={house1} alt="" className="missionDivHouse" />
      </Element>
      <div className="footer">
      <FaSquareInstagram />
      <FaFacebook />
      <FaSquareXTwitter />
      </div>
    </div>
  );
}

export default HomePage;
