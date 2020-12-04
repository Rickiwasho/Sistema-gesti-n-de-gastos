
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from '../src/components/reportWebVitals';
import reducer, { initialState } from "../src/components/reducer";
import { StateProvider } from '../src/components/StateProvider';;

ReactDOM.render(
  <React.StrictMode>
    {/* initialState: what does the data looks like in the beginning. */}
    {/*  reducer: how i manipulate data or plays with the datalayer */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>


  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();