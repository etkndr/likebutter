import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Header from './components/Navigation/Header';
import Breakfast from "./components/Menus/Breakfast"
import Taco from "./components/Menus/Taco"
import Sandwich from "./components/Menus/Sandwich"
import Southern from './components/Menus/Southern';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route path="/breakfast">
          <Breakfast/>
        </Route>
        <Route path="/tacos">
          <Taco/>
        </Route>
        <Route path="/sandwiches">
          <Sandwich/>
        </Route>
        <Route path="/southern">
          <Southern/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
