import React from 'react';
import '../App.css';
import {Button} from './Button';
import './ImageSlider.css';

function ImageSlider () {
    return (
        <div className = 'image-container'>
            <h1>LOREM IPSUM</h1>
            <p>how deep is your love?</p>
            <div className='image-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    EL PEPE
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>
                    ETESHECH
                </Button>
            </div>
        </div>
    );
}

export default ImageSlider;
