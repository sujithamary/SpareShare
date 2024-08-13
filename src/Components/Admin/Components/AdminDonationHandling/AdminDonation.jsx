import React from 'react';
import '../AdminDonationHandling/AdminDonation.css';
import { Link } from 'react-router-dom';
import { IoShirt } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import { RiRefund2Fill } from "react-icons/ri";
import { GiSlippers } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";

const AdminDonation = () => {
    const donationItems = [
        { imgSrc: <IoFastFood fontSize={40} color='#135d66' />, altText: 'Food', title: 'Food Donations', category: 'FOOD' },
        { imgSrc: <RiRefund2Fill fontSize={40} color='#135d66'/>, altText: 'Fund', title: 'Fund Donations', category: 'FUND' },
        { imgSrc: <IoShirt fontSize={40} color='#135d66' />, altText: 'Clothes', title: 'Clothes Donations', category: 'CLOTHES' },
        { imgSrc: <GiSlippers fontSize={40} color='#135d66' />, altText: 'Footwear', title: 'Footwear Donations', category: 'FOOTWEAR' },
        { imgSrc: <MdLocalGroceryStore fontSize={40} color='#135d66' />, altText: 'Grocery', title: 'Groceries Donations', category: 'GROCERY' },
        { imgSrc: <GiOpenBook fontSize={40} color='#135d66'/>, altText: 'Stationery', title: 'Stationeries Donations', category: 'STATIONERY' },
    ];

    return (
        <section className="admin-don-sec">
            <div className="admin-don-container">               
                <div className="admin-don-row">
                    {donationItems.map((item, index) => (
                        <div className="admin-don-col-4" key={index}>
                            <div className="admin-don-box">
                            {item.imgSrc}
                                <h3>{item.title}</h3>
                                <Link to={`/aDonationList?category=${item.category}`} className='readmore'>
                                    <p>view donations</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AdminDonation;
