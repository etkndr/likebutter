import "./App.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import LandingPage from "./components/LandingPage";
import Header from "./components/Navigation/Header";
import Breakfast from "./components/Menus/Breakfast";
import Taco from "./components/Menus/Taco";
import Sandwich from "./components/Menus/Sandwich";
import Standard from "./components/Menus/Standard";
import Small from "./components/Menus/Small";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Mission from "./components/About/Mission";
import Owners from "./components/About/Owners";
import Service from "./components/About/Service";
import Holiday from "./components/Menus/Holiday";
import Admin from "./components/Admin";

library.add(fas, faInstagram);

function App() {
  const history = useHistory();

  const location = useLocation();
  const hideNav = location.pathname === "/admin";

  return (
    <BrowserRouter basename="/">
      {!hideNav && <Header />}
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/breakfast">
          <Breakfast />
        </Route>
        <Route path="/tacos">
          <Taco />
        </Route>
        <Route path="/sandwiches">
          <Sandwich />
        </Route>
        <Route path="/standard">
          <Standard />
        </Route>
        <Route path="/small-bites">
          <Small />
        </Route>
        <Route path="/holiday">
          <Holiday />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/mission">
          <Mission />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/owners">
          <Owners />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
