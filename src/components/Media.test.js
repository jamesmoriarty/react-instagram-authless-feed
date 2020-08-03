import React from 'react';
import ReactDOM from 'react-dom';
import Media from './Media';

it('#render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Media url="https://placeholder.com/640" src="https://via.placeholder.com/640" alt="640x640px image from placeholder.com"/>, div);
});
