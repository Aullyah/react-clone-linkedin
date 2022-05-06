import React, { useEffect } from 'react';
import './App.css';
import MainHeader from './components/Header/MainHeader';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectuser } from './features/counterSlice';
import Login from './components/Login/Login';
import { auth } from './db/firebase';
import Widgets from './components/Widgets/Widget';
import LoginHeader from './components/Header/LoginHeader';

function App() {
  const {user} = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      }else{
        dispatch(logout());
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="app">
      {!user ? <LoginHeader/> : <MainHeader />}
      {!user ? <Login /> : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
