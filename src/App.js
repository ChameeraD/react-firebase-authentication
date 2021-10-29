import { useState, useEffect } from 'react';

import Login from './components/LoginPage';
import Home from './components/HomePage';
import firebase  from './services/firebase';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  return (
    <div className="app">
      {user ? <Home user={user} /> : <Login/>}
    </div>
  );
}

export default App;