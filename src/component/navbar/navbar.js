import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logobuscador.jpg'

export const NavBar = () =>{
    return(
        <div className='navbar-desktop'>
            <div className='container-fluid d-flex link-logo-desktop'>
            <div className='navbar-desktop-img'>
                <Link to={'/'}><img src={logo}/></Link>
            </div>
            <div className='container-link-desktop'>
                <div className='navbar-link-desktop d-flex justify-content-center'>
                    <Link to={'/load'}><p>Cargar Programa</p></Link>
                </div>
            </div>
            </div>
        </div>
    )
}