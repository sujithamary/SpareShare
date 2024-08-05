import React from 'react';
import './Getorganized.css';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Slider from 'react-slick';

const Getorganized = () => {
  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true
  };

  return (
    <div className="g-container">
      <div className="container">
        <div className="heading">
          <h2>Hear from people like you</h2>
        </div>
      </div>
      <Slider {...settings} className="getorg">
        {[...Array(9)].map((_, index) => (
          <figure className="snip1157" key={index}>
            <blockquote>
              Sample testimonial text. Sample testimonial text. Sample testimonial text.
              <div className="arrow"></div>
              <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                <Rating
                  name="text-feedback"
                  value={4.5}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <Box sx={{ ml: 2 }}>{labels[4.5]}</Box>
              </Box>
            </blockquote>
            <Avatar>A</Avatar>
            <div className="author">
              <h5>Author Name</h5>
            </div>
          </figure>
        ))}
      </Slider>
    </div>
  );
};

export default Getorganized;
