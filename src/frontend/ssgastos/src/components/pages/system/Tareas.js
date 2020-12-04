import React from 'react';
import './Tareas.css';
import { Button } from '../../Button';


function Tareas({title}) {
    // Tareas es un ítem de mis obras, hasta el momento despliega
    // un título y la opción de modificarla
    return (
        

        <div className='tareas'>
            
            <div className='tarea-info'>
                <p>{title}</p>
            </div>
            <Button buttonSize='btn--medium' buttonStyle='btn--test'>Agregar gasto</Button>
            <Button buttonSize='btn--medium' buttonStyle='btn--test'>Editar obra</Button>
            <Button buttonSize='btn--medium' buttonStyle='btn--test'>Archivar obra</Button>
            <Button buttonSize='btn--medium' buttonStyle='btn--test'>Eliminar</Button>

        </div>
    )
}

export default Tareas
