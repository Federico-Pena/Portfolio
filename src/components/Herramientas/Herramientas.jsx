import './herramientas.css'
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai'
import { LiaNode } from 'react-icons/lia'
import { BiLogoCss3, BiLogoJavascript, BiLogoMongodb } from 'react-icons/bi'
import { BsGit } from 'react-icons/bs'
import { SiExpress, SiOpenai, SiReact, SiSass } from 'react-icons/si'

function Herramientas() {
  return (
    <section id='herramientas'>
      <div className='bgHerramientas'></div>
      <h3>Herramientas</h3>
      <div>
        <ul className='listaHerramientas'>
          <li>
            <AiFillHtml5 />
            HTML
          </li>
          <li>
            <BiLogoCss3 />
            CSS
          </li>
          <li>
            <BiLogoJavascript />
            JavasScript
          </li>
          <li>
            <BsGit />
            Git
          </li>
          <li>
            <AiFillGithub />
            GitHUb
          </li>
          <li>
            <LiaNode />
            Node
          </li>
          <li>
            <BiLogoMongodb />
            MongoDB
          </li>
          <li>
            <SiExpress />
            Express
          </li>
          <li>
            <SiSass />
            Sass
          </li>
          <li>
            <SiReact />
            React
          </li>
          <li>
            <SiOpenai />
            OpenAi
          </li>
          <li>
            <a href='https://squoosh.app/' target='_blank' rel='noopener noreferrer'>
              <img
                loading='lazy'
                className='squoosh'
                src='/assets/squoosh.webp'
                alt='Logo Empresa Squoosh'
                title='Logo Empresa Squoosh'
              />
              Squoosh
            </a>
          </li>
          <li>
            <a href='https://www.gimp.org/' target='_blank' rel='noopener noreferrer'>
              <img
                loading='lazy'
                src='/assets/gimp.webp'
                alt='Logo Empresa Gimp'
                title='Logo Empresa Gimp'
              />
              Gimp
            </a>
          </li>
          <li>
            <a href='https://icon.kitchen/' target='_blank' rel='noopener noreferrer'>
              <img
                loading='lazy'
                src='/assets/iconKitchen.png'
                alt='Logo Empresa icon Kitchen'
                title='Logo Empresa icon Kitchen'
              />
              IconsKitchen
            </a>
          </li>
          <li>
            <a href='https://colorhunt.co/' target='_blank' rel='noopener noreferrer'>
              <img
                loading='lazy'
                src='/assets/colorHunt.webp'
                alt='Logo Empresa color Hunt'
                title='Logo Empresa color Hunt'
              />
              ColorHunt
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Herramientas
