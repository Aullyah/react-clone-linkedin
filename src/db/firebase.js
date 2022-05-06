import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC3l_inXf-Jl-qoTeClvF4DPbpgvYVGi7Y",
    authDomain: "linkedin-clone-59f9a.firebaseapp.com",
    projectId: "linkedin-clone-59f9a",
    storageBucket: "linkedin-clone-59f9a.appspot.com",
    messagingSenderId: "405423025031",
    appId: "1:405423025031:web:80fa83f965fd5890dfc122"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
// const loginAuth = signInWithEmailAndPassword(firebaseApp);
// const signinAuth = createUserWithEmailAndPassword(firebaseApp);

export {db, auth}