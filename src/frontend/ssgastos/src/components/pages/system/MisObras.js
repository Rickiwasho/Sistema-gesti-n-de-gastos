import React from 'react'
import Tarea from './Tareas';
import './MisObras.css';
import {Button} from '../../Button';


function MisObras() {
    return (
        <div className='particion'>
            <div className='obras-activas'>
                <h1>OBRAS ACTIVAS:</h1>
                <div className='obras-container'>
                    <div className='obra-row'>
                        <Tarea title='Hotel Pedro de Valdivia'/> 
                    </div>

                    <div className='obra-row'>
                        <Tarea title='Cancha de fútbol Lanco'/> 
                    </div>
                    <div className='obra-row'>
                        <Tarea title='Biblioteca Lautaro'/> 
                    </div>
                    <div className='obra-row'>
                        <Tarea  title='Veredas Valdivia' /> 
                    </div>
                    <Button buttonStyle='btn--primary'>Nueva Obra</Button>
                </div>
            </div>
            <div className='cotizaciones'>
                <h1>ÚLTIMAS COTIZACIONES:</h1>
                <div className='cotizaciones-container'>
                    <div className='cotizacion-row'>
                        <table class='tabla-cotizaciones'>
                            <tr>
                                <td>Nombre producto</td>
                                <td>Proveedor</td>
                                <td>Precio</td>
                            </tr>
                        </table>

                        
                    </div>

                </div>

            </div>

        </div>
        
    )
}

export default MisObras
