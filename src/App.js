import MainLoader from "./components/MainLoader";
import Error from "./components/Error";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Society from "./components/Society";
import Members from "./components/Members";
import Publication from "./components/Publication";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <MainLoader />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/society1" component={Society} />
          <Route exact path="/society1/member" component={Members} />
          <Route exact path="/publication" component={Publication} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/error" component={Error} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
