import React from 'react'
import ReactDOM from 'react-dom'
import Results from './Results'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Results match={{params: {id: 1}}} notes={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });