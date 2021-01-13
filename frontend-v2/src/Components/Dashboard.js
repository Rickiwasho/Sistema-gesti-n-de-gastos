import React from "react";
import axios from "axios";

import '../App.css';

export default class Dashboard extends React.Component{

  state = {
    obras: [],
  };

  componentDidMount(){
    axios.get("http://localhost:3001/api/obra").then(res => {
      console.log(res);
      this.setState({ obras: res.data.obras});
    })
  }

  render(){
    return (
    <div>
      <h2>Obras Activas</h2>
        <table>
          <th>Nombre</th><th>Ubicación</th><th>Gastos acumulados</th>
          {this.state.obras.map(obra => <tr><td>{obra.nombre}</td><td> {obra.ubicacion}</td><td>0$</td></tr>)}
        </table>
    </div>
    );
  }
}
