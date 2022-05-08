import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export const Program = () =>{

    const [ programas , setProgramas ] = useState([])
    const [ filtrarProgram , setFiltrarProgram ] = useState([])

    const [ probando , setProbando ] = useState([])

    const [ buscarPrograma , setBuscarPrograma ] = useState('')


    /************************************************************************ */
        const getProgram = async() =>{
            await axios.get('http://localhost:3050/load')
            .then(resp=>{
                setProgramas(resp.data)
                setFiltrarProgram(resp.data)
            })
            .catch(err=>{
                console.log("Ocurrio este error: " , err)
            })
        }

        useEffect(()=>{
            getProgram()
        })
    /************************************************************************ */

    const handleChange = (e)=>{
        setBuscarPrograma(e.target.value)
        filtrarPrograma(e.target.value)
    }
    
    const filtrarPrograma = (texto) =>{
        const resultadoBusqueda = filtrarProgram.filter(elementos=>{
            if(elementos.nombre.toString().toLowerCase().includes(texto.toLowerCase())){
                return elementos
            }
        })
        setProbando(resultadoBusqueda)
    }


    return(
        <div>
            <div className='container col-md-12 text-center input-desktop m-auto'>
                <input className='' placeholder='¿Que programa estas buscando?' value={buscarPrograma} onChange={handleChange}/>
            </div>
            <div className='col-sm-8 m-auto row text-center'>
                
                {
                    probando.length ?
                    
                    probando.map(result=>(
                        <div className='col-sm-3' key={result._id}>
                        <div className='col-md-3 m-auto programa-link'>
                            <Link to={`/informacion/${result._id}`}><p>{result.nombre}</p></Link>
                        </div>
                    </div>
                    )) :                  
                    programas.map(resp=>(
                        <div className='col-sm-3' key={resp._id}>
                            <div className='col-md-3 m-auto programa-link'>
                                <Link to={`/informacion/${resp._id}`}><p>{resp.nombre}</p></Link>
                            </div>
                        </div>
                    ))    
                }
                    
                
            </div>
        </div>
    )
}