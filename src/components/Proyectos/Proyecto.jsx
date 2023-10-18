import './Proyecto.css'
import { AiFillGithub } from 'react-icons/ai'
import { TbWorldWww } from 'react-icons/tb'

function Proyecto({ proyecto }) {
  return (
    <div className='cardProyecto'>
      <h4>{proyecto.titulo}</h4>
      <div className='imgContainer'>
        <img
          loading='lazy'
          src={proyecto.imagen}
          alt={`Portada Proyecto ${proyecto.imagen}`}
          title={`Portada Proyecto ${proyecto.titulo}`}
        />
      </div>
      <div className='contenido'>
        {proyecto.descripcion.split('. ').map((d) => (
          <p key={d}>{d}.</p>
        ))}
      </div>
      <div className='enlaces'>
        <a href={proyecto.deploy} target='_blank' rel='noreferrer'>
          Web
          <TbWorldWww />
        </a>
        <a href={proyecto.gitHub} target='_blank' rel='noreferrer'>
          GitHub
          <AiFillGithub />
        </a>
      </div>
    </div>
  )
}

export default Proyecto
