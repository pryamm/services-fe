import { Route, Switch } from "react-router";
import Error404 from "./components/Error404";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Tender from "./components/Tender";
import TenderList from "./components/TenderList";
import User from "./components/User";
import UserAccount from "./components/UserAccount";

function App() {
  return (
    <>
      <Navbar/>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route exact path="/tender" component={TenderList}/>
        <Route path="/tender/:id" component={Tender}/>
        <Route exact path="/user" component={UserAccount}/>
        <Route path="/user/:id" component={User}/>
        <Route path="*" component={Error404}/>
      </Switch>
    
    </>
    
  );
}

export default App;
