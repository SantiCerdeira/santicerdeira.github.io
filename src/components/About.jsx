import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
// import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Sobre mí</h2>
      </motion.div>

      <Tilt
          options = {{
              max:3,
              scale:1,
              speed: 1000,
            }}
      >
          <motion.div
            variants={fadeIn('', '', 0.1, 1)}
            className='prueba w-full green-pink-gradient p-[3px] rounded-[15px]'
            // animate={{
            //   '--hue-rotate': '360deg',
            //   rotate: '360deg',
            // }}
            // transition={{
            //   duration: 1.5,
            //   repeat: Infinity,
            //   repeatType: 'loop',
            // }}
          >
              {/* BORDE QUE SE MUEVA CON ANIMACION */}
            <div
              className='bg-tertiary p-4 text-[17px] leading-[30px] rounded-[15px]'
            >
              <p className='py-1 px-2'>
                Soy un desarrollador web Full-Stack que se enfoca principalmente en Front-End. He estado estudiando programación durante varios años y estoy emocionado de estar buscando mi primer trabajo en la industria. Me encanta trabajar en proyectos desafiantes y encontrar soluciones creativas para problemas complejos. He desarrollado habilidades en HTML, CSS, JavaScript, React, Node.js, PHP y otras tecnologías relacionadas. Y además, tengo experiencia con software de diseño como Photoshop, Illustrator, Figma y Blender entre otros.
              </p>
              <p className='py-1 px-2'>
                Además de mi experiencia en el desarrollo web, también tengo habilidades en diseño y estoy interesado en la experiencia de usuario y el diseño visual. Creo que mi enfoque en el diseño me da una ventaja como desarrollador, y me permite crear aplicaciones web atractivas y fáciles de usar.
              </p>
              <p className='py-1 px-2'>
                En cuanto a mis objetivos profesionales, estoy buscando trabajar en proyectos innovadores y emocionantes que me permitan seguir aprendiendo y creciendo como desarrollador y a la vez aprender sobre negocios y el mundo empresarial.
              </p>
            </div>
          </motion.div>
      </Tilt>
    </>
  )

}

export default SectionWrapper(About, 'about') 