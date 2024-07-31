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
        <figure className="snip1157">
          <blockquote>
            I love how Spareshare connects us with local needs and tracks our contributions. The volunteer point system is a fantastic motivator.
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
          <Avatar>P</Avatar>
          <div className="author">
            <h5>Priya Patel</h5>
          </div>
        </figure>
        <figure className="snip1157 hover">
          <blockquote>
            Spareshare makes donating surplus food incredibly easy and efficient. The app’s design is intuitive, and it’s great to see real-time impact.
            <div className="arrow"></div>
            <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
              <Rating
                name="text-feedback"
                value={4}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <Box sx={{ ml: 2 }}>{labels[4]}</Box>
            </Box>
          </blockquote>
          <Avatar>A</Avatar>
          <div className="author">
            <h5>Anjali Singh</h5>
          </div>
        </figure>
        <figure className="snip1157">
          <blockquote>
            The ‘7 o'clock scheme’ is a brilliant feature that ensures timely help for those in need. Spareshare has truly enhanced our community support efforts.
            <div className="arrow"></div>
            <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
              <Rating
                name="text-feedback"
                value={5}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <Box sx={{ ml: 2 }}>{labels[5]}</Box>
            </Box>
          </blockquote>
          <Avatar>I</Avatar>
          <div className="author">
            <h5>Ishan Verma</h5>
          </div>
        </figure>
        <figure className="snip1157">
          <blockquote>
            Spareshare's platform is incredibly user-friendly and makes it so easy to donate. It feels good to know our contributions are making a difference.
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
          <Avatar>R</Avatar>
          <div className="author">
            <h5>Ravi Kumar</h5>
          </div>
        </figure>
        <figure className="snip1157">
          <blockquote>
            The transparency and ease of use on Spareshare's platform have made us more engaged in giving back to our community.
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
          <Avatar>N</Avatar>
          <div className="author">
            <h5>Nikhil Gupta</h5>
          </div>
        </figure>
        <figure className="snip1157">
          <blockquote>
            The app’s simplicity and efficiency in connecting donors to recipients is truly commendable. Spareshare has revolutionized how we think about surplus.
            <div className="arrow"></div>
            <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
              <Rating
                name="text-feedback"
                value={5}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <Box sx={{ ml: 2 }}>{labels[5]}</Box>
            </Box>
          </blockquote>
          <Avatar>K</Avatar>
          <div className="author">
            <h5>Komal Sharma</h5>
          </div>
        </figure>
        <figure className="snip1157">
          <blockquote>
            Spareshare's user interface is straightforward and makes the process of donating and volunteering hassle-free. Highly recommend!
            <div className="arrow"></div>
            <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
              <Rating
                name="text-feedback"
                value={4}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <Box sx={{ ml: 2 }}>{labels[4]}</Box>
            </Box>
          </blockquote>
          <Avatar>S</Avatar>
          <div className="author">
            <h5>Sara Ali</h5>
          </div>
        </figure>
        <figure className="snip1157">
          <blockquote>
            Spareshare’s ‘7 o'clock scheme’ is a standout feature. It’s wonderful to be part of a community initiative that is so impactful and well-organized.
            <div className="arrow"></div>
            <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
              <Rating
                name="text-feedback"
                value={5}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <Box sx={{ ml: 2 }}>{labels[5]}</Box>
            </Box>
          </blockquote>
          <Avatar>V</Avatar>
          <div className="author">
            <h5>Varun Mehta</h5>
          </div>
        </figure>
        <figure className="snip1157">
          <blockquote>
            Spareshare’s user-friendly platform and effective coordination between volunteers and donors have set a new standard for charitable efforts.
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
          <Avatar>J</Avatar>
          <div className="author">
            <h5>Jaya Nair</h5>
          </div>
        </figure>
        <figure className="snip1157">
          <blockquote>
            Spareshare’s dedication to making surplus food available to those in need is truly inspiring. The platform is a game-changer for community support.
            <div className="arrow"></div>
            <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
              <Rating
                name="text-feedback"
                value={5}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <Box sx={{ ml: 2 }}>{labels[5]}</Box>
            </Box>
          </blockquote>
          <Avatar>R</Avatar>
          <div className="author">
            <h5>Ritu Ahuja</h5>
          </div>
        </figure>
      </Slider>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray' }}
      onClick={onClick}
    />
  );
}

export default Getorganized;
