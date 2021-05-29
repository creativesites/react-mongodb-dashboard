import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import "./i18n";
import * as serviceWorker from './serviceWorker';
//import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <BrowserRouter basename="/Fundacion/">
    
    <App />
  </BrowserRouter>,
  
 document.getElementById('root'));

serviceWorker.unregister();


 {/* */}