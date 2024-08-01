import './About.css';

const About = () => {
  return (
    <section className="about-sec" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 about-img">
            <img src="Asserts/5.jpg" alt="about" />
          </div>
          <div className="col-lg-8 order-first order-lg-last">
            <div className="heading">
              <h2>What We Do & Why We Do</h2>
            </div>
            <p>Spareshare is a pioneering platform dedicated to connecting surplus food from event organizers and individuals with those in need through a network of NGOs and volunteers. Our app facilitates this connection, enabling users to offer or request surplus food, while volunteers can provide delivery or cooking services. A key feature of Spareshare is the '7 o'clock scheme,' where we ensure that every day at 7 PM, needy individuals receive a meal, funded through donations and supplied by our dedicated volunteers. We also track and reward volunteer contributions with a points system, allowing them to redeem points for monetary rewards.
            </p>
            <p>
            At Spareshare, we are driven by the mission to tackle food waste and hunger simultaneously. By redistributing surplus food efficiently, we address two critical issues: reducing unnecessary food waste and providing reliable food access to those in need. Our approach not only supports vulnerable communities but also fosters a sense of community engagement and generosity. Through the 7 o'clock scheme and our volunteer rewards system, we aim to create a sustainable, impactful solution that brings people together to make a meaningful difference in their lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
