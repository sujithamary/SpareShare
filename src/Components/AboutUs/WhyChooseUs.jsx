import React from "react";
import { FaHandHoldingHeart, FaHandsHelping, FaLeaf } from "react-icons/fa";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="content-wrapperss">
        <div className="choose-containerss">
          <div className="featuressss">
            <div className="featuress-itemss">
              <div className="icon-containerss">
                <FaHandHoldingHeart className="iconss" />
              </div>
              <div className="featuress-textss">
                <h3>Community Driven</h3>
                <p className="p2ss">
                  Empowering communities by connecting those with surplus food to those in need.
                </p>
              </div>
            </div>
            <div className="featuress-itemss">
              <div className="icon-containerss">
                <FaHandsHelping className="iconss" />
              </div>
              <div className="featuress-textss">
                <h3>Volunteer Opportunities</h3>
                <p className="p2ss">
                  Join our network of volunteers to help deliver food and support local NGOs.
                </p>
              </div>
            </div>
            <div className="featuress-itemss">
              <div className="icon-containerss">
                <FaLeaf className="iconss" />
              </div>
              <div className="featuress-textss">
                <h3>Eco-Friendly</h3>
                <p className="p2ss">
                  Reduce food waste and promote sustainability through responsible food sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="descriptionss">
          <h2>Why Choose <span>SpareShare?</span></h2>
          <p className="description-text">
            SpareShare connects surplus food from events and individuals to those in need, ensuring no food goes to waste. Our platform facilitates efficient food distribution through a robust network of NGOs and volunteers.
          </p>
          <p className="description-text">
            By joining SpareShare, you contribute to reducing food waste, supporting local communities, and promoting environmental sustainability. Our user-friendly platform makes it easy to donate food, volunteer, or request assistance.
          </p>
          <p className="description-text">
            We prioritize transparency and efficiency in donation management, ensuring that every contribution makes a significant impact. Whether you're donating surplus food or volunteering your time, your efforts are crucial to our mission of making sure no food goes to waste.
          </p>
          <button className="cta-buttonss">Get Involved</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
