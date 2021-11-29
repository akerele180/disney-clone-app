import { Route, Switch } from "react-router";
import "./App.css";
import Details from "./components/details/Details";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/details">
          <Details />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
