import React from 'react'

const Instrucciones = (mensaje) => {
  return (
    <div  className='w-4/5 m-auto text-center'>
        <p className='text-lg'>Ingresa la tarea a realizar en el formulario, esta será agregada en la columna del medio, en <span className='font-bold'>PENDIENTES</span>, mientras esté en esa columna, se podra editar o eliminar, luego de que pase a la lista de tareas <span className='font-bold'>HECHAS</span>, quedarán guardadas, o se podrán eliminar.</p>
        
    </div>
  )
}

export default Instrucciones