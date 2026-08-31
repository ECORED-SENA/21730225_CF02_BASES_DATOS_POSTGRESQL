<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo.
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre la organización del componente formativo Manipulación, validación y administración en PostgreSQL. Presenta una estructura ramificada con cinco ejes temáticos: Operaciones CRUD (DML), Consolidación y análisis, PL/pgSQL, Automatización y Seguridad. Cada eje se divide en categorías y subcategorías que abarcan operaciones de manipulación de datos, consultas y filtrado, funciones de agregación, uniones (JOIN), estructuras y objetos de programación, disparadores, optimización del rendimiento, control de acceso, gobernanza de identidades, auditoría y mecanismos de respaldo.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
