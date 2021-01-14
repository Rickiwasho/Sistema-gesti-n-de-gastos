import React from "react";
import Dashboard from "./Components/Dashboard";
import Obra from "./Components/Obra";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './App.css';

export default class App extends React.Component{
  render(){
    return (
    <>
     <Dashboard/>
     <Obra/>
    </>
    );
  }
}
