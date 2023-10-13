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
            <a href='#sobreMi'>Sobre mí</a>
          </li>
        </ul>
      </nav>
      <div className='progressBar'></div>
    </header>
  )
}

export default NavBar
