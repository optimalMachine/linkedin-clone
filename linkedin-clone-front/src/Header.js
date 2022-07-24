import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

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
            <HeaderOption title='Jobs' />
            <HeaderOption title='Messaging' />
            <HeaderOption title='Notifications' />
            <HeaderOption title='Me' />


        </div>
    </div>
  )
}

export default Header