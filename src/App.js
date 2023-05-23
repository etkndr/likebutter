import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import LandingPage from "./components/LandingPage"
// import Navigation from "./components/Navigation"
import Header from './components/Navigation/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/"><LandingPage/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
