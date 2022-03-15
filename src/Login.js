import React from 'react';
import firebase  from './Firebase/firebase';
import './App.css';

function Login() {

    const SignInWithFirebase = () => {
        let google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
        .then((re) => {
            console.log(re);
        }).catch((err) => {
            console.log(err);
        })
    }

  return (
    <div>
        <button onClick={SignInWithFirebase} >Sign In with Google</button>
    </div>
  )
}

export default Login