import React from 'react';
import Header from './components/HeaderComponent';
import Coder from './components/CoderComponent';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Header />
        <Route path="/">
            <Coder />
        </Route>
      </div>
    </Router>

  );
}

export default App;
