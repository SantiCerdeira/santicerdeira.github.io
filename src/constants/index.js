import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    vuejs,
    tailwind,
    bootstrap,
    express,
    php,
    laravel,
    mysql,
    nodejs,
    mongodb,
    threejs,
    git,
    figma,
    photoshop,
    illustrator,
    blender,
    failory,
    diminutivo,
    tennis,
    knowlee,
    productpage,
    pwacrypto,
    vueweather,
    code,
    seo,
    vuecryptos
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre mí",
    },
    {
      id: "work",
      title: "Experiencia",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue JS",
      icon: vuejs,
    },
    // {
    //   name: "Bootstrap",
    //   icon: bootstrap,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "express",
      icon: express,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "Photoshop",
    //   icon: photoshop,
    // },
    // {
    //   name: "Illustrator",
    //   icon: illustrator,
    // },
    // {
    //   name: "Blender",
    //   icon: blender,
    // },
  ];
  
  const experiences = [
    {
      title: "Diseño web Webflow",
      company_name: "Failory",
      icon: failory,
      iconBg: "#FFFFFF",
      date: "Jun 2020 - Dic 2020",
      points: [
        "Diseño del sitio web en Figma.",
        "Creación del diseño en Webflow.",
        "Mantenimiento y actualización del sitio web."
      ],
    },
    {
      title: "MERN Ecommerce",
      company_name: "Diminutivo",
      icon: diminutivo,
      iconBg: "#FFFFFF",
      date: "May 2021 - Oct 2021",
      points: [
        "Desarrollo del front-end un ecommerce con React.",
        "Desarrollo del back-end del ecommerce con Node.js y express.",
        "Implementación de MercadoPago como método de pago.",
        "Mantenimiento del sitio web.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Knowlee (2023) (En progreso)",
      description:
        "Mi mayor proyecto hasta la fecha. Red social que permite a usuarios subir apuntes y documentos, interactuar con las publicaciones, chatear con otros usuarios, y más.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "purple-text-gradient",
        },
        {
          name: "express",
          color: "gray-text-gradient",
        },
        {
          name: "mongodb",
          color: "red-text-gradient",
        },
      ],
      image: knowlee,
      source_code_link: "https://github.com/SantiCerdeira/knowlee-client",
      live_demo_link: "https://knowlee-fw4c.onrender.com/",
    },
    {
      name: "Ecommerce de Servicio Vue & Firebase (2023)",
      description:
        "Ecommerce de contratación de servicio de diseño web hecho con Vue & Firebase. Interfaz de cliente y administrador. Incluye funcionalidades como login, registro, panel de administrador, realización de compras, chat entre usuarios y más.",
      tags: [
        {
          name: "vuejs",
          color: "violet-text-gradient",
        },
        {
          name: "firebase",
          color: "yellow-text-gradient",
        },
      ],
      image: seo,
      source_code_link: "https://github.com/SantiCerdeira/vue-firebase",
      // live_demo_link: "https://github.com/SantiCerdeira/vue-firebase",
    },
    {
      name: "Ecommerce de Servicio PHP & Laravel y MySQL (2022)",
      description:
        "Ecommerce de contratación de servicio de diseño web hecho con laravel & PHP. Interfaz de cliente y administrador. Incluye un blog, y funcionalidades como carrito de compras, checkout, login, registro, panel de administrador, implementación del sandbox de MercadoPago y más.",
      tags: [
        {
          name: "php",
          color: "white-text-gradient",
        },
        {
          name: "laravel",
          color: "brown-text-gradient",
        },
        {
          name: "mysql",
          color: "yellow-text-gradient",
        },
      ],
      image: code,
      source_code_link: "https://github.com/SantiCerdeira/php-web-design",
      // live_demo_link: "https://santicerdeira.github.io/vue-weather/",
    },
    {
      name: "Ecommerce PHP y MySQL (2022)",
      description:
        "Ecommerce de compra de camisetas retro de fútbol hecho con PHP. Interfaz de cliente y administrador. Incluye funcionalidades como carrito de compras, login, registro, panel de administrador y más.",
      tags: [
        {
          name: "php",
          color: "white-text-gradient",
        },
        {
          name: "mysql",
          color: "yellow-text-gradient",
        },
        {
          name: "bootstrap",
          color: "orange-text-gradient",
        },
      ],
      image: code,
      source_code_link: "https://github.com/SantiCerdeira/ecommerce-php-mysql",
      // live_demo_link: "https://santicerdeira.github.io/vue-weather/",
    },
    {
      name: "Vue Weather App (2022)",
      description:
        "Proyecto de Vue que consume una API con las temperaturas de distintas ciudades del mundo.",
      tags: [
        {
          name: "vuejs",
          color: "violet-text-gradient",
        },
      ],
      image: vueweather,
      source_code_link: "https://github.com/SantiCerdeira/vue-weather",
      live_demo_link: "https://santicerdeira.github.io/vue-weather/",
    },
    {
      name: "Vue Cryptos App (2022)",
      description:
        "Proyecto de Vue que consume una API con los valores de las 100 criptomonedas con mayor capitalización de mercado.",
      tags: [
        {
          name: "vuejs",
          color: "violet-text-gradient",
        },
      ],
      image: vuecryptos,
      source_code_link: "https://github.com/SantiCerdeira/vue-cryptos",
      live_demo_link: "https://santicerdeira.github.io/vue-cryptos//",
    },
    {
      name: "PWA CryptoWorld con JS e IndexedDB",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "bootstrap",
          color: "orange-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "indexedDB",
          color: "yellow-text-gradient",
        },
      ],
      image: pwacrypto,
      source_code_link: "https://github.com/SantiCerdeira/pwa-crypto",
      live_demo_link: "https://santicerdeira.github.io/pwa-crypto",
    },
    {
      name: "Ecommerce Front-End JavaScript (2021)",
      description:
        "Ecommerce Front-End desarrollado con JavaScript vanilla con funcionalidades principales de un ecommerce como agregar al carrito, modificar cantidades, ver prductos y más.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: tennis,
      source_code_link: "https://github.com/SantiCerdeira/tennis-ecommerce",
      live_demo_link: "https://santicerdeira.github.io/tennis-ecommerce/",
    },
    {
      name: "Página de producto HTML, CSS & JS (2022)",
      description:
        "Página de producto de zapatillas Nike realizada con HTML y CSS vanilla. Además, tiene algunas funcionalidades de JavaScript para dar dinamismo a la página. Este proyecto lo hice para practicar el manejo de CSS desde JavaScript para implementar funcionalidades en la interfaz del usuario.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: productpage,
      source_code_link: "https://github.com/SantiCerdeira/nike-shoes",
      live_demo_link: "https://santicerdeira.github.io/nike-shoes/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };