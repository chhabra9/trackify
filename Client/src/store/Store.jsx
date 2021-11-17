//jshint esversion:8
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
}from "react-router-dom";


const App = () => {
  const user=false;
 return(
  <Router>

    <Switch>
      <Route  exact path="/store">
        <Home />
      </Route>
      <Route exact path="/store/products/:category">
        <ProductList />
      </Route>
      <Route path="/store/product/:id">
        <Product />
      </Route>
      <Route path="/store/success">
        <Success />  
    </Route>
    </Switch>
    
  </Router>
 );
   
};

export default App;
