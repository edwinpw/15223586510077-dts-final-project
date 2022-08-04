import './App.css';

import {useContext} from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {UserContext} from './context/UserContext';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {
  const {user} = useContext(UserContext); 
  return (
    <div className="App">
     <div className="maincontainer">
            <div id="preloder">
              <div className="loader"></div>
            </div>
            <BrowserRouter>
              <Routes>
            { user && <Route path="/" element={<Home/>} /> }
            {!user && (
              <>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Register/>} />
              {/* <Route path="/signup" element={<Register/>} /> */}
              </>
            )}
            <Route path="*" element={<Navigate to={user ? '/':'/'} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;