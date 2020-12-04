import React from 'react';
import './Tareas.css';

function Tareas({title}) {
    return (
        



        <div className='tareas'>
            
            <div className='tarea-info'>
                <p>{title}</p>
            </div>
            <button> Modificar</button>
            <button> Add to Basket</button>
            <button> Add to Basket</button>

            
        </div>
    )
}

export default Tareas
