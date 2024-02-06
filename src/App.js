import "./App.css"
import { useLocation } from "react-router-dom/cjs/react-router-dom"
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import LandingPage from "./components/LandingPage"
import Header from "./components/Navigation/Header"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Booking from "./components/Booking"
import Mission from "./components/About/Mission"
import Owners from "./components/About/Owners"
import Service from "./components/About/Service"
import Menus from "./components/Menus"

library.add(fas, faInstagram)

function App() {
  const history = useHistory()

  const location = useLocation()
  const hideNav = location.pathname === "/admin"

  return (
    <BrowserRouter basename="/">
      {!hideNav && <Header />}
      <Switch>
        <Route exact path="/">
          <LandingPage />
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
        <Route path="/menus/:id">
          <Menus />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
