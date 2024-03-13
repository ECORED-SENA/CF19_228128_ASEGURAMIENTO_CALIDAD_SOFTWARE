export default {
  global: {
    componenteFormativo: 'Automatización de pruebas ',
    descripcionCurso:
      'En este componente formativo se resalta la importancia que tiene la automatización de pruebas para detectar fallos en el <em>software</em>. En este proceso, el <em>software</em> es sometido a pruebas 24/7, en los que se seleccionan algunos procesos para ser monitoreados y evitar pruebas manuales, por medio de herramientas de automatización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Entorno de pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Máquinas virtuales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Contenedores',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Dimensionamiento de pruebas de escalabilidad',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ejecución de <em>scripts</em> de pruebas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Automatización de pruebas',
      referencia:
        'De los santos, J. (2020). <em>Todo lo que necesitas saber antes de automatizar pruebas</em>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dGDmhbeYfWQ',
    },
    {
      tema: 'Máquinas virtuales',
      referencia:
        'Google Cloud LATAM. (2021). <em>Máquinas virtuales en la nube</em>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=H7EAHuRbIy0',
    },
    {
      tema: 'Ejecución de <em>scripts</em> de pruebas',
      referencia:
        'DThe QA Testing Channel. (2017). <em>¿Qué es un Script Automatizado? - en 1 minuto</em>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xt1NnslQ9MA',
    },
  ],
  glosario: [
    {
      termino: 'Atributos',
      significado:
        'un atributo de calidad es una propiedad medible de un sistema, que indica qué tan bien el sistema satisface las necesidades de las partes interesadas (Zapata, 2020).',
    },
    {
      termino: '<em>Docker</em>',
      significado:
        'el sistema de <em>software</em> de TI llamado <em>Docker</em> es la tecnología de organización en contenedores que posibilita la creación y el uso de los contenedores de Linux (RedHat, 2018).',
    },
    {
      termino: '<em>Guests</em>',
      significado:
        'la máquina física original en que está instalada el hipervisor se llama <em>host</em>, y las VM que utilizan estos recursos se llaman <em>guests</em>. Los <em>guests</em> utilizan los recursos informáticos como la CP, la memoria y el almacenamiento, como un conjunto de medios que pueden redistribuirse fácilmente (RedHat, 2018).',
    },
    {
      termino: 'Hipervisor',
      significado:
        'un hipervisor, conocido también como monitor de máquinas virtuales, es un proceso que crea y ejecuta máquinas virtuales. Un hipervisor permite que un ordenador host preste soporte a varias máquinas virtuales invitadas mediante el uso compartido virtual de sus recursos, como la memoria y el procesamiento (Vwware, s.f.).',
    },
    {
      termino: '<em>Host</em>',
      significado:
        'la máquina física original en que está instalado el hipervisor se llama <em>host</em> virtualización (Redhat, s.f.).',
    },
    {
      termino: 'Kernel o núcleo',
      significado:
        'es una parte fundamental del sistema operativo que se encarga de conceder el acceso al <em>hardware</em> de forma segura para todo el <em>software</em> que lo solicita. El Kernel es una pequeña e invisible parte del sistema operativo, pero la más importante, porque sin esta no podría funcionar. Todos los sistemas operativos tienen un <em>Kernel</em>, incluso Windows 10, pero quizá el más famoso es el <em>Kernel</em> de Linux, que ahora además está integrado en Windows 10 con sus últimas actualizaciones (Geeknetic, s.f.).',
    },
    {
      termino: 'Kubernetes',
      significado:
        '<em>Kubernetes</em> es una plataforma portable y extensible de código abierto para administrar cargas de trabajo y servicios. <em>Kubernetes</em> facilita la automatización y la configuración declarativa. Tiene un ecosistema grande y en rápido crecimiento. El soporte, las herramientas y los servicios para <em>Kubernetes</em> están ampliamente disponibles (Kubernetes, s.f.).',
    },
    {
      termino: '<em>Script</em> de prueba',
      significado:
        'es un conjunto de instrucciones para probar automáticamente una aplicación. Los casos de prueba se utilizan para el entorno de prueba manual. La prueba se utiliza en el entorno de prueba automatizado (Ebook online, s.f.).',
    },
  ],
  referencias: [
    {
      referencia:
        'Choucair. (s.f.). <em>¿Sabes qué son los ambientes de prueba de desarrollo de software?</em>',
      link: 'https://www.choucairtesting.com/a-day-at-the-office',
    },
    {
      referencia:
        'Ebooks online. (s.f.). <em>¿Qué es un guion de prueba? Cómo escribir con el ejemplo.</em>',
      link: '',
    },
    {
      referencia:
        'Erickson, E., Brady, G. y Olprod (2022). <em>Requisitos de dimensionamiento de hardware para entornos locales.</em> Microsoft. ',
      link:
        'https://docs.microsoft.com/es-es/dynamics365/fin-ops-core/fin-ops/get-started/hardware-sizing-on-premises-environments',
    },
    {
      referencia: 'Kubernetes (s.f.). <em>¿Qué es Kubernetes?</em>',
      link:
        'https://kubernetes.io/es/docs/concepts/overview/what-is-kubernetes',
    },
    {
      referencia:
        'Geeknetic. (s.f.). <em>¿Qué es el Kernel y para qué sirve?</em>',
      link: 'https://www.geeknetic.es/Kernel/que-es-y-para-que-sirve',
    },
    {
      referencia: 'NetApp. (s.f.). <em>¿Qué son los contenedores?</em>',
      link: 'https://www.netapp.com/es/devops-solutions/what-are-containers',
    },
    {
      referencia:
        'Myservername.com. (s.f.). <em>Los 10 mejores sitios y programas de software gratuitos para compartir archivos en 2021.</em>',
      link:
        'https://es.myservername.com/10-best-free-file-sharing-sites#1_Response_Time',
    },
    {
      referencia:
        'Pinchao, P. M. (2011). Propuesta para la interoperabilidad de procesos de negocios en sistemas de información hospitalarios bajo una arquitectura orientada a servicios. [Monografía para optar al título de Ingeniero en Electrónica y Telecomunicaciones, Universidad del Cauca].',
      link: '',
    },
    {
      referencia: 'RedHat (2019). <em>¿Qué es una máquina virtual?</em>',
      link:
        'https://www.redhat.com/es/topics/virtualization/what-is-a-virtual-machine#descripci%C3%B3n-general',
    },
    {
      referencia: 'RedHat. (2018). <em>¿Qué es DOCKER?</em>',
      link: 'https://www.redhat.com/es/topics/containers/what-is-docker',
    },
    {
      referencia: 'Vmware. (s.f.). <em>¿Qué es un hipervisor?</em>',
      link:
        'https://www.vmware.com/latam/topics/glossary/content/hypervisor.html',
    },
    {
      referencia:
        'Zapata, M. (2019). <em>Atributos de calidad del software</em>.',
      link: 'https://manuelzapata.co/atributos-de-calidad',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'José Luis Bastidas Pérez',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Pendiente',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Pendiente',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Pendiente',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Pendiente',
          cargo: 'Locución',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
