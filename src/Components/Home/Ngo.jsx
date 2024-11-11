import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Ngo.css';
const FeaturedIn = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000, // 5 seconds
      arrows: true,
    };
  
    const logos = [
      { src: 'link_to_image_1', alt: 'Times of India' },
      { src: 'link_to_image_2', alt: 'Economic Times' },
      { src: 'link_to_image_3', alt: 'HT' },
      { src: 'link_to_image_4', alt: 'Vice' },
      { src: 'link_to_image_5', alt: 'afaqs!' },
    ];
  
    return (
      <div className="featured-in-container">
        <h2>Featured In</h2>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide">
              <img src={logo.src} alt={logo.alt} className="logo-image" />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default FeaturedIn;
  
