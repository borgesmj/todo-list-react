import React from 'react'
import Tareashechas from './Tareashechas'
import ListadoPendientes from './ListadoPendientes'

const Listadohechos = () => {
  return (
    <div  className='lg:w-1/3 md:w-full'>
      <h1 className='text-xl mb-6'>Listado de las tareas <span className='text-indigo-600 font-bold'>Hechas</span></h1>
      <Tareashechas/>
    </div>
  )
}

export default Listadohechos