import React from 'react';
import Navbar from './Navbar/Navbar';
import { Route } from 'react-router-dom';
import SignIn from '../src/Sign-in/Sign-in'
import Favorites from '../src/Favorites/Favorites'
import SignUp from './Sign-up/Sign-up';
import Main from './Main/Main';


function App() {


  return (
    <section className="App">
      <Navbar />
      <Route exact path='/sign-in' component={SignIn} />
      <Route exact path='/favorites' component={Favorites} />
      <Route exact path='/sign-up' component={SignUp} />
      <Route exact path='/' component={Main}/>
    </section>
  );
}

export default App;
