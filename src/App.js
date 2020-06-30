import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Favorites from './components/Favorites/Favorites'
import SignUp from './components/Sign-up/Sign-up'
import Main from './Main/Main'
import submitNewChord from './components/Submit-New-Chord/SubmitNewChord'
import LoginForm from './components/LoginForm/LoginForm'
import LandingPage from './components/Landing-Page/LandingPage'
import Chord from './components/Chord/Chord'


function App() {




  return (
    <main className="App">
      <Navbar />
      <Route exact path='/sign-in' component={LoginForm} />
      <Route exact path='/favorites' component={Favorites} />
      <Route exact path='/sign-up' component={SignUp} />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/submitNewChord' component={submitNewChord} />
      {/* <Route exact path='/searchforchord' component={Main}/> */}
      <Route path='/chords/:id' component={Chord}
      
         />
    </main>
  );
}

export default App;
