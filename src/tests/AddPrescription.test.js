import React from 'react';
import ReactDOM from 'react-dom';
import AddPrescription from '../AddPrescription/AddPrescription';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddPrescription />, div);
  ReactDOM.unmountComponentAtNode(div);
});
