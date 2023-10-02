import './Hero.css'
import { useEffect, useState } from 'react'

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
      }, 2000)
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
        <h3 className='palabras'>{palabra}</h3>
      </section>
    </>
  )
}

export default Hero
