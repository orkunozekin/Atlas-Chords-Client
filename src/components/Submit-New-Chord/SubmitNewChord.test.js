import React from 'react';
import ReactDOM from 'react-dom';
import SubmitNewChord from './SubmitNewChord';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SubmitNewChord />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


