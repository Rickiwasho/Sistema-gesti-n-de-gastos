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
import Inicio from './components/pages/system/Inicio';
import {auth} from './components/firebase';
import { useStateValue } from './components/StateProvider';


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
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/nosotros' component={Nosotros} />
        <Route path='/obras' component={Obras} />
        <Route path='/servicio' component={Servicio} />
        <Route path='/contacto' component={Contacto} />
        <Route path='/ingresa' component={Ingresa} />
        <Route path='/inicio' component={Inicio} />
        
      </Switch>

    </Router>
    </>
  );
}

export default App;
