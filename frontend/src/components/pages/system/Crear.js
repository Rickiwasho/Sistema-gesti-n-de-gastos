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


class Crear extends React.Component {

  constructor(props) {
    super(props);
    this.sendobra = this.sendobra.bind(this);
  }

  sendobra(){
    axios.post("http://localhost:3000/api/obra/", {
      "nombre": document.getElementById("nombre").value,
      "ubicacion": document.getElementById("ubicacion").value
    });
  }

  render(){
    const { classes } = this.props;
    return (
      <div style={{'margin': '3em'}}>        
        <br></br>
      <Title>Añadir Nueva Obra</Title>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="nombre" label="Nombre" />
        <TextField id="ubicacion" label="Ubicación" />
      </form>
      <br></br>
        <Button variant="contained" color="primary" href="/Dashboard" onClick={this.sendobra}>
          Añadir Obra
        </Button>
        <span>&nbsp;&nbsp;</span>
        <Button variant="contained" href="/Dashboard">Volver al Dashboard</Button>
        <br></br>
      </div>
    );
  }
}

export default withRouter(withStyles(useStyles)(Crear));

//export default withRouter(Obra);