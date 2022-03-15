import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import { useState } from 'react';
import firebase  from './Firebase/firebase';


function App() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      return setIsUserSignedIn(true);
    }
    setIsUserSignedIn(false);
  })

  if(isUserSignedIn === true){
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} /> 
        </Routes>
      </Router>
     );
    }

     else{
      return (
        <Router>
          <Routes>
            <Route path='/' element={<Login/>} /> 
          </Routes>
        </Router>
       );
     }
  }

  


export default App;
