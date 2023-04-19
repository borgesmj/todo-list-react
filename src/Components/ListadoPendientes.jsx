
import React from 'react'
import Tareapendiente from './Tareapendiente'

const ListadoPendientes = ({pendientes, setPendiente, eliminarPendiente, marcarTareaRealizada}) => {


  return (
    <div  className='w-full xl:w-1/3'>
       <h1 className='text-xl mb-6'>Listado de las tareas <span className='text-indigo-600 font-bold'>Pendientes</span></h1>

          {pendientes.map( (pendiente) => 
            
            (
              <Tareapendiente
                key = {pendiente.id}
                pendiente = {pendiente}
                setPendiente = {setPendiente}
                eliminarPendiente = {eliminarPendiente}
                marcarTareaRealizada = {marcarTareaRealizada}
              />
            )
          )}

        
    </div>
  )
}

export default ListadoPendientes