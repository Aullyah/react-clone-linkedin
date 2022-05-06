import React from 'react'
import './../../style/HeaderOption.css'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectuser } from '../../features/counterSlice';

function HeaderOption({ avatar, Icon, title, onClick }) {
  const { user } = useSelector(selectuser);
  // console.log(user);
  return (
    <div className='headerOption' onClick={onClick}>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user.photoUrl ? user.photoUrl : `https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80`}>
          {user?.email}
        </Avatar>
      )}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption