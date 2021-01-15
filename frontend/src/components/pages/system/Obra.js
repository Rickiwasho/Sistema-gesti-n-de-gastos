import React, {useEffect, preventDefault, ClassComponent} from 'react';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Title from './Title';
import axios from 'axios';

import { withRouter} from 'react-router-dom';

import { render } from '@testing-library/react';

const useStyles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

var id = 0;
var total = 0;

class Obra extends React.Component {

  constructor(props) {
    super(props);
    this.sendgastos = this.sendgastos.bind(this);
    this.deletegasto = this.deletegasto.bind(this);
    this.eliminarobra = this.eliminarobra.bind(this)
  }

  state = {
    obras: [],
    gastos: []
  };

  componentDidMount(){
    id = this.props.match.params.id;
    axios.get("http://localhost:3001/api/obra/" + this.props.match.params.id).then(res => {
      console.log(res);
      this.setState({ obras: res.data.obras});
    });
    axios.get("http://localhost:3001/api/obra/" + this.props.match.params.id + "/gasto").then(res => {
      console.log(res);
      this.setState({ gastos: res.data.gastos});
      
      total = 0;
      this.state.gastos.forEach((item, index) => {
        total += parseInt(item.valor);
      });
      
      this.setState({total: total});
    });
  }

  sendgastos(){
    axios.post("http://localhost:3001/api/obra/" + id + "/gasto", {
      "nombre": document.getElementById("nombre").value,
      "valor": document.getElementById("valor").value
    }).then(
      res => {
        this.componentDidMount();
      }
    );
    document.getElementById("nombre").value = "";
    document.getElementById("valor").value = "";
  }

  deletegasto(i){
    console.log("deleting gasto " + i);
    axios.delete("http://localhost:3001/api/obra/" + "1" + "/gasto/" + i ).then(
      res => {
        this.setState({ gastos: this.state.gastos.filter(gasto => gasto.id !== i)});
        this.componentDidMount();
      }
    );
  }

  eliminarobra(i){
    console.log("deleting obra" + i);
    axios.delete("http://localhost:3001/api/obra/" + i ).then(
      res => {console.log(res);}
    );
  }

  render(){
    const { classes } = this.props;
    return (
      <div style={{'margin': '3em'}}>        
        <Title>Detalles de la obra</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Fecha inicio</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Ubicación</TableCell>
              <TableCell align="right">Gastos totales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
            {this.state.obras.map((obra) => (
              <TableRow key={obra.id}>
                <TableCell>{obra.fecha.split("T")[0]}</TableCell>
                <TableCell><Link href={"/Obra/" + obra.id}>{obra.nombre}</Link></TableCell>
                <TableCell>{obra.ubicacion}</TableCell>
                <TableCell align="right">{total}</TableCell>
              </TableRow>
            ))}
            
          </TableBody>
          
        </Table>

              <br></br>

      <Title>Gastos de la obra</Title>
      <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
            {this.state.gastos.map((gasto) => (
              <TableRow key={gasto.id}>
                <TableCell>{gasto.fecha.split("T")[0]}</TableCell>
                <TableCell>{gasto.nombre}</TableCell>
                <TableCell>{gasto.valor}</TableCell>
                <TableCell><span style={{"cursor":"pointer"}} onClick={() => {this.deletegasto(gasto.id)}}>❌</span></TableCell>
              </TableRow>
            ))}
            
          </TableBody>
          
        </Table>

        <br></br>
      <Title>Añadir nuevo gasto</Title>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="nombre" label="Nombre" />
        <TextField id="valor" label="Valor" />
      </form>
      <br></br>
        <Button variant="contained" color="primary" onClick={this.sendgastos}>
          Añadir gasto
        </Button>
        <br></br>
        <br></br>
        <Button variant="contained" color="secondary" href="/Dashboard" onClick={() => {this.eliminarobra(id)}}>
          Eliminar obra
        </Button>
        <br></br>
      </div>
    );
  }
}

export default withRouter(withStyles(useStyles)(Obra));

//export default withRouter(Obra);