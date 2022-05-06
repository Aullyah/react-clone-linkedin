import React, { useEffect, useState } from 'react'
import '../../style/Feed.css'
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { useSelector } from 'react-redux';
import { selectuser } from '../../features/counterSlice';
// import { db } from '../../db/firebase';
// import { addDoc, collection, getDocs, orderBy, serverTimestamp } from 'firebase/firestore/lite';
// import FlipMove from 'react-flip-move';
import axios from 'axios';

function Feed() {
    const { user } = useSelector(selectuser);
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    useEffect( () => {
        const getPost = async() => {
            try {
                const {data} = await axios.get('https://625c6a7295cd5855d612ab68.mockapi.io/fakeData?sortBy=id&order=desc');
                setPosts(data);
            } catch (error) {
                console.log(error);
            }finally{
                setIsUpdate(false);
            }
        }
        getPost();
    },[isUpdate])

    const sendPost = async (e) => {
        e.preventDefault();
        try {
            const date = new Date();
            const request = {
                name: user.displayName ? user.displayName : 'Aullyah',
                description: 'this is a test',
                message: input,
                photoUrl: user.photoUrl ? user.photoUrl : 'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
                timeStamp: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`,
            };
            console.log(request);
            await axios.post('https://625c6a7295cd5855d612ab68.mockapi.io/fakeData', request)
                       .then(() => setIsUpdate(true));
        } catch (error) {
            console.log(error);
        } finally {
            console.log('post');
            setInput("");
        }


    }
    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
                        <button type='submit' onClick={sendPost}>Send</button>
                    </form>
                </div>

                <div className='feed_inputOptions'>
                    <InputOption title="Photo" Icon={ImageIcon} color="#70b5f9" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#e7a33e" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#c0cbcd" />
                    <InputOption title="Write Article" Icon={CalendarViewDayIcon} color="#7fc15c" />
                </div>
            </div>

            {/* <FlipMove> */}
                {posts && posts.map(({ id, name, description, message, photoUrl }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            {/* </FlipMove> */}
        </div>
    )
}

export default Feed