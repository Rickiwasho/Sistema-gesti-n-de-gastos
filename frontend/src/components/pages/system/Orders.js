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

/*
const test = [
  {
    nombre: "Oficinas cocacola",
    ubicacion: "Temuco",
    fecha_i: "2020-10-03"
  },
  {
    nombre: "Hotel Collin",
    ubicacion: "Rio bueno",
    fecha_i: "2020-10-03"
  }
];

// Generate Order Data
function createData(id, date, name, location,  amount) {
  return { id, date, name, location, amount };
}
//const map1 = array1.map(x => x * 2);


const rows = test.map((x, index) =>
  createData(index, x.fecha_i , x.nombre, x.ubicacion, "10 dolares"));

/*
  createData(0, '16 Feb, 2019', test.nombre, test.ubicacion , "174.445.162"),
  createData(1, '01 Mar, 2020', 'Biblioteca Municipal', 'Lautaro, Araucanía', "80.866.099"),
  createData(2, '30 Mar, 2020', 'Cancha Sintética', 'Valdivia, Los Ríos', "15.200.581"),
  createData(3, '18 Jun, 2020', 'Restaurant "Las Brazas"', 'Osorno, Los Lagos', "6.354.349"),
  createData(4, '22 Dic, 2020', 'Puntos ecológicos', 'Panguipulli, Los Ríos', "1.212.379"),
*/
/*

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

*/

const useStyles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

class Orders extends React.Component {

  render(){
    const { classes } = this.props;
    return (
      <React.Fragment>        
        <Title>Obras Activas</Title>
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
            {/*
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
            */}
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


export default withStyles(useStyles)(Orders)

/*

export default function Orders() {
  const classes = useStyles();

  useEffect( async () => {
    try{
        const response = await Api.get("/obra");
        console.log("OBJETO FETCHEADO:");
        console.log("OBJETO FETCHEADO:");
        console.log(response);

    }catch(err) {
        console.log("Error retrieving data from API");
        console.log(err);
    }
}, []);
  
}

*/