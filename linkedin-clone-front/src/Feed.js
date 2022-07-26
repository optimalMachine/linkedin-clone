import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
// import { db } from './firebase';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';


function Feed() {
  const [input,setInput] = useState('');
  const [posts,setPosts] = useState([]);

  // useEffect(()=>{
  //   db.collection("posts").onSnapShot(snapshot=> (
  //     setPosts(snapshot.docs.map(doc => (
  //       {
  //         id: doc.id,
  //         data:doc.data(),
  //       }
  //     )))
  //   ))
  // },[])
  // const sendPost = (e) => {
  //   e.preventDefault();
  //   db.collection('posts').add({
  //     name: 'Jiuk Choi',
  //     description: 'this is a test',
  //     message: input,
  //     photoUrl: '',
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //   })
  // };
  
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text"></input>
                    <button type="submit">Send</button>

                </form>
            </div>
            <div className="feed__inputOptions">
              <InputOption Icon={ImageIcon} color="#7085F9" title='Photo' />
              <InputOption Icon={SubscriptionsIcon} color="orange" title='Video' />
              <InputOption Icon={EventNoteIcon} color="gray" title='Event' />
              <InputOption Icon={CalendarViewDayIcon} color="skyblue" title='Write article' />

            </div>
        </div>
        {posts.map(({ id, data: { name, description, message, photoUrl } })=>{
          <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
          />
        })}
    </div>
  )
}

export default Feed;