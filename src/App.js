import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Dialogs from './components/Dialogs';
import Profile from './components/Profile';
import News from './components/News'
import Music from './components/Music'
import Settings from './components/Settings'
import { Route, BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News}  />
          <Route path="/music" component={Music} />
          <Route path="/settings"component={Settings} />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
