import { useState, useRef } from "react"
import {motion} from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

//template_2cptd3k
//service_k2mp03f
//qLKu9Q77yY9aHHUSP

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      // FIJARME ESTO DE QUE TENGA ACCESO A ENVIAR MAILS CON MI NOMBRE
      // VALIDACION DE DATOS
      'service_k2mp03f', 
      'template_2cptd3k', 
      {
        from_name: form.name, 
        to_name: 'Santiago',
        from_email: form.email, 
        to_email: 'santiagocerdeira808@gmail.com',
        message: form.message
      } ,
      'qLKu9Q77yY9aHHUSP'
      )
      .then(() => {
        setLoading(false)
        //  CAMBIAR
        alert('Thank you! I will get back to you as soon as possible.')
        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setLoading(false)
        alert('Something went wrong, please try again.')
        console.log(error.text)
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Envíame un mensaje</p>
        <h3 className={styles.sectionHeadText}>Contacto</h3>

        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu nombre</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="¿Cuál es tu nombre?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="¿Cuál es tu email?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu mensaje</span>
              <textarea rows='7' name="message" value={form.message} onChange={handleChange} placeholder="¿Cuál es tu mensaje?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>

          <button
           type="submit"
           className="bg-tertiary py-3 px-8 text-white outline-none w-full font-bold shadow-md shadow-primary rounded-xl hover:shadow-none transition-all duration-200"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')