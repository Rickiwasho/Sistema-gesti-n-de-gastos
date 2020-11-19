import React from 'react'
import {Button} from './Button'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subsciptions'>
                <p className='footer-subscription-heading'>
                    Suscríbete a nuestro newsletter para recibir nuestras noticias
                </p>
                <p className='footer-subscription-text'>
                    Puedes desuscribirte cuando quieras!
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email'name='email' placeHolder='Tu email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Suscríbete</Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
export default Footer;