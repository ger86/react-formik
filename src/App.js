import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileForm from './ProfileForm';
import ProfileFormHOC from './ProfileFormHOC';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="wrapper">
          <div className="half">
            <ProfileForm></ProfileForm>
          </div>
          <div className="half">
            <ProfileFormHOC></ProfileFormHOC>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
