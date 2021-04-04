import React, { createContext, useState } from 'react';
import FakeDataLoad from './Components/FakeDataLoad/FakeDataLoad';
import './App.css'
import Nav from './Components/Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import HotelBook from './Components/HotelBook/HotelBook';
import Login from './Components/Auth/Login';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';

export const userContext = createContext();
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Nav></Nav>
      <Switch>
        <Route path="/home">
        <FakeDataLoad></FakeDataLoad>
        </Route>
        <Route exact path="/">
        <FakeDataLoad></FakeDataLoad>
        </Route>
        <Route path="/book/:id">
          <Booking></Booking>
        </Route>
        <PrivetRoute path="/hotel/:id">
          <HotelBook></HotelBook>
        </PrivetRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
};

export default App;
