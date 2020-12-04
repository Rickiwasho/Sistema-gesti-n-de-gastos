import React from 'react'
import Tarea from './Tareas';

function MisObras() {
    return (
        <div className='obras activas'>
                <h1>Obras activas</h1>
                <div className='inicio-container'>
                    <div className='inicio-row'>
                        <Tarea title='Hotel'/> 
                    </div>

                    <div className='inicio-row'>
                        <Tarea title='Hotel2'/> 
                    </div>
                    <div className='inicio-row'>
                        <Tarea title='Hotel3'/> 
                    </div>
                    <div className='inicio-row'>
                        <Tarea title='Hotel4'/> 
                    </div>
                </div>
        </div>
    )
}

export default MisObras
