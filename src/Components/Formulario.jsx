import { useState, useEffect } from "react";
import Errores from './Errores'




const Formulario = ({pendientes, setPendientes, pendiente, setPendiente }) => {
    const [tarea, setTarea] = useState('')
    const [fecha, setFecha] = useState('')
    const [comentario, setComentario] = useState('')
    const [error, setError] = useState(false)

    useEffect(()=> {
        if( Object.keys(pendiente).length > 0){
            setTarea(pendiente.tarea);
            setFecha(pendiente.fecha);
            setComentario(pendiente.comentario)
        }

    }, [pendiente])
    


    const generarID = () => {
        const numero = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36).substring(2)

        return numero + fecha
    }


    const handleSubmit = (e) => {
        //==============================================================
        // al hacer click en el boton
        //==============================================================
        e.preventDefault();

        //==============================================================
        // Validar que el formulario esté completo
        //==============================================================

        if ([tarea, fecha, comentario].includes('')){
            setError(true)
            return
        }  setError(false)

           
        //==============================================================
        // Crear un nuevo objeto con los valores
        //==============================================================
        const objetoPendiente = {
            tarea,
            fecha,
            comentario,
            // id: generarID()
        }

        //==============================================================
        // verificar si se está registrando nuevo registro o editando uno existente
        //==============================================================

        if (pendiente.id){
            objetoPendiente.id = pendiente.id

            const pendienteActualizado = pendientes.map (pendienteState => pendienteState.id ===
                 pendiente.id ? objetoPendiente : pendienteState)

                 setPendientes(pendienteActualizado)
                 setPendiente({})

        } else {
            objetoPendiente.id = generarID();
            setPendientes([...pendientes, objetoPendiente])
        }
                
        //==============================================================
        // llevar el formulario a valor inicial
        //==============================================================
        setTarea('');
        setFecha('');
        setComentario('')
    }

  return (
    <div className='ml-5 mr-5 lg:w-1/3 md:w-full'>
        <h1 className='text-xl'>Agrega un nuevo <span className='text-indigo-600 font-bold'>Pendiente</span></h1>
        <br />
        <form 
            onSubmit={handleSubmit}
            action=""
            className= 'bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
            {error && <Errores
                    mensaje='Todos los campos son obligatorios'
                  />   }
            <div className='mb-5'>
                <label 
                    htmlFor='tarea'
                    className='block text-gray-700 uppercase font-bold' 
                >
                    Tarea:
                </label>
                <input 
                    type="text" 
                    name="tarea" 
                    id='tarea'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400'
                    placeholder='Ingresa tu tarea pendiente.'
                    value={tarea}
                    onChange={(e)=>setTarea(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label 
                    htmlFor='fecha'
                    className='block text-gray-700 uppercase font-bold' 
                >
                    Fecha de Entrega:
                </label>
                <input 
                    type="date" 
                    name="fecha" 
                    id='fecha'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400'
                    value={fecha}
                    onChange={(e)=>setFecha(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label 
                    htmlFor='comentario'
                    className='block text-gray-700 uppercase font-bold' 
                >
                    Comentarios:
                </label>
                <textarea 
                    type="text" 
                    name="tarea" 
                    id='comentario'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400'
                    placeholder='Agrega un comentario o dato extra. ej: prioridad, persona a cargo.'
                    value={comentario}
                    onChange={(e)=>setComentario(e.target.value)}
                    rows="4"
                />
            </div>
            <div>
                <input 
                type="submit"
                className='bg-indigo-600 w-full p-3 text-white uppercase 
                font-bold hover:bg-indigo-700 cursor-pointer transition-all'
                value={pendiente.id ? 'Guardar cambios' : 'Agregar nuevo pendiente'} 
                />
            </div>
        </form>
    </div>
  )
}

export default Formulario