<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-3(data-aos="fade-right") Una vez estructurada la arquitectura física de un repositorio relacional, el verdadero valor de los sistemas de información radica en la capacidad de explotar, automatizar y proteger los datos almacenados. Este componente formativo se introduce en las fases de la ingeniería de datos en PostgreSQL, proporcionando las herramientas técnicas para interactuar de forma dinámica con el motor y transformar los datos en bruto en conocimiento estratégico.
      .row.align-items-center
        .col-xl.order-2.order-lg-1(data-aos="fade-right")
          .row.mb-4
            .col-lg.order-2.order-lg-1.pe-lg-0
              figure
                img(src='@/assets/curso/temas/intro/img1.png', alt='', style='width: 430px').m-auto
            .col-lg.ps-lg-0.order-1.order-lg-2.mb-4.mb-lg-0
              .p-4.bg-c1.h-100
                p.mb-0 El propósito central de este material es desarrollar la competencia para manipular el flujo informativo mediante el uso del lenguaje SQL y la programación del lado del servidor. A lo largo del componente, se abordará desde la construcción de consultas e integraciones de tablas (Joins), hasta la creación de lógica procedural mediante funciones y disparadores (Triggers) que automaticen las reglas de negocio de manera reactiva e indestructible.
          p.mb-0 Para garantizar un perfil técnico integral, el proceso de aprendizaje abarca las responsabilidades de la administración de servidores. El aprendiz asimilará los protocolos de seguridad perimetral y granular, el monitoreo a través de bitácoras de auditoría (Logs) y la ejecución de copias de seguridad, asegurando que la solución informática permanezca optimizada, blindada ante vulnerabilidades y preparada para esquemas de alta disponibilidad.
        .col-xl-auto.order-1.order-lg-2(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='', style='width: 350px').m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
