import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routers from "./components/routes/Routers";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Routers}></Route>
      </Switch>
    </Router>
  );
}

export default App;
