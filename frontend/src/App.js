import React, {useEffect} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Nosotros from './components/pages/Nosotros';
import Obras from './components/pages/Obras';
import Ingresa from './components/pages/Ingresa';
import Servicio from './components/pages/Servicio';
import Contacto from './components/pages/Contacto';
import {auth} from './components/firebase';
import { useStateValue } from './components/StateProvider';
import Dashboard from './components/pages/system/Dashboard';
//import Panel from './components/pages/system/Panel';

import Obra from './components/pages/system/Obra';

//import Tareas from './components/pages/system/Tareas';
//import MisObras from './components/pages/system/MisObras';

function App() {

  const [ {}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else{
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <>
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/Dashboard'>
            <Dashboard/>
          </Route>

          <Route path='/Obra'>
            <Obra/>
          </Route>

          {/* Siempre dejar esta ruta al final */}
          <Route path='/'>
            <Ingresa/>
          </Route>
          
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
