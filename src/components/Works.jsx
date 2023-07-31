import { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, eye } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div
      // variants={fadeIn('up', 'spring',index * 0.5, 0.75)}
      variants={textVariant}
    >
      <Tilt
        options = {{
          max: 20,
          scale: 1,
          speed: 300
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[300px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {live_demo_link &&
              <div
              onClick={() => window.open(live_demo_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2 hover:scale-110 transition duration-200'
              >
                <img src={eye} alt="livepreview" className='w-1/2 h-1/2 object-contain bg-white rounded-full p-[1px]'/>
              </div>
            }
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition duration-200'
            >
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}

        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Mi Trabajo</p>
        <h2 className={styles.sectionHeadText}>Proyectos</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
        //  variants={fadeIn('', '', 0.1, 1)}
         variants={textVariant}
         className='mt-3 text-secondary text-[17px] w-full leading-[30px]'
        >
          Estos son los proyectos que he realizado en mi carrera como desarrollador web, algunos de ellos son proyectos personales y profesionales y otros son proyectos que he realizado en la universidad.
          Todos los proyectos tienen un link hacia su live demo y hacia su repositorio en github.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            {...project}
            index={index}
           />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')