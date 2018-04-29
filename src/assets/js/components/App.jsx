import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Main from './Main';
import FileUploader from './FileUploader';
import Sidebar from './Sidebar';

export default function App(props) {
  return (
    <Provider store={store}>
      <FileUploader disableClick >
        <BrowserRouter>
          <div className="container-fluid">
            <div className="row">
              <Sidebar {...props} />
              <Main {...props} />
            </div>
          </div>
        </BrowserRouter>
      </FileUploader>
    </Provider>
  );
}
