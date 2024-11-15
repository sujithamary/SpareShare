import React from 'react';
import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IoHome, IoBarChartSharp } from 'react-icons/io5';
import { FaUser, FaUserTie, FaDonate } from 'react-icons/fa';
import { MdPostAdd } from 'react-icons/md';
import { IoLogoBuffer } from 'react-icons/io';
import '../AdminMenu/AdminMenu.css';

const AdminMenu = () => {
    const menuItem = [
        { 
          id: 1,
          title: "Main",
          listitems: [
            {
                id: 1,
                path: "/admin/aHome",
                name: "Home",
                icon: <IoHome />
            }
          ],
        },
        {
            id: 2,
            title: "Lists",
            listitems: [
              {
                  id: 1,
                  path: "/admin/aUsers",
                  name: "Users",
                  icon: <FaUser />
              },
              {
                  id: 2,
                  path: "/admin/aVolunteers",
                  name: "Volunteers",
                  icon: <FaUserTie />
              },
              {
                id: 3,
                path: "/admin/aDonations",
                name: "Donations",
                icon: <FaDonate />
              }
            ],
        },
              
    ];

  return (
    <div className='a-menu'>
        {menuItem.map((section) => (
            <div key={section.id} className="a-item">
                <span className="a-title">{section.title.toUpperCase()}</span>
                {section.listitems.map((listitem) => (
                    <NavLink 
                        to={listitem.path} 
                        className='listItem' 
                        key={listitem.id} 
                        activeClassName="active"
                    >
                        {listitem.icon}
                        <span className="listItemTitle">{listitem.name}</span>
                    </NavLink>
                ))}
            </div>
        ))}
    </div>
  );
}

export default AdminMenu;
