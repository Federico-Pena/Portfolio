import Proyecto from './Proyecto'
import './Proyecto.css'
import proyectosJson from '/proyectos.json'
function Proyectos() {
	const proyectos = proyectosJson.proyectos
	return (
		<section id='proyectos'>
			<h3>Proyectos</h3>
			<div className='proyectosContainer'>
				{proyectos.map((proyecto) => (
					<Proyecto proyecto={proyecto} key={proyecto.titulo} />
				))}
			</div>
		</section>
	)
}

export default Proyectos
