import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './HeaderComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});