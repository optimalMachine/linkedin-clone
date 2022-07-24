import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <img src="https://1000logos.net/wp-content/uploads/2017/03/Color-of-the-LinkedIn-Logo.jpg" />
            <div className="header__left__search">
                <SearchIcon/>
                <input type="text" placeholder='Search'></input>
            </div>
        </div>
        <div className="header__right">
            <HeaderOption title='Home' Icon={HomeIcon}/>
            <HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
            <HeaderOption title='Jobs' Icon={BusinessCenterIcon}/>
            <HeaderOption title='Messaging' Icon={ChatIcon}/>
            <HeaderOption title='Notifications' Icon={NotificationsIcon}/>
            
            <HeaderOption title='me' avatar="https://media-exp1.licdn.com/dms/image/C5603AQGmMlXIi_5qZw/profile-displayphoto-shrink_800_800/0/1637535035189?e=1664409600&v=beta&t=KH_LjbEKDbMDQRPJ1PcTlLrl7lBT5recl1XnzLdnelk"/>

        </div>
    </div>
  )
}

export default Header