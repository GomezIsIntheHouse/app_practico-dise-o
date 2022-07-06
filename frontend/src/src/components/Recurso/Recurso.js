//componente para buscar todos los recursos, tomar la seleccion de uno de ellos y setear recurso seleccionado en localStorage
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Navigate } from "react-router-dom";
import RecursoSeleccionado from '../RecursoSeleccionado/RecursoSeleccionado';
import Select from 'react-select'
const Recurso = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [tipoRecurso,SetTipoRecurso]=useState('')
    const [value, setValue] = useState();

    const options = [
      {value:'Tipo recurso 1', label: 'Tipo recurso 1'},
      {value:'Tipo recurso 2', label: 'Tipo recurso 2'},
      {value:'Tipo recurso 3', label: 'Tipo recurso 3'},
    ]
    const onSelectChange=(value)=>{
      SetTipoRecurso(value.value)
      console.log('Valor del tipo de recurso seleccionado',value.value)
      localStorage.setItem('tipoRecurso', value.value)
      setValue(value)
    }
    
  

  return (
    <>
        <h1 className='mt-5 ms-5' >Selección de tipo de recurso</h1>
    <div > 
      <div  style={{width:'300px', margin:'0 auto'}}>
        <Select 
          value={value}
          options={options}
          onChange={onSelectChange}
        />
      </div>
        <>
        {tipoRecurso?<RecursoSeleccionado tipoRecurso={tipoRecurso}/>:<></>}
        </>
    </div>
    </>
  )
}

export default Recurso