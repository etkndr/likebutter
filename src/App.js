import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Header from './components/Navigation/Header';
import Breakfast from "./components/Menus/Breakfast"
import Taco from "./components/Menus/Taco"
import Sandwich from "./components/Menus/Sandwich"
import Southern from './components/Menus/Southern';
import Footer from './components/Footer';
import Gallery from "./components/Gallery"
import Booking from './components/Booking';

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
        <Route path="/gallery">
          <Gallery/>
        </Route>
        <Route path="/booking">
          <Booking/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
