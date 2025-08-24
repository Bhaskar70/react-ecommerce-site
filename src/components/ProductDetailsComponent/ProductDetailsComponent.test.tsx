import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetailsComponent from './ProductDetailsComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductDetailsComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});