import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement contentStyle={{background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{ borderRight: '7px solid  #232631' }}
  date={experience.date}
  iconStyle={{ background: experience.iconBg}}
  icon={
    <div className='flex justify-center items-center w-full h-full'> 
      <img src={experience.icon} alt={experience.company} className='w-[60%] h-[60%] object-contain hover:scale-125 transition-all duration-200'/>
    </div>
  }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>{experience.company_name}</p>
    </div>
    <ul className='mt-5 mb-4 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
        key={`experience-point-${index}`}
        className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
    {/* ARREGLAR ESTO DE LA FECHA */}
    {/* {experience.date} */}
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        {/* <p className={styles.sectionSubText}>What I have done so far?</p> */}
        <p className={styles.sectionSubText}>¿Qué hice hasta ahora?</p>
        <h2 className={styles.sectionHeadText}>Experiencia</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")