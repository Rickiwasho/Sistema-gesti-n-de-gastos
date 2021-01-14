import React, {useState} from 'react';
import {useParams} from 'react-router-dom';


function Obra() {

    let { id } = useParams();

    return (
        <>
            Hola, {id}
        </>
    )
}

export default Obra;