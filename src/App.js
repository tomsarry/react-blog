import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Posts from "./components/Posts";
import About from "./components/About";
import Article from "./components/Article";

function App() {
  const articles = require("./articles.json").article;
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route
            path="/posts"
            exact={true}
            component={() => <Posts articles={articles} />}
          />
          <Route path="/posts/:id" component={Article} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default App;
