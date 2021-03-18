import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { Store } from "./components/store/Store"
import reportWebVitals from './reportWebVitals';
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
   <Router>
            <Store />

   </Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();