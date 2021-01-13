import React from "react";
import axios from "axios";

import './App.css';

export default class App extends React.Component{

  state = {
    obras: [],
  };

  componentDidMount(){
    axios.get("http://localhost:3000/api/obra").then(res => {
      console.log(res);
      this.setState({ obras: res.data.obras});
    })
  }

  render(){
    return (
    <div>
      {this.state.obras.map(obra => <li>{obra.nombre}</li>)}
    </div>
    );
  }
}
