export default {
  global: {
    Name: 'Manipulación, validación y administración en PostgreSQL',
    Description:
      'Este componente formativo capacita al aprendiz en la gestión avanzada del ciclo de vida de los datos y el aseguramiento del servidor. Se profundiza en la escritura de consultas (DML), uniones relacionales y programación procedural nativa (PL/pgSQL), complementándose con la implementación de directivas de seguridad, auditoría transaccional, optimización de rendimiento y protocolos de respaldo.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
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
        titulo:
          'Operaciones de modificación de datos y consultas esenciales (CRUD)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Operaciones esenciales del ciclo de vida de los datos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Consultas básicas y procesamiento de datos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Filtrado, agregación y consolidación de datos (joins)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Consultas y agrupamientos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Relaciones y uniones de datos (Joins)',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Lógica programable en el servidor (PL/pgSQL)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Programación procedural en PostgreSQL',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Control de errores y robustez del código',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Automatización reactiva y estructuras de abstracción de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Automatización del negocio mediante disparadores',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Abstracción lógica y optimización de consultas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Perímetros de seguridad, control de acceso granular y continuidad del negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Directivas de seguridad perimetral y autenticación en el servidor',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Administración de identidades corporativas y matriz de privilegios privados',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Protocolos de respaldo',
            hash: 't_5_3',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/21730183_CF02_CFA.pdf',
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
  glosario: [
    {
      termino: 'ACID',
      significado:
        'acrónimo en inglés de Atomicidad, Consistencia, Aislamiento y Durabilidad (<i>Atomicity, Consistency, Isolation, Durability</i>). Es el conjunto de cuatro propiedades fundamentales que un motor transaccional como PostgreSQL garantiza de forma mandatoria para asegurar que los datos permanezcan válidos e indestructibles ante fallas del sistema.',
    },
    {
      termino: '<i>Backend</i>',
      significado:
        'capa lógica y de acceso a datos de una aplicación de software que opera del lado del servidor. Se encarga de procesar las reglas de negocio, validar la seguridad y realizar las conexiones operativas directas hacia el motor de base de datos.',
    },
    {
      termino: 'CRUD',
      significado:
        'acrónimo utilizado en la ingeniería de software para condensar las cuatro operaciones esenciales de manipulación de registros en un repositorio físico: Crear (INSERT), Leer (SELECT), Actualizar (UPDATE) y Borrar (DELETE).',
    },
    {
      termino: 'DBA',
      significado:
        'administrador de Bases de Datos (<i>Database Administrator</i>). Rol profesional y técnico encargado de asegurar la correcta infraestructura del motor, gobernar las directivas de seguridad granular, planificar las matrices de permisos, optimizar los índices de rendimiento y garantizar la continuidad del negocio mediante respaldos.',
    },
    {
      termino: '<i>Frontend</i>',
      significado:
        'capa visual, de presentación e interacción de una solución informática con la que el usuario final interactúa de manera directa (por ejemplo, formularios web o aplicaciones móviles que capturan las solicitudes del negocio).',
    },
    {
      termino: 'PL/pgSQL',
      significado:
        'lenguaje procedural nativo y embebido de PostgreSQL que extiende las capacidades declarativas del estándar SQL, permitiendo estructurar lógica imperativa mediante variables, control de flujos condicionales, ciclos y captura avanzada de excepciones técnicas.',
    },
    {
      termino: 'Triggers',
      significado:
        'disparadores u objetos de automatización reactiva implementados en el servidor, los cuales ejecutan de forma automática y obligatoria una función procedural inmediatamente antes o después de que se suscite un evento DML específico sobre una tabla.',
    },
    {
      termino: 'Tuplas',
      significado:
        'representación formal dentro del modelo relacional para hacer referencia a una fila, registro o instancia de datos individual alojada dentro de una estructura bidimensional (tabla).',
    },
    {
      termino: 'Vistas materializadas',
      significado:
        'objeto lógico que almacena físicamente en el disco duro el resultado de una consulta relacional pesada, actuando como una instantánea caché de datos para optimizar drásticamente la velocidad de respuesta de los reportes gerenciales de la empresa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Elmasri, R., y Navathe, S. B. (2021). Fundamentals of database systems (8th ed.). Pearson.',
      link: '',
    },
    {
      referencia: 'Neon. (2026). Separating storage and compute. Neon Docs.',
      link: 'https://neon.com/docs/postgres/overview',
    },
    {
      referencia:
        'PostgreSQL Global Development Group. (2026). PostgreSQL 16.0 documentation: Chapter 18. Server setup and operation.',
      link: 'https://www.postgresql.org/docs/16/runtime.html',
    },
    {
      referencia:
        'Silberschatz, A., Korth, H. F., y Sudarshan, S. (2002). Fundamentos de bases de datos. McGraw-Hill.',
      link: 'https://biblioteca.univalle.edu.ni/files/original/01aebde3cc06dce33f2538aa2724eb2541cb9473.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}
