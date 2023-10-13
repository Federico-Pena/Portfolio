import { BiLogoLinkedinSquare, BiMailSend } from 'react-icons/bi'
import './Hero.css'
import { useEffect, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'

function Hero() {
  const [palabra, setPalabra] = useState('Programador')
  useEffect(() => {
    const arraypalabras = ['Programador', 'Apasionado', 'Versátil', 'Creativo', 'Resolutivo']
    let index = 0
    const interval = () =>
      setInterval(() => {
        if (index < 4) {
          index += 1
        } else {
          index = 0
        }
        setPalabra(arraypalabras[index])
      }, 4000)
    interval()
    return clearInterval(interval)
  }, [])
  return (
    <>
      <div className='background'></div>
      <section className='hero'>
        <h1>
          Mi Nombre es <span className='nombre'>Federico</span>
        </h1>
        <h2 className='parrafo'>
          Desarrollador con experiencia en HTML, CSS y JavaScript. Mi enfoque versátil me ha llevado
          a explorar frameworks modernos como React, que me permiten crear aplicaciones web
          interactivas e intuitivas.
        </h2>
        <div className='btns'>
          <a href='https://github.com/Federico-Pena' target='_blank' rel='noopener noreferrer'>
            <AiFillGithub />
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/federico-pena-correa-29349324b/'
            target='_blank'
            rel='noopener noreferrer'>
            <BiLogoLinkedinSquare />
            LinkedIn
          </a>
          <a href={`mailto:federpena22@gmail.com`} target='_blank' rel='noopener noreferrer'>
            <BiMailSend />
            Email
          </a>
        </div>
        <h3 className='palabras'>{palabra}</h3>
      </section>
    </>
  )
}

export default Hero
