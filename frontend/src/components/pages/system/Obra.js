import React, {useEffect, preventDefault, ClassComponent} from 'react';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import axios from 'axios';

import { withRouter} from 'react-router-dom';

import { render } from '@testing-library/react';

const useStyles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

class Obra extends React.Component {

  state = {
    obras: [],
    gastos: []
  };

  componentDidMount(){
    axios.get("http://localhost:3001/api/obra/" + this.props.match.params.id).then(res => {
      console.log(res);
      this.setState({ obras: res.data.obras});
    });
    axios.get("http://localhost:3001/api/obra/" + this.props.match.params.id + "/gasto").then(res => {
      console.log(res);
      this.setState({ gastos: res.data.gastos});
    });
  }

  render(){
    const { classes } = this.props;
    return (
      <>        
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
                <TableCell align="right">(valor)</TableCell>
              </TableRow>
            ))}
            
          </TableBody>
          
        </Table>
        <div className={classes.seeMore}>
          <Link color="primary" href="#" onClick={preventDefault}>
            Ver más obras...
          </Link>
        </div>
      <Title>Gastos de la obra</Title>
      <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell align="right">Gastos totales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
            {this.state.gastos.map((gasto) => (
              <TableRow key={gasto.id}>
                <TableCell>{gasto.fecha.split("T")[0]}</TableCell>
                <TableCell>{gasto.nombre}</TableCell>
                <TableCell>{gasto.valor}</TableCell>
                <TableCell align="right">(valor)</TableCell>
              </TableRow>
            ))}
            
          </TableBody>
          
        </Table>


      </>
    );
  }
}

export default withRouter(withStyles(useStyles)(Obra));

//export default withRouter(Obra);