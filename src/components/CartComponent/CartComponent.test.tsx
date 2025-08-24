import React from 'react';
import ReactDOM from 'react-dom';
import CartComponent from './CartComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CartComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});