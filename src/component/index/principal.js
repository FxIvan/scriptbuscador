import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Principal = () =>{

    const [ code , setCode ] = useState([])
    const [busqueda , setBusqueda ] = useState("")
    const [ palabraClaves , setPalabrasClaves ] = useState([])
    


    /*********************************************HACIENDO PETICIONES******************************************* */

    const getProgram = async()=>{
        await axios.get('http://localhost:3050/load')
        .then((res)=>{
            setCode(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    
    }

    useEffect(()=>{
        getProgram()
    },[])

    /*********************************************SEPARACION DE RENGLONES******************************************* */


        const resultado = code.map(result=>{
            return result.codigo
        })
  
    
       const stringResultado = resultado.toString()
    
       const arrayFin = stringResultado.split('\n')

    /*********************************************BUSCADOR******************************************* */

    const handleChange = (e) =>{
        setBusqueda(e.target.value)
        filtrado(e.target.value)
    }


    const filtrado = (letra) =>{
        const resultadoSearch = arrayFin.filter(elemento=>{
            if(elemento.toString().toLowerCase().includes(letra.toLowerCase())){
                    return elemento
            }
        })
        /* TENGO QUE TRATAR DE METER ESTO DE UNA MANERA GLOBAL */
        setPalabrasClaves(resultadoSearch)
    }


     /*********************************************BUSCADOR******************************************* */

     console.log(palabraClaves)

    return(
        <div className='col-6'>
            <Link to={'/load'}>Cargar Programa</Link>

            <input type="text" className="form-control inputBuscar" value={busqueda} placeholder="Búsqueda por Palabra Claves" onChange={handleChange}/>
        
           
            {                
               <p>{palabraClaves.map(palabras=>(
                   <div>
                       <p>{palabras}</p>
                   </div>
               ))}</p>
            }
            <h3>Separacion de Programas</h3>
            {
            arrayFin.map(elemento=>(
                        <div key={elemento._id}>
                            {/*<h2>Nombre del Programa: {elemento.nombre}</h2>*/}
                                <div>
                                    <p>{elemento}</p>
                                </div>
             
                            </div>
                        ))
            }
        </div>
    )
}
