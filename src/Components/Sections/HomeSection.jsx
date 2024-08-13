import React from 'react';
import '../Sections/Home.css';

const HomeSection = () => {
    return (
        <section className="home-sec" id="home">
            <div className="home-container">
                <div className="home-content">
                    <div className="home-row">
                        <div className="home-col-50 align-item-center">
                            <div className="home-info">
                                <h1>Alone we can do little, together we can do so much</h1>
                                <h2>We <span>SurplusShare</span> managing excess for needy peoples</h2>
                                <p>SurplusShare is dedicated to efficiently managing excess food to support those in need. By connecting donors with NGOs and volunteers through a seamless and integrated platform, SurplusShare ensures that surplus food is redistributed to the hungry instead of being wasted. Our mission is to streamline the donation process, provide real-time tracking, and offer incentives to encourage contributions, creating a sustainable and impactful solution for food insecurity.</p>
                                <div className="buttons">
                                    <a href="/donation" className="home-btn">Donate Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="home-col-50 order-first order-lg-last">
                            <div className="img-sec">
                                {/* <img src="https://www.wits.ac.za/media/wits-university/news-and-events/images/news/2023-jan-april/Food%20security%20600x300.jpg" alt="home-image" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeSection;
