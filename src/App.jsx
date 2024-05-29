import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Listing from "./Components/Listings";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return(
    <div className="App">
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About}/>
      <Route exact path="/listing" component={Listing}/>
      <Route exact path="/contact"  component={Contact} />
    </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App
