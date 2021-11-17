import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
import ServiceReqList from "./pages/serviceRequestList/serviceReqList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Email from "./pages/newsletterRequest/newsLetterReq";
import Login from "./pages/login/Login";
import Suggestion from "./pages/Suggestion/suggestion";

// import servicesRequest from "./pages/serviceRequest/serviceRequest";

function App() {

 const admin=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser===null?
  false:JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
  console.log(admin);
  // if(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser===null)
  //   const admin=false;}
  // else{
  // const admin=;
  
  // const admin=" ";
  return (
    <Router>
      <Switch>
      <Route exact  path="/login">
            <Login />
          </Route>
 
    
      {admin &&(
        <>
        <Topbar />
      <div className="container">
        <Sidebar />
        
          <Route exact path="/">
          {admin? <Home/>:<Redirect to="/login" />}
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          {/* \ */}
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/serviceRequest">
            <ServiceReqList/>
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/email">
            <Email />
          </Route>
          <Route path="/suggestion">
            <Suggestion/>
          </Route>
      </div>
      </>
      )
    }
      </Switch>
    </Router>
  );
}

export default App;
