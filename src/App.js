import { useState } from "react"
import { Route, Switch } from "react-router"
import Error404 from "./components/Error404"
import Footers from "./components/Footers"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Navbar from "./components/Navbar"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import TenderDetail from "./components/TenderDetail"
import Tenders from "./components/Tenders"
import User from "./components/User"
import UserAccount from "./components/UserAccount"

function App() {
  const [user, setUser] = useState()
  const userLogin = () => {
    setUser(localStorage.getItem("user"))
  }
  const userLogout = () => {
    setUser(undefined)
  }

  return (
    <>
      <Navbar user={user} userLogout={userLogout}/>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={()=>(<Signin userLogin={userLogin}/>)}/>
        <Route exact path="/tenders" component={Tenders}/>
        <Route exact path="/tenders/:id" component={TenderDetail}/>
        <Route exact path="/users" component={UserAccount}/>
        <Route path="/users/:id" component={User}/>
        <Route path="*" component={Error404}/>
      </Switch>
      <Footers/>
    </>
  )
}

export default App
