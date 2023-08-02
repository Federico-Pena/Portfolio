import './SobreMi.css'
import { BiMailSend } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'

function SobreMi() {
	return (
		<section id='sobreMi'>
			<h3>Sobre Mi</h3>
			<ul>
				<li>
					Sumada a la experiencia mencionada antes, cuento con conocimientos en
					el desarrollo de servidores utilizando Node.js y Express, lo que me
					permite construir una sólida base para mis proyectos.
				</li>
				<li>
					Lo que más me motiva es enfrentar desafíos técnicos y encontrar
					soluciones que mejoren la experiencia del usuario. Mi capacidad para
					adaptarme a diferentes tecnologías y aprender nuevas herramientas,
					como MongoDB para bases de datos y Sass para la creación de estilos,
					me ha permitido ampliar mis habilidades y llevar mis proyectos al
					siguiente nivel.
				</li>
				<li>
					Disfruto aprender de perspectivas únicas. Me enorgullece ser parte de
					un campo en constante evolución y me esfuerzo por estar al tanto de
					las últimas tendencias y mejores prácticas en el desarrollo web.
				</li>
				<li>
					Estoy emocionado por las oportunidades que el futuro tiene reservadas
					para mí como desarrollador y espero seguir creciendo en este
					apasionante mundo de la programación. ¡Siempre estoy abierto a nuevas
					oportunidades y desafíos!
				</li>
			</ul>
			<div className='contacto'>
				<a
					href='https://github.com/Federico-Pena'
					target='_blank'
					rel='noreferrer'>
					<AiFillGithub />
					GitHub
				</a>
				<a
					href={`mailto:federpena22@gmail.com`}
					target='_blank'
					rel='noreferrer'>
					<BiMailSend />
					Contáctame
				</a>
			</div>
		</section>
	)
}

export default SobreMi
