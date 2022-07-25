import React from 'react';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';

function Sidebar() {

    const recentItem = (topic) =>(
        <div className="sidebar__recentItem">
            <span claaName="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>

    );

    return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"></img>
            <Avatar className="sidebar__avatar" />
            <h2>Jiuk Choi</h2>
            <h4>me@jiukchoi.com</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">1,903</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">1,864</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("softwareengineering")}
            {recentItem("design")}
            {recentItem("developer")}
        </div>
    </div>
  )
}

export default Sidebar;