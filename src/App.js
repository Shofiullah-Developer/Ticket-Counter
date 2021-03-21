
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import Destination from './component/Destination/Destination';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';


export const UserContext=createContext();


function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <p>Name:{loggedInUser.name}</p>
    <Router>
    <Header/>
    <Switch>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/login">
        <LogIn/>
      </Route>
      <PrivateRoute path="/destination/:name">
        <Destination/>
      </PrivateRoute>
    </Switch>
</Router>
</UserContext.Provider>
  );
}

export default App;
