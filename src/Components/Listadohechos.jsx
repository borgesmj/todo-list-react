import React from 'react'
import Tareashechas from './Tareashechas'
import ListadoPendientes from './ListadoPendientes'

const Listadohechos = ({hechos, eliminarHecho}) => {
  // console.log('array hechos', hechos)  
  
  return (
    <div  className='w-full xl:w-1/3'>
      <h1 className='text-xl mb-6'>Listado de las tareas <span className='text-indigo-600 font-bold'>Hechas</span></h1>
      {
        hechos.map( hecho  => {
          // console.log('Hecho', hecho)
          return  <Tareashechas 
              key={hecho.id} 
              title={hecho.tarea}
              date={hecho.fecha}
              description={hecho.comentario} 
              id={hecho.id}
              eliminarHecho={eliminarHecho}
            />
        }
      )}
    </div>
  )
}

export default Listadohechos