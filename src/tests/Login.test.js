import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login/Login';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const location = { user: { username: 'dunder', password: 1234 } };
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Login location={location} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
