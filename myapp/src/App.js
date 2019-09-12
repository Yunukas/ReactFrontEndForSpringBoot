import React from 'react';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper">
        <a href="/" className="brand-logo"><i className="material-icons">cloud</i>Contacts</a>
        </div>
      </nav>
      <div className="row">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
