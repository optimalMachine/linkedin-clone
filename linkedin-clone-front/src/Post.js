import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import InputOption from './InputOption';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import InputIcon from '@mui/icons-material/Input';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({ name, description, message, photourl }) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post__body'>
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <InputOption Icon={ThumbUpOffAltOutlinedIcon} title="Like" color='gray' />
            <InputOption Icon={ChatOutlinedIcon} title="Comment" color='gray' />
            <InputOption Icon={ShareOutlinedIcon} title="Share" color='gray' />
            <InputOption Icon={SendOutlinedIcon} title="Send" color='gray' />

        </div>
    </div>
  )
}

export default Post;