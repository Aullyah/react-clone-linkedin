import React from 'react'
import './../../style/Header.css'
import linkedinImg from './../../assets/linkedin.png'
import HeaderOption from './HeaderOption'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../../db/firebase'
import { logout } from '../../features/counterSlice'


function MainHeader() {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await signOut(auth);
    dispatch(logout);
  }

  return (
    <div className='header'>
        <div className='header__left'>
            <img src={linkedinImg} alt='linkedin icon' />
            <div className='header__search'>
                <SearchIcon />
                <input type='text' />
            </div>
        </div>
        <div className='header__right'>
            <HeaderOption title='Home' Icon={HomeIcon}/>
            <HeaderOption title='My Network' Icon={SupervisorAccountIcon}/>
            <HeaderOption title='Jobs' Icon={BusinessCenterIcon}/>
            <HeaderOption title='Messaging' Icon={ChatIcon}/>
            <HeaderOption title='Notifications' Icon={NotificationsIcon}/>
            <HeaderOption avatar={true} onClick={logoutHandler} title="me"/>
        </div>
    </div>
  )
}

export default MainHeader
