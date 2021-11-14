import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import ProductDetail from "./pages/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/cart' component={Cart} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/products' component={Products} />
          <Route path='/:product_id' component={ProductDetail} />
          <Route path='*' component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
