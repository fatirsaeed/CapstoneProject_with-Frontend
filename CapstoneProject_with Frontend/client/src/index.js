import React from 'react';
import ReactDOM from 'react-dom/client';
import Routers from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';


import { Provider} from 'react-redux';
import ReduxStore from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <Routers />
    </Provider>
    
  </React.StrictMode>
);

