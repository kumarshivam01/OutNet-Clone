import React from 'react';
import ReactDOM from 'react-dom/client';
 import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
 import { store } from './Redux/store'
import './index.css';
import App from './App';
// <<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
// =======
// import reportWebVitals from './reportWebVitals';

// >>>>>>> 37314e5385b8c2d74b0005caaa768e9873a1c60e
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App'
// import './index.css'
// import { store } from './Redux/store'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//          <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// )
