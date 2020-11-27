import React, {useState, useEffect} from 'react';
import {Button} from '../../Button';
import {Link} from 'react-router-dom';
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
                    <Link to="/" className="tab-logo" onClick={closeMobileMenu}>
                        <i class="fas fa-drafting-compass"/>

                    </Link>
                    <div className='menu-icon'onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Panel;