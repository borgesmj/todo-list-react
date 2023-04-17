import { useState, useEffect } from 'react'
import Formulario from './Components/Formulario'
import ListadoPendientes from './Components/ListadoPendientes'
import Header from './Components/Header'
import Listadohechos from './Components/Listadohechos'
import Instrucciones from './Components/Instrucciones'




function App() {
//========================================================================================================#
//States inicialies de los elementos en los componentes                                                   #
//========================================================================================================#
  const [pendientes, setPendientes] = useState([])
  const [pendiente, setPendiente] = useState({})
  const [mensaje, setMensaje] = useState(false)
  const [status, setStatus] = useState(false)
//========================================================================================================#
//al no tener un parámetro este useEffect, (llaves vacias), se ejecuta cada vez que el componente cargue,=#
//por lo tanto, cada vez revisa si hay datos en el LocalStorage y los convierte  a arreglos               #
//========================================================================================================#

  useEffect(() => {
    const obtenerLS = () => {
      const pendientesLS = JSON.parse(localStorage.getItem('pendientes')) ?? []

      setPendientes(pendientesLS)
    }

    obtenerLS()
  },[])

//===========================================================================================
//useEffect es un excelente metodo para guardar en LocalStorage, ya que se aplicada cada vez que se realice un cambio
//=========================================================================================================
  useEffect (() => {
      // console.log('componente listo o cambio pendiente')
      localStorage.setItem('pendientes', JSON.stringify( pendientes ));
  },[pendientes])

//===========================================================================================================
//funcion para eliminar una tarea de la lista, envia via props a listadoPendientes con un id de parametro
//============================================================================================================
  const eliminarPendiente = (id) => {
    const pendientesActualizados = pendientes.filter(pendiente => pendiente.id !== id)

    setPendientes(pendientesActualizados)
  }
//==============================================================================================================
//funcion para ver o quitar las instrucciones cada vez que se hace click en el boton
//============================================================================================================== 
  const verInstrucciones = (e) => {
    e.preventDefault();
    setMensaje(!mensaje)
  }
//====================================================================================================
//marcar una tarea como hecha
//===========================================================================================================

  
  return (
    <div className="App">
      <Header/>
     
      <div className='w-1/5'>
          <form 
          >
            <input 
              type="submit" 
              value={mensaje ? 'cerrar' : "ver Instrucciones"} 
              onClick={verInstrucciones}
              className='bg-indigo-500 cursor-pointer uppercase p-3 ml-5 mt-5 w-full  rounded-3xl hover:bg-indigo-700 text-white sm:text-xs'
            />
          </form>
      </div>
      {mensaje && <Instrucciones/>}
      <div className='container  mt-20 flex lg:content-between xl:flex-row sm:flex-col'>
          <Formulario
            pendientes={pendientes}
            setPendientes={setPendientes}
            pendiente = {pendiente}
            setPendiente={setPendiente}
          />
          <ListadoPendientes
            pendientes = {pendientes}
            setPendiente = {setPendiente}
            eliminarPendiente = {eliminarPendiente}
            status = {status}
            setStatus = {setStatus}
          />
          <Listadohechos/>
      </div>
      
    </div>
  )
}

export default App
