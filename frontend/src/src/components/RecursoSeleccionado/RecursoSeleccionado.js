import React, { useState } from 'react'



import { Link, useNavigate  } from 'react-router-dom';
import Select from 'react-select'

const RecursoSeleccionado = ({tipoRecurso}) => {

    let navigate = useNavigate();

    const[recurso,setRecurso]=useState()
    const{value,setValue}=useState()
    console.log(tipoRecurso)

 

    // const SelectRecurso = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    //     <>
    //       <label>{label}</label>
    //       <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
    //         {/* {Array.map(elemento=>{
    //             return(
    //                 <option value={elemento}>{elemento}</option>
    //             )
    //         })} */}

    //         <option value="1">1</option>
    //         <option value="2">2</option>
    //         <option value="3">3</option>

    //       </select>
    //     </>
    //   ));

    const options = [
        {value:'Telescopio', label: 'Telescopio'},
        {value:'Microscopio', label: 'Microscopio'},
        {value:'Barómetro', label: 'Barómetro'},
  
  
      ]
      const onSelectChange=(value)=>{
        setRecurso(value.value)
        
        // console.log('valor del Recurso',value.value)
        localStorage.setItem('recurso', value.value)

      }
  
    return (
        <>
        <h1 className='ms-5 mt-5' style={{fontSize:'30px'}}>Lista de recursos según el tipo seleccionado </h1>
        <div className='ms-5 mt-5'>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Telescopio</td>
                <td>Art.sco</td>
                <td>789b</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Microscopio</td>
                <td>Art.sco</td>
                <td>789a</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td >Barómetro</td>
                <td>Art.sco</td>
                <td>788</td>
                </tr>
            </tbody>
            </table>
                <h5>Selecciona un recurso</h5>
            <div  style={{width:'300px', margin:'0 auto'}}>
                <Select 
                value={value}
                options={options}
                onChange={onSelectChange}
                />

            </div>

            <div>
            {/* <form onSubmit={handleSubmit(onChange)} className='ms-4 mt-5'>
      
                    <SelectRecurso label="Seleccione un recurso" {...register("Recurso")} />

                    <button className='btn btn-info ms-3' type='submit'> Tomar selección</button>
                </form> */}

            </div>

            <>
            {recurso?<div>
                <button className='btn btn-info' onClick={()=>{
                    navigate('/calendar')
                }}>Seleccionar turnos</button>
            </div>:<></>}
            </>
        </div>
        
        </>

    )

//   return (
//     <div>
//         {TipoRecursoSeleccionado?
//         <div>
//              <div className='col-12'>

                 
//             <table className='mt-3 table table-bordered table-hover' >
//                 <thead className='thead-dark'>
//                 <tr>


//                 <th className='head-table'>Recurso Selecionado</th>
//                 <th className='head-table'>Centro</th>
//                 <th className='head-table'>Nro Inventario</th>
//                 <th className='head-table'>Marca</th>
//                 <th className='head-table'>Modelo</th>
//                 <th className='head-table'>Estado</th>

//             </tr>
  
//                 </thead>
//                 <tbody>
//                     {TipoRecursoSeleccionado.map(el=>{
                        
//                         return(

//                             <tr>
//                                 <td className='body-table'>{el.nombre}</td>
//                                 <td className='body-table'>{el.centro}</td>
//                                 <td className='body-table'>{el.nroInventario}</td>
//                                 <td className='body-table'>{el.marca}</td>
//                                 <td className='body-table'>{el.modelo}</td>
//                                 <td className='body-table'>{el.estado}</td>

//                             </tr>
//                         )

//                     })}
//               </tbody>
//                   </table>
//                   </div>  
                    {/* <div>
                    <form onSubmit={handleSubmit(onSubmit)} className='ms-4 mt-5'>

                            <SelectRecurso label="Seleccione un recurso" {...register("Recurso")} />

                            <input type="submit" className='ms-3'/>
                        </form>
                    </div> */}

//         </div>
//         :<><h1 style={{fontSize:'12px'}}>Seleccione un tipo de recurso</h1></>}
//     </div>
//   )
}

export default RecursoSeleccionado