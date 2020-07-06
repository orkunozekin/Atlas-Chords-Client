import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Favorites from './components/Favorites/Favorites'
import SignUp from './components/Sign-up/Sign-up'
import submitNewChord from './components/Submit-New-Chord/SubmitNewChord'
import LoginForm from './components/LoginForm/LoginForm'
import LandingPage from './components/Landing-Page/LandingPage'
import Chord from './components/Chord/Chord'
import PrivateRoute from './components/Utils/PrivateRoute'


class App extends React.Component {


  render() {
    return (
      //
      <main className="App">
        <Navbar />
        <Route exact path='/log-in' component={LoginForm} />
        {/* <Route exact path='/favorites' component={Favorites} /> */}
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/' component={LandingPage} />
        <PrivateRoute exact path='/submitNewChord' component={submitNewChord} />
        <Route path='/chords/:id' component={Chord} />
      </main>

    );
  }


}

export default App;
