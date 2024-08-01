import '../Sections/Home.css';

const HomeSection = () => {
    return (
        <section className="home-sec" id="home">
            <div className="container">
                <div className="home-content">
                    <div className="row">
                        <div className="col-lg-6 align-item-center">
                            <div className="home-info">
                                <h1>Alone we can do little, together we can do so much</h1>
                                <h2>We <span>SpareShare</span> managing excess for needy peoples</h2>
                                <p>SpareShare is dedicated to efficiently managing excess food to support those in need. By connecting donors with NGOs and volunteers through a seamless and integrated platform, SpareShare ensures that surplus food is redistributed to the hungry instead of being wasted. Our mission is to streamline the donation process, provide real-time tracking, and offer incentives to encourage contributions, creating a sustainable and impactful solution for food insecurity.</p>
                                <div className="buttons">
                                    <a href="/donation" className="btn1">Donate now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-first order-lg-last">
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
