import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Modal from './Modal/Modal';
import TypeIT from './typeit/TypeIT';
import HangMan from './hangman/HangMan';
import Dashboard from './dashboard/Dashboard';
import NavBar from './dashboard/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/typeit" component={TypeIT} />
        <Route exact path="/hangman" component={HangMan} />
        <Route path="/" component={Modal} />
      </Router>
    </div>
  );
}

export default App;
