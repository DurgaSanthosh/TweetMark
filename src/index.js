import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  BaseContextProvider } from './utils/baseContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BaseContextProvider>
  <App />
 </BaseContextProvider>
   
  
);


