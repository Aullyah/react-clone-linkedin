import { Avatar } from '@mui/material'
import React from 'react'
import '../../style/Post.css'
import InputOption from './InputOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar src={photoUrl}/>

            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className='post__buttons'>
            <InputOption Icon={ThumbUpIcon} title='Like' color='gray'/>
            <InputOption Icon={ChatBubbleIcon} title='Comment' color='gray'/>
            <InputOption Icon={ShareIcon} title='Share' color='gray'/>
            <InputOption Icon={SendIcon} title='Send' color='gray'/>
        </div>
    </div>
  )
}

export default Post