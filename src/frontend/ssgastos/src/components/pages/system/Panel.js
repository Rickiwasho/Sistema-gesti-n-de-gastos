import React, {useState, useEffect} from 'react';
import {Button} from '../../Button';
import { Link } from 'react-router-dom';

import './Panel.css';

function Panel() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else {
            setButton(true);
        }
    };
    useEffect(() =>{
        showButton();
    },[]);
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className = 'tabs'>
                <div className='tabs-container'>
                    <Link to="/inicio" className="tab-logo" onClick={closeMobileMenu}>
                        <i class="fas fa-drafting-compass"/>
                    </Link>
                    <ul >
                        <li className='elem-tab'>    
                            <Link to='/'>
                                Obras
                            </Link>

                        </li>
                        <li className='elem-tab'>    
                            <Link to='/'>
                                Obra
                            </Link>

                        </li>
                        <li className='elem-tab'>    
                            <Link to='/'>
                                Obra
                            </Link>

                        </li>
                        <li className='elem-tab'>    
                            <Link to='/'>
                                Cerrar sesión
                            </Link>

                        </li>
                        
                        

                    </ul>

                </div>
            </nav>
        </>
    );
}

export default Panel;