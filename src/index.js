import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  BaseContextProvider } from './utils/baseContext';
import { AuthContextProvider } from './utils/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BaseContextProvider>
 <AuthContextProvider>
 <App />
 </AuthContextProvider>
 </BaseContextProvider>
   
  
);


