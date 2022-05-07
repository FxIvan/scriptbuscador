import React, { useState } from 'react'
import axios from 'axios'

export const Load = () =>{

    const [ form , setForm ] = useState({
        nombre:"",
        codigo:""
    })

    const handleChange= (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log(form)
        await axios.post('http://localhost:3050/load',form)
    }

    console.log(form)

    return(
        <div className='container col-8 m-auto d-flex justify-content-center mt-5'>

            <form className='col-5 mt-5' onSubmit={handleSubmit}>
                <label forHTML="formControlInput" className="form-label">Nombre del programa:</label>
                <input type="text" className="form-control" id="formControlInput" placeholder="Ejemplo: j6lblcub.p" name='nombre' onChange={handleChange}/>
                <div className="form-floating mt-5">
                <textarea className="form-control" id="floatingTextarea" name='codigo' onChange={handleChange}/>
                <div className='d-flex justify-content-center mt-5'>
                    <input type="submit" className='btn btn-success' value="submit"/>
                </div>
                </div>
            </form>

        </div>
    )
}