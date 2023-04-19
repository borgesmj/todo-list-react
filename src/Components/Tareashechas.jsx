import React from 'react'



const Tareashechas = ({title, date, description, id, eliminarHecho}) => {

   
    
    const handleEliminar = () => {
        const mensaje = confirm('¿Desea eliminar esta tarea?')
        if (mensaje) {
            eliminarHecho(id)
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
                        {title}
                    </span>
                </p>
                <p 
                className="font-bold mb-3 text-gray-700 uppercase"
                >
                    Fecha:{' '}
                    <span className="font-normal normal-case">
                       {date}
                    </span>
                </p>
                <p 
                className="font-bold mb-3 text-gray-700 uppercase"
                >
                    Comentario:{' '}
                    <span className="font-normal normal-case">
                        {description}
                    </span>
                </p>
                <div className='flex mt-6 content-center justify-center'>
                    <button
                        className='bg-red-400 py-2 px-3 rounded-xl font-bold uppercase hover:bg-red-600'
                        onClick={handleEliminar}
                    >
                        Eliminar
                    </button>
                </div>

    </div>
  )
}

export default Tareashechas