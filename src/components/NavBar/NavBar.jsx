import './NavBar.css'

function NavBar() {
	return (
		<header>
			<nav>
				<ul className='ulNav'>
					<li>
						<a href='#proyectos'>Proyectos</a>
					</li>
					<li>
						<a href={'#herramientas'}>Herramientas</a>
					</li>
					<li>
						<a href='#sobreMi'>Sobre mi</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default NavBar
