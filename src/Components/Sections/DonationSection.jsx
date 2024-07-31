import React from 'react';
import '../Sections/Donation.css';
import { Link } from 'react-router-dom';

const DonationSection = () => {
    const donationItems = [
        { imgSrc: 'Asserts/shopping-bag.png', altText: 'Food', title: 'Food', description: 'Share the joy of a meal and help nourish those who are truly in need and grateful.', href:'/food' },
        { imgSrc: 'Asserts/salary.png', altText: 'Fund', title: 'Fund', description: 'Your generous donations can bring hope and support to countless lives.', href:'/fund' },
        { imgSrc: 'Asserts/clothing.png', altText: 'Clothes', title: 'Clothes', description: 'Share the warmth of your clothes with those who need them the most.', href:'/cloth'},
        { imgSrc: 'Asserts/sneakers.png', altText: 'Footwear', title: 'Footwear', description: 'Help others walk confidently by donating your gently used footwear.', href:'/footwear'},
        { imgSrc: 'Asserts/gadgets.png', altText: 'Gadgets', title: 'Gadgets', description: 'Bridge the digital divide by donating gadgets and empowering future potential.', href:'/gadgets' },
        { imgSrc: 'Asserts/book.png', altText: 'Stationery', title: 'Stationery', description: 'Inspire education and creativity by providing stationery to eager minds.', href:'/stationery' },
    ];

    return (
        <section className="don-sec" id="donation">
            <div className="container">
                <div className="heading">
                    <h2>Resource Redistribution and Donation Handling</h2>
                </div>
                <div className="row">
                    {donationItems.map((item, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className="don-box">
                                <img src={item.imgSrc} alt={item.altText} />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                {item.href && (
                                    <Link to={item.href} className='readmore'>
                                        <p>Read more</p>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DonationSection;
