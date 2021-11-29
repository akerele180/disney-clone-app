import { Route, Switch } from "react-router";
import "./App.css";
import Details from "./components/details/Details";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

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
      </Switch>
    </div>
  );
}

export default App;
