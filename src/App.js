import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Multipla from './Multipla';
import Vesti from './Vesti';
import Samovest from './Samovest';
import NotFound from './NotFound';

function App() {
  document.title = 'Multipleks Skleroza Srbija';
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/multiplaskleroza' component={Multipla} />
          <Route exact path='/vesti' component={Vesti} />
          <Route path='/vesti/:id' component={Samovest} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
