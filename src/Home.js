import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    // Navigate to the '/first' route, displaying the First component
    navigate('/first');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Dawood
        </a>
      </header>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;
