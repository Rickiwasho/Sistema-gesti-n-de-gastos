import React from 'react';
import '../App.css';
import {Button} from './Button';
import './ImageSlider.css';

function ImageSlider () {
    return (
        <div className = 'image-container'>
            <h1>¡MUCHAS GRACIAS!</h1>
            <p>30 años construyendo junto a ti</p>
            <div className='image-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    IZQ
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>
                    DER
                </Button>
            </div>
        </div>
    );
}

export default ImageSlider;
