import React, {useEffect, preventDefault, ClassComponent} from 'react';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Button from '@material-ui/core/Button';

import { render } from '@testing-library/react';

import Api from './Api';

const useStyles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

class Latest extends React.Component {

  state = {
    obras: [],
    gastos: []
  };

  componentDidMount(){
    Api.get("/obra").then(res => {
      console.log(res);
      this.setState({ obras: res.data.obras});
    })
    Api.get("/gastos").then( res => {
        this.setState({ gastos: res.data.gastos});
    })
  }

  render(){
    const { classes } = this.props;
    return (
      <>        
        <Title>Últimos Gastos Agregados</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Fecha compra</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Obra</TableCell>
              <TableCell>Proveedor</TableCell>
              <TableCell>Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
            {this.state.gastos.map((gasto) => (
              <TableRow key={gasto.id}>
                <TableCell>{gasto.fecha.split("T")[0]}</TableCell>
                <TableCell><Link href={"/obra/" + gasto.obra}>{gasto.nombre}</Link></TableCell>
                <TableCell><Link href={"/obra/" + gasto.obra}>{this.state.obras.find(x => x.id == gasto.obra).nombre}</Link></TableCell>
                <TableCell>{gasto.proveedor}</TableCell>
                <TableCell>$ {gasto.valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  }
}

export default withStyles(useStyles)(Latest)
