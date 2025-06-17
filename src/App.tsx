import './App.css'
import Login from './pages/login/Login'
import Tarefa from './pages/tarefa/Tarefa'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      
        <Home
          titulo="Título da Postagem 01"
          texto="Texto da Postagem 01"
        />
     

      {<Contador />}

     {<Tarefa/>}

     <Login />
    </>
  )
}

export default App
