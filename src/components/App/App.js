import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import SignUp from '../Sign-up/Sign-up';
import submitNewChord from '../Submit-New-Chord/SubmitNewChord';
import LoginForm from '../LoginForm/LoginForm';
import LandingPage from '../Landing-Page/LandingPage';
import Chord from '../Chord/Chord';
import PrivateRoute from '../Utils/PrivateRoute';
import Footer from '../Footer/Footer';


export default class App extends React.Component {


  render() {
    return (
      <>
      <Navbar />
      <main className="App">

        <Route exact path='/log-in' component={LoginForm} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/' component={LandingPage} />
        <PrivateRoute exact path='/submitNewChord' component={submitNewChord} />
        <Route path='/chords/:id' component={Chord} />

      </main>
      <Footer />
      </>
    );
  };
}

