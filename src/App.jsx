import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoTareas from "./components/ListadoTareas";


function App() {

  const [tareas, setTareas] = useState([]);

  return (
    <div className="container mx-auto mt-20">
    <Header />
      <div className="md:flex mt-12">
      <Formulario
        tareas={tareas}
        setTareas={setTareas}
      />
      <ListadoTareas
      tareas={tareas} />
      </div>

    </div>

  )
}

export default App
  