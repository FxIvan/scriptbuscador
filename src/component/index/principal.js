import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Principal = () =>{

    const [ code , setCode ] = useState([])
    const [ codeSearch , setCodeSearch ]  = useState([])
    const [busqueda , setBusqueda ] = useState("")

    /*********************************************BUSCADOR******************************************* */
    const getProgram = async()=>{
            await axios.get('http://localhost:3050/load')
            .then((res)=>{
                setCode(res.data)
                setCodeSearch(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        
    }
    useEffect(()=>{
        getProgram()
    },[])

    const handleChange = (e) =>{
        setBusqueda(e.target.value)
        filtrado(e.target.value)
    }


    const filtrado = (letra) =>{
        const resultadoSearch = codeSearch.filter(elemento=>{
            if(elemento.codigo.toString().toLowerCase().includes(letra.toLowerCase())){
                    return elemento
            }
        })
        setCode(resultadoSearch)
    }

     /*********************************************BUSCADOR******************************************* */

     const resultado = code.map(result=>{
          return result.codigo
     })

     const stringResultado = resultado.toString()

     const resultadoFinal = stringResultado.split('\n')



    return(
        <div className='col-6'>
            <Link to={'/load'}>Cargar Programa</Link>

            <input type="text" className="form-control inputBuscar" value={busqueda} placeholder="Búsqueda por Palabra Claves" onChange={handleChange}/>
            <input type="text" className="form-control inputBuscar" value={busqueda} placeholder="Divir codigo por" onChange={handleChange}/>

            {
               <p>{code}</p> && resultadoFinal.map(elemento=>(
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
