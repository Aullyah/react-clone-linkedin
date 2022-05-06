import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../../db/firebase';
import { login } from '../../features/counterSlice';
import '../../style/Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilPic, setProfilPic] = useState("");
    const dispatch = useDispatch();

    const loginHandler = async (e) => {
        e.preventDefault();

        try {
            const userAuth = await signInWithEmailAndPassword(auth, email, password);
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
        } catch (error) {
            alert(error);
        }
    }

    const registerHandler = async () => {
        if (!name) {
            throw alert("Please enter a full Name");
        }

        try {
            const userAuth = await createUserWithEmailAndPassword(auth, email, password);
            userAuth.user.displayName = name;
            userAuth.user.photoURL = profilPic;
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL,
                })
            )
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className='login'>
            <img src='https://vocasia.id/blog/wp-content/uploads/2021/09/Linkedin-Logo-2048x1280.png' alt='' />

            <form>
                <input
                    type='text'
                    placeholder='Full name (required for register)'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <input
                    type='text'
                    placeholder='Profil pic url (optional)'
                    value={profilPic}
                    onChange={(e) => setProfilPic(e.target.value)} />

                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit' onClick={loginHandler}>
                    Sign In
                </button>
            </form>

            <p>
                not a member?
                <span className='login__register' onClick={registerHandler}>Register Now</span>
            </p>
        </div>
    )
}

export default Login