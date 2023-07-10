import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundary } from "react-error-boundary"
import LandingPage from './components/LandingPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary
    FallbackComponent={LandingPage}
    onError={(error, errorInfo) => {
    console.log("Error caught!")
    console.error(error) 
    console.error(errorInfo)}}
    onReset={() => {
            // reloading the page to restore the initial state
            // of the current page
            console.log("reloading the page...");
            window.location.reload()}}>
    <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
