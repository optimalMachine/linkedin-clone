import React, { useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';


function Feed() {
  const [posts,setPosts] = useState([]);
  const sendPost = e => {
    e.preventDefault();
    setPosts([]);
  };
  
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text"></input>
                    <button onClick={sendPost} type="submit">Send</button>

                </form>
            </div>
            <div className="feed__inputOptions">
              <InputOption Icon={ImageIcon} color="#7085F9" title='Photo' />
              <InputOption Icon={SubscriptionsIcon} color="orange" title='Video' />
              <InputOption Icon={EventNoteIcon} color="gray" title='Event' />
              <InputOption Icon={CalendarViewDayIcon} color="skyblue" title='Write article' />

            </div>
        </div>
        {posts.map((post)=>{
          <Post />
        })}
        <Post name='Jiuk Choi' 
        description='This is a test' 
        message='Wow this worked'/>
    </div>
  )
}

export default Feed;