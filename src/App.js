import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Navigation from "./components/Navigation"

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Switch>
        <Route exact path="/" element={<LandingPage/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
