import React from 'react';
import './Tareas.css';

function Tareas({title}) {
    // Tareas es un ítem de mis obras, hasta el momento despliega
    // un título y la opción de modificarla
    return (
        



        <div className='tareas'>
            
            <div className='tarea-info'>
                <p>{title}</p>
            </div>
            <button> Modificar </button>
            <button> Completar </button>
            <button> Eliminar </button>

            
        </div>
    )
}

export default Tareas
