import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div>
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      
      <Wrapper>
        <Header />
        <Route exact path="/" component={Main} />
      </Wrapper>
      
    </div>
    </Router>
    </div>
  );
}

export default App;
