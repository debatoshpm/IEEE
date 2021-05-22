import loader from "./assets/images/loader.png";
import HomeMain from "./components/HomeMain";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import About from "./components/About";
// import Events from "./components/Events";
// import News from "./components/News";
// import Gallery from "./components/Gallery";
// import Achievement from "./components/Achievements";
//import Contact from "./components/Contact";
// import Covid from "./components/Covid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <div className="bg_load">
          <img className="loader_animation" src={loader} alt="#" />
        </div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeMain} />
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/news" component={News} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/achievement" component={Achievement} /> */}
          {/* <Route exact path="/contact" component={Contact} /> */}
          {/* <Route exact path="/covid" component={Covid} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
