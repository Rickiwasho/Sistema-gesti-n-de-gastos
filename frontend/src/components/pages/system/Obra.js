import React, {useState} from 'react';


function Obra() {

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2020/05/12/elon-musk-director-de-testa-y-spacex.jpeg',
        },
        {
            name: 'Jeff Bezos',
            url: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg',
        },
    ]);


    return (
        <span className='obra'>
            <span className='tinderCards-cardContainer'>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
            </span>
        </span>
    )
}

export default Obra;