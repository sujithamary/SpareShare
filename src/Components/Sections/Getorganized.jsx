import React from 'react';
import '../Sections/Getorganized.css';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

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

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const HoverRating = ({ value }) => {
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
};

const Getorganized = () => {
  return (
    <div className="getorg">
      <figure className="snip1157">
        <blockquote>
          FoodBridge has been an incredible platform in connecting surplus food from event organizers and people to those in need. The 7 o'clock scheme ensures that the needy receive nutritious food every day at 7 PM. 
          <div className="arrow"></div>
          <HoverRating value={4.5} />
        </blockquote>
        {/* <div className="author">
          <div className="initials">P</div>
          <h5>Priya Patel</h5>
        </div> */}
      </figure>
      <figure className="snip1157">
        <blockquote>
          The FoodBridge app has truly transformed how we manage and distribute surplus food. The clean design and easy-to-use interface make it simple to connect with volunteers and track donations.
          <div className="arrow"></div>
          <HoverRating value={4} />
        </blockquote>
        {/* <div className="author">
          <div className="initials">A</div>
          <h5>Anjali Singh</h5>
        </div> */}
      </figure>
      <figure className="snip1157">
        <blockquote>
          FoodBridge is an amazing initiative that connects surplus food with those in need. The app's functionality is straightforward, and the additional services like delivery and cooking are highly appreciated. 
          <div className="arrow"></div>
          <HoverRating value={4.2} />
        </blockquote>
        {/* <div className="author">
          <div className="initials">I</div>
          <h5>Ishan Verma</h5>
        </div> */}
      </figure>
    </div>
  );
}

export default Getorganized;
