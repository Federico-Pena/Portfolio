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
            <a
              href='https://developer.mozilla.org/es/docs/Web/HTML'
              target='_blank'
              rel='noopener noreferrer'>
              <AiFillHtml5 />
              HTML
            </a>
          </li>
          <li>
            <a
              href='https://developer.mozilla.org/es/docs/Web/CSS'
              target='_blank'
              rel='noopener noreferrer'>
              <BiLogoCss3 />
              CSS
            </a>
          </li>
          <li>
            <a
              href='https://developer.mozilla.org/es/docs/Web/JavaScript'
              target='_blank'
              rel='noopener noreferrer'>
              <BiLogoJavascript />
              JavasScript
            </a>
          </li>
          <li>
            <a href='https://git-scm.com/' target='_blank' rel='noopener noreferrer'>
              <BsGit />
              Git
            </a>
          </li>
          <li>
            <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
              <AiFillGithub />
              GitHUb
            </a>
          </li>
          <li>
            <a
              href='https://developer.mozilla.org/es/docs/Web/API/Node'
              target='_blank'
              rel='noopener noreferrer'>
              <LiaNode />
              Node
            </a>
          </li>
          <li>
            <a href='https://www.mongodb.com/es' target='_blank' rel='noopener noreferrer'>
              <BiLogoMongodb />
              MongoDB
            </a>
          </li>
          <li>
            <a
              href='https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction'
              target='_blank'
              rel='noopener noreferrer'>
              <SiExpress />
              Express
            </a>
          </li>
          <li>
            <a href='https://sass-lang.com/' target='_blank' rel='noopener noreferrer'>
              <SiSass />
              Sass
            </a>
          </li>
          <li>
            <a href='https://es.react.dev/' target='_blank' rel='noopener noreferrer'>
              <SiReact />
              React
            </a>
          </li>
          <li>
            <a href='https://openai.com/' target='_blank' rel='noopener noreferrer'>
              <SiOpenai />
              OpenAi
            </a>
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
