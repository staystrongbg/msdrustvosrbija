import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Multipla from './Multipla';
import Vesti from './Vesti';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Samovest from './Samovest';

function App() {
  document.title = 'Multipleks Skleroza Srbija';
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/multiplaskleroza'>
            <Multipla />
          </Route>
          <Route exact path='/vesti'>
            <Vesti />
          </Route>
          <Route path='/vesti/:id'>
            <Samovest />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
