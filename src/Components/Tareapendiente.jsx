import React from 'react'

const Tareapendiente = ({pendiente, setPendiente, eliminarPendiente}) => {
        const {tarea, fecha, comentario, id} = pendiente

        const handleEliminar = () => {
            const respuesta = confirm('¿Deseas eliminar esta tarea?')

            if (respuesta){
                eliminarPendiente(id)
            }
        }
  return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl" >
                {/* impresiones en la pantalla */}

                <p 
                    className="font-bold mb-3 text-gray-700 uppercase"
                >
                    Tarea:{' '}
                    <span className="font-normal normal-case">
                        {tarea}
                    </span>
                </p>
                <p 
                    className="font-bold mb-3 text-gray-700 uppercase"
                >
                    Fecha:{' '}
                    <span className="font-normal normal-case">
                        {fecha}
                    </span>
                </p>
                <p 
                    className="font-bold mb-3 text-gray-700 uppercase"
                >
                    Comentario:{' '}
                    <span className="font-normal normal-case">
                        {comentario}
                    </span>
                </p>
                
                <div className=' mt-6 flex flex-row content-center'>

                    <button
                        className='bg-green-200 py-2 px-3 rounded-xl font-bold uppercase hover:bg-green-600 '

                    >
                        Realizado
                    </button>
                    <button
                        className='bg-yellow-200 py-2 px-3 rounded-xl font-bold uppercase hover:bg-yellow-600'
                        onClick={() => setPendiente(pendiente)}
                    >
                        Editar
                    </button>
                    <button
                        className=' bg-red-200 py-2 px-3 rounded-xl font-bold uppercase hover:bg-red-600'
                        onClick={handleEliminar}
                    >
                        Eliminar
                    </button>
                    
                </div>

        </div>
  )
}

export default Tareapendiente