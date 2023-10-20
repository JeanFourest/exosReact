import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
function App() {

  return (
    <div className='app'>
      <Link to="/todo">TODO</Link>
      <Link to="/compteur">COMPTEUR</Link>
      <Link to="/profil/1">PROFIL</Link>
    </div>
  )
}

export default App;
