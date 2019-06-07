import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const id = { params: { id: 1 } };
  ReactDOM.render(
    <BrowserRouter>
      <Dashboard match={id} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
