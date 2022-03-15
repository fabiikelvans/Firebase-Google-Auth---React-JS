import React from 'react';
import firebase  from './Firebase/firebase';
import './App.css';


function Home() {

    const signOut = () => {
        firebase.auth().signOut();
    }
  return (
    <div>
        <h1>Homepage</h1>
        <button onClick={signOut}> Sign Out </button>
    </div>
  )
}

export default Home