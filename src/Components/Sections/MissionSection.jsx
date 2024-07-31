import {React, useEffect} from 'react';
import '../Sections/Mission.css';
import { FaClock, FaUsers, FaRecycle, FaHandsHelping, FaPeopleCarry, FaBullhorn } from 'react-icons/fa';

const Mission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
      <div  id="mission-id">
    <section className="mission">
      <div className="container">
        <div className="heading">
          <h2>SpareShare's Missions</h2>
          <p>We have distributed <span>excess food</span> and <span>generous donations</span> to individuals in need.</p>
        </div>
        <div className="main-mission">
          <div className="scheme-content">
            <div className="scheme-details">
              <div className="detail">
                <FaClock size={40} className="icon" />
                <div className="topic">
                  <h3>7 o'clock scheme</h3>
                </div>
                <div className="description">
                  <p>Implement the '7 o'clock scheme' to provide food daily at 7 PM, funded by donations, ensuring consistent and reliable meal distribution.</p>
                </div>
              </div>
              <div className="detail">
                <FaRecycle size={40} className="icon" />
                <div className="topic">
                  <h3>Combat Food Waste</h3>
                </div>
                <div className="description">
                  <p>Reduce food wastage by connecting surplus food from event organizers and individuals to those in need.</p>
                </div>
              </div>
              <div className="detail">
                <FaHandsHelping size={40} className="icon" />
                <div className="topic">
                  <h3>Support the Needy</h3>
                </div>
                <div className="description">
                  <p>Ensure that food reaches underprivileged individuals and families through efficient distribution channels, including NGOs and volunteers.</p>
                </div>
              </div>
              <div className="detail">
                <FaPeopleCarry size={40} className="icon" />
                <div className="topic">
                  <h3>Promote Volunteerism</h3>
                </div>
                <div className="description">
                  <p>Encourage community involvement by providing opportunities for volunteers to deliver and even cook meals for those in need, rewarding them with a point system.</p>
                </div>
              </div>
              <div className="detail">
                <FaUsers size={40} className="icon" />
                <div className="topic">
                  <h3>Community Engagement</h3>
                </div>
                <div className="description">
                  <p>Foster a sense of community by allowing participants to contribute, earn points, and redeem rewards, creating a sustainable ecosystem of giving and receiving.</p>
                </div>
              </div>
              <div className="detail">
                <FaBullhorn size={40} className="icon" />
                <div className="topic">
                  <h3>Raise Awareness</h3>
                </div>
                <div className="description">
                  <p>Educate the public about the impact of food waste and hunger, and promote a culture of sharing and sustainable living through various awareness campaigns and events.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Mission;
