import React from 'react';
import {topDealUsers} from "../../Data/AdminData.jsx";
import '../AdminTopBox/AdminTopBox.css'

const AdminTopBox = () => {
  return (
    <div className='topBox'>
      <h1>Top Donors</h1>
      <div className="topBox-list">
        {topDealUsers.map(user => (
            <div className="topbox-listitem" key={user.id}>
                <div className="topBox-user">
                    <img src={user.img} alt="" />
                    <div className="topBox-userTexts">
                        <span className="topBox-username">{user.username}</span>
                        <span className="topBox-email">{user.email}</span>
                    </div>
                </div>
                <span className='topBox-amount'>₹{user.amount}</span>
            </div>
        ))}
      </div>
    </div>
  );
}

export default AdminTopBox;
