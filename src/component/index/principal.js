import React from 'react'
import { NavBar } from '../navbar/navbar'
import { Program } from './program'

export const Principal = () =>{
    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <Program/>
            </div>
        </div>
    )
}