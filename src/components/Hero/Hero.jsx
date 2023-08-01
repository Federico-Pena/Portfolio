import './Hero.css'
import { useEffect, useState } from 'react'

function Hero() {
	const [palabra, setPalabra] = useState('')
	useEffect(() => {
		const arraypalabras = [
			'Programador',
			'Apasionado',
			'Versátil',
			'Creativo',
			'Resolutivo',
		]
		setPalabra(arraypalabras[0])
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
					¡Hola! Mi Nombre es <span className='nombre'>Federico</span>
				</h1>
				<h3 className='parrafo'>
					Desarrollador con experiencia en HTML, CSS y JavaScript. Mi enfoque
					versátil me ha llevado a explorar frameworks modernos como React, que
					me permiten crear aplicaciones web interactivas e intuitivas.
				</h3>
				<h2 className='palabras'>{palabra}</h2>
			</section>
		</>
	)
}

export default Hero
