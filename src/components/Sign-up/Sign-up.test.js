import React from 'react'
import ReactDOM from 'react-dom';
import SignUp from './Sign-up';
import { BrowserRouter as Router } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (
            <Router>
            <SignUp />
            </Router>
            , div);
    ReactDOM.unmountComponentAtNode(div);
  });


