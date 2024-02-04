import './App.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Proyectos from './components/Proyectos/Proyectos'
import SobreMi from './components/SobreMi/SobreMi'
import Herramientas from './components/Herramientas/Herramientas'

function App() {
  return (
    <main className='main'>
      <NavBar />

      <Hero />
      <Proyectos />
      <Herramientas />
      <SobreMi />
    </main>
  )
}
export default App
