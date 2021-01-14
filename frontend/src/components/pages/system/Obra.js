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

import { render } from '@testing-library/react';

const useStyles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

class Obra extends React.Component {

  state = {
    obras: [],
  };

  componentDidMount(){
    axios.get("http://localhost:3001/api/obra/1").then(res => {
      console.log(res);
      this.setState({ obras: res.data.obras});
    })
  }

  render(){
    const { classes } = this.props;
    return (
      <React.Fragment>        
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
                <TableCell>fecha</TableCell>
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
          
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Obra)
