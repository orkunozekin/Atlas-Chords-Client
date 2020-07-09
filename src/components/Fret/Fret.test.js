import React from 'react';
import ReactDOM from 'react-dom';
import Fret from './Fret';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Fret string={1} notes={[]} fret={2} name={"hello"} eachNote={{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


