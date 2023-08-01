import './App.css'
import { BrowserRouter } from 'react-router-dom'

import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Proyectos from './components/Proyectos/Proyectos'
import SobreMi from './components/SobreMi/SobreMi'
import Herramientas from './components/Herramientas/Herramientas'

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<main className='main'>
				<Hero />
				<Proyectos />
				<Herramientas />
				<SobreMi />
			</main>
		</BrowserRouter>
	)
}
export default App
