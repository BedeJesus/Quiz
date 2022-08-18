import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Components/Content';
import Message from './Components/Message/Message';


function App() {
  return (
    <div>
      <Router>
          <Content />
          <Message/>
      </Router>
    </div>
  );
}

export default App;
