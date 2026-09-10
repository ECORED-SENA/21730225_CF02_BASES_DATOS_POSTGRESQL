<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Filtrado, agregación y consolidación de datos (joins)
      p.mb-0(data-aos="fade-right") Los datos rara vez se consumen de forma aislada o en estructuras planas. La normalización de las bases de datos relacionales, indispensable para evitar la redundancia y garantizar la integridad referencial, exige distribuir la información de manera óptima en múltiples relaciones interconectadas. En consecuencia, la capacidad de un desarrollador para unificar, resumir y transformar esos fragmentos de información en reportes consolidados e indicadores de desempeño constituye una competencia esencial para apoyar la toma de decisiones gerenciales.
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Consultas y agrupamientos
      p(data-aos="fade-right") Las aplicaciones informáticas que interactúan con bases de datos corporativas, capaces de almacenar millones de tuplas, requieren estrategias que permitan recuperar únicamente la información necesaria. Extraer todos los registros de forma indiscriminada incrementa el tráfico de red y eleva el consumo de memoria del cliente, afectando el rendimiento general del sistema.
      p.mb-5(data-aos="fade-right") De igual manera, la construcción de cuadros de mando (dashboards) ejecutivos demanda consolidar grandes volúmenes de transacciones individuales en indicadores de desempeño que faciliten el análisis del negocio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Optimización de paginación de resultados (LIMIT, OFFSET)
      p(data-aos="fade-right") La transferencia de registros innecesarios constituye uno de los errores de arquitectura más frecuentes en el desarrollo de aplicaciones. Para reducir este impacto, PostgreSQL incorpora las cláusulas #[b LIMIT] y #[b OFFSET], las cuales constituyen la base técnica de la paginación de resultados. A continuación, se presentan las características de cada una de estas directivas:
      .row.justify-content-center.mb-4
        .col-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t2/img1.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b LIMIT]
            p.text-center Restringe el número máximo de filas que el servidor devuelve en el conjunto de resultados.
        .col-10.col-lg-4(data-aos="fade-left")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t2/img2.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b OFFSET]
            p.text-center Indica la cantidad de filas que el motor debe omitir antes de comenzar a retornar los registros solicitados.
      p(data-aos="fade-right") Desde la perspectiva de la ingeniería de rendimiento, el uso de valores elevados en #[b OFFSET] sobre relaciones con millones de filas puede disminuir la eficiencia de las consultas, debido a que el motor debe recorrer internamente los registros omitidos antes de entregar los resultados.
      p.mb-5(data-aos="fade-right") Por esta razón, se recomienda combinar siempre #[b LIMIT] y #[b OFFSET] con la cláusula #[b ORDER BY], garantizando un orden determinista y consistente entre las diferentes páginas de resultados presentadas en las interfaces de usuario.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Optimización de paginación de resultados (LIMIT, OFFSET)
      p(data-aos="fade-right") Las funciones de agregación #[b SUM], #[b AVG], #[b COUNT], #[b MAX] y #[b MIN] realizan operaciones matemáticas sobre un conjunto de valores pertenecientes a una misma columna y producen un único resultado consolidado de interés estadístico.
      .row.mb-4
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .px-4.py-4.bg-c2
            p.mb-0 Cuando estos cálculos deben efectuarse por categorías específicas del negocio, se utiliza la cláusula #[b GROUP BY], la cual agrupa lógicamente las tuplas que comparten los mismos valores en una o varias columnas, aplicando la función de agregación de manera independiente a cada grupo.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-down")
          figure
            img(src='@/assets/curso/temas/t2/img1.png', alt='', style='width: 260px').m-auto
        .col-lg-4(data-aos="fade-left")
          .row.h-100.align-items-end
            .col-12
              figure.mb-3.mb-lg-0
                img(src='@/assets/curso/temas/t1/img1.svg', alt='', style='width: 50px')
              p.mb-0 Uno de los aspectos fundamentales del lenguaje SQL consiste en distinguir el momento en que actúan las cláusulas #[b WHERE] y #[b bHAVING] durante el procesamiento de una consulta. A continuación, se presenta la diferencia entre ambas cláusulas.
      .row.justify-content-center.mb-4
        .col-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t2/img3.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b WHERE]
            p.text-center Filtra las filas individuales antes de que se ejecute el proceso de agrupamiento realizado por #[b GROUP BY].
        .col-10.col-lg-4(data-aos="fade-left")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t2/img4.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b HAVING]
            p.text-center Filtra los resultados obtenidos después de que #[b GROUP BY] consolida la información, permitiendo aplicar condiciones sobre funciones de agregación. Por ejemplo, restringir el reporte únicamente a las categorías cuyo promedio de ventas supera un valor determinado.
      p.mb-0(data-aos="fade-right") Comprender la diferencia entre #[b WHERE] y #[b HAVING] permite construir consultas más eficientes y obtener reportes consolidados que respondan con precisión a las necesidades de análisis de la organización.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Relaciones y uniones de datos (Joins)
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p La consolidación de esquemas normalizados constituye el núcleo operativo de las consultas relacionales. El almacenamiento físico distribuye los atributos de las entidades en diferentes relaciones para preservar la consistencia de la información y evitar redundancias; por ejemplo, impide que los datos de un cliente se repitan en cada factura. Sin embargo, las aplicaciones y los usuarios requieren consultar esa información de forma integrada.
          br
          br
          |
          p Las operaciones de unión, conocidas como Joins, permiten satisfacer esta necesidad al combinar filas de dos o más relaciones mediante una columna común, generalmente una clave foránea, que referencia una clave primaria.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Uniones internas (INNER JOIN) para la coincidencia exacta de registros en el modelo físico
      p(data-aos="fade-right") La operación #[b INNER JOIN] constituye el mecanismo de unión más utilizado en la ingeniería de datos. Su comportamiento consiste en comparar las relaciones involucradas y devolver únicamente aquellas tuplas que cumplen la condición de igualdad especificada en la cláusula #[b ON] (Elmasri y Navathe, 2021).
      p.mb-5(data-aos="fade-right") Cuando un registro de la primera relación no posee una correspondencia en la segunda, dicho registro se excluye completamente del conjunto de resultados. Por esta razón, #[b INNER JOIN] se utiliza en procesos donde la existencia de la relación entre las entidades es indispensable para la lógica de negocio de la aplicación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Uniones externas (LEFT, RIGHT, FULL OUTER JOIN) para la preservación de tuplas no coincidentes
      p(data-aos="fade-right") En determinados escenarios es necesario conservar registros que no poseen correspondencia en otra relación, por ejemplo, durante procesos de auditoría, conciliación o análisis de información incompleta. Para estos casos, PostgreSQL incorpora las uniones externas (Outer Joins), cuyo comportamiento varía según la relación cuyos registros se desee preservar. A continuación, se presentan las principales características de cada tipo de unión externa:
      TabsC.color-acento-contenido.mb-5(data-aos="fade-left")
        .p-3.p-md-4(titulo="LEFT OUTER JOIN (LEFT JOIN)")
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h4 LEFT OUTER JOIN (LEFT JOIN)
              p.mb-0 Devuelve todos los registros de la relación ubicada a la izquierda de la sentencia, junto con las coincidencias encontradas en la relación de la derecha. Cuando no existe correspondencia, las columnas de la relación derecha se completan con valores #[b NULL]. Este tipo de unión resulta útil para identificar, por ejemplo, clientes que nunca han realizado una compra.
            .col-lg-6
              .titulo-sexto.color-secundario.mb-3
                h5 Figura 1. 
                span Dinámica de left join
              figure.cursor-pointer
                img(src='@/assets/curso/temas/t2/img3.png', alt='Ilustración comparativa sobre la operación LEFT JOIN que integra un diagrama de teoría de conjuntos con dos conjuntos parcialmente superpuestos, donde se resaltan los registros de la tabla izquierda y las coincidencias entre ambas tablas. Incluye un ejemplo con tablas de clientes y pedidos, una representación gráfica de la unión y una tabla con el resultado de la consulta que conserva todos los registros de la tabla izquierda y asigna valores nulos a los registros sin correspondencia.', style='width: 570px' @click="mostrarModal = true").m-auto
        .p-3.p-md-4(titulo="RIGHT OUTER JOIN (RIGHT JOIN)")
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h4 RIGHT OUTER JOIN (RIGHT JOIN)
              p.mb-0 Conserva todos los registros de la relación ubicada a la derecha de la sentencia y agrega la información correspondiente de la relación izquierda cuando existe coincidencia. En ausencia de ella, las columnas de la relación izquierda se completan con #[b NULL]. En la práctica, este comportamiento puede obtenerse invirtiendo el orden de las relaciones en un #[b LEFT JOIN].
            .col-lg-6
              .titulo-sexto.color-secundario.mb-3
                h5 Figura 2. 
                span Dinámica de right join
              figure.cursor-pointer
                img(src='@/assets/curso/temas/t2/img4.png', alt='Ilustración comparativa sobre la operación RIGHT JOIN que presenta un diagrama de teoría de conjuntos con énfasis en los registros de la tabla derecha y las coincidencias entre ambas tablas. Incluye un ejemplo con tablas de empleados y asignaciones, una representación gráfica de la unión y una tabla con el resultado de la consulta que conserva todos los registros de la tabla derecha y completa con valores nulos los registros de la tabla izquierda sin coincidencia.', style='width: 570px' @click="mostrarModal1 = true").m-auto
        .p-3.p-md-4(titulo="FULL OUTER JOIN")
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h4 FULL OUTER JOIN
              p.mb-0 Representa la unión más inclusiva. Devuelve todos los registros de ambas relaciones, establece las coincidencias cuando existen y completa con #[b NULL] los atributos correspondientes cuando una de las relaciones carece de registros asociados.
            .col-lg-6
              .titulo-sexto.color-secundario.mb-3
                h5 Figura 3. 
                span Dinámica de full outer join
              figure.cursor-pointer
                img(src='@/assets/curso/temas/t2/img5.png', alt='Ilustración comparativa sobre la operación FULL OUTER JOIN que reúne un diagrama de teoría de conjuntos donde se destacan los registros exclusivos de cada tabla y las coincidencias entre ambas. Incluye un ejemplo con tablas de departamentos y proyectos, una representación gráfica de la unión y una tabla con el resultado de la consulta que conserva todos los registros de ambas tablas, incorporando valores nulos cuando no existe correspondencia entre los datos relacionados.', style='width: 570px' @click="mostrarModal2 = true").m-auto
      // Modal a pantalla completa
      Teleport(to="body")
        .img-modal-overlay(v-if="mostrarModal" @click="mostrarModal = false")
          img(src="@/assets/curso/temas/t2/img3.png" alt="" @click.stop)
          button.btn-close-modal(@click="mostrarModal = false") &times;
      // Modal a pantalla completa
      Teleport(to="body")
        .img-modal-overlay(v-if="mostrarModal1" @click="mostrarModal1 = false")
          img(src="@/assets/curso/temas/t2/img4.png" alt="" @click.stop)
          button.btn-close-modal(@click="mostrarModal1 = false") &times;
      // Modal a pantalla completa
      Teleport(to="body")
        .img-modal-overlay(v-if="mostrarModal2" @click="mostrarModal2 = false")
          img(src="@/assets/curso/temas/t2/img5.png" alt="" @click.stop)
          button.btn-close-modal(@click="mostrarModal2 = false") &times;
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejecución de comandos múltiples independientes y subconsultas correlacionadas complejas
      p(data-aos="fade-right") En escenarios de análisis avanzado, es frecuente que el resultado de una consulta sirva como criterio de filtrado o como fuente de información para otra consulta de nivel superior. Esta funcionalidad se implementa mediante las subconsultas (Subqueries), las cuales permiten construir consultas jerárquicas para resolver requerimientos complejos de procesamiento de datos. Las subconsultas pueden clasificarse en dos tipos principales.
      .row.bg-c3.mb-3
        .col-12
          .p-5
            .tarjeta.tarjeta--azul1.p-4(data-aos="fade-up")
              SlyderA(tipo="b")
                .row.align-items-center.justify-content-center.mx-4
                  .col-lg-5.mb-4.mb-lg-0
                    h4 Subconsulta independiente
                    p.mb-0 Se ejecuta una única vez y entrega un valor o un conjunto de valores que la consulta principal utiliza como criterio de evaluación.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/t2/img6.png', alt='', style='width: 430px').m-auto
                .row.align-items-center.justify-content-center.mx-4
                  .col-lg-5.mb-4.mb-lg-0
                    h4 Subconsulta correlacionada
                    p.mb-0 Hace referencia a una o más columnas de la consulta externa. Debido a esta dependencia, PostgreSQL debe ejecutar la subconsulta repetidamente, una vez por cada fila procesada por la consulta principal.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/t2/img7.png', alt='', style='width: 430px').m-auto
      p(data-aos="fade-right") Las subconsultas correlacionadas ofrecen una gran flexibilidad para resolver reglas de negocio complejas; sin embargo, su utilización puede afectar el rendimiento cuando se aplican sobre grandes volúmenes de información.
      p.mb-5(data-aos="fade-right") Por esta razón, resulta recomendable analizar el plan de ejecución mediante la herramienta EXPLAIN PLAN disponible en pgAdmin, con el propósito de verificar que el optimizador de PostgreSQL utilice los índices adecuados y mantenga tiempos de respuesta acordes con los requerimientos de la aplicación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso: El sistema de gestión de recaudo de compañía de transporte (fase de operaciones CRUD)
      p(data-aos="fade-right") Al finalizar la jornada laboral, la empresa de transporte requiere generar los reportes de liquidación contable para conocer el rendimiento financiero de las rutas y el nivel de actividad de su talento humano. Con este propósito, el experto en datos desarrolla y ejecuta un conjunto de consultas avanzadas y operaciones de unión relacional que permiten consolidar la información solicitada por la gerencia.
      p.mb-4(data-aos="fade-right") El siguiente bloque de consultas integra operaciones de JOIN, funciones de agregación, agrupamiento y paginación para generar reportes consolidados y optimizar la recuperación de información en PostgreSQL:
      .row.justify-content-center.mb-4
        .col-lg-10
          .tarjeta-codigo(data-aos="fade-down")
            pre.language-javascript(language="javascript")
              code
                | -- 1. Reporte Consolidado de Recaudo por Conductor (Uso de INNER JOIN y Agrupamientos)
                | -- Permite conocer cuánto dinero ha recaudado cada conductor registrado que ha operado turnos
                | SELECT 
                |     c.cedula,
                |     c.nombre_completo,
                |     COUNT(t.id_turno) AS total_turnos_operados,
                |     SUM(t.valor_base_recaudo) AS total_dinero_recaudado,
                |     ROUND(AVG(t.valor_base_recaudo), 2) AS promedio_por_turno
                | FROM conductores c
                | INNER JOIN asignacion_turnos t ON c.cedula = t.cedula_conductor
                | GROUP BY c.cedula, c.nombre_completo
                | HAVING SUM(t.valor_base_recaudo) > 100000.00
                | ORDER BY total_dinero_recaudado DESC;
                | 
                | -- 2. Auditoría Preventiva de la Flota (Uso de LEFT JOIN para detectar inactividad)
                | -- Permite identificar de forma inmediata qué vehículos no registran ningún turno asignado hoy
                | SELECT 
                |     v.placa,
                |     v.modelo,
                |     t.id_turno,
                |     t.fecha_turno
                | FROM vehiculos v
                | LEFT JOIN asignacion_turnos t ON v.placa = t.placa_vehiculo AND t.fecha_turno = CURRENT_DATE
                | WHERE t.id_turno IS NULL;
                | 
                | -- 3. Consulta Paginada de Control Operativo para el Backend
                | -- Entrega los despachos del día en bloques de 10 registros para optimizar el consumo de la APP
                | SELECT t.id_turno, t.placa_vehiculo, t.valor_base_recaudo
                | FROM asignacion_turnos t
                | WHERE t.fecha_turno = CURRENT_DATE
                | ORDER BY t.id_turno ASC
                | LIMIT 10 OFFSET 0; -- Bloque o página 1
      p(data-aos="fade-right") Una vez ejecutadas las consultas, es posible analizar el comportamiento del motor PostgreSQL y comprender la forma en que las cláusulas de agrupamiento y las operaciones de unión contribuyen a la generación de reportes gerenciales. El siguiente análisis explica el comportamiento de las consultas implementadas y su aporte al procesamiento de la información:
      .row.align-items-center.justify-content-center.mb-3
        .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img8.png', alt='', style='width: 300px').m-auto
        .col-lg-9(data-aos="fade-left")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
            .row(titulo="Precisión del control de grupos")
              .col-12
                p.mb-0 Al implementar la condición #[b HAVING SUM(t.valor_base_recaudo) > 100000.00] en el primer reporte, PostgreSQL calcula inicialmente el valor total recaudado por cada conductor y, posteriormente, excluye aquellos grupos que no superan el umbral financiero establecido. Este comportamiento evidencia la diferencia funcional entre #[b HAVING], que actúa después del agrupamiento, y #[b WHERE], que filtra los registros antes de ejecutar #[b GROUP BY].
            .row(titulo="Detección de ausencias técnicas")
              .col-12
                p.mb-0 El segundo reporte emplea un #[b LEFT JOIN] para identificar los vehículos sin actividad durante la jornada. Al aplicar la condición #[b WHERE t.id_turno IS NULL], el sistema selecciona únicamente los registros del catálogo de vehículos que no presentan coincidencias en la relación de asignaciones del día, permitiendo identificar los autobuses que permanecieron inactivos y que, por tanto, no generaron ingresos para la empresa.
      p.mb-0(data-aos="fade-right") El uso adecuado de las subconsultas, las funciones de agregación y las operaciones JOIN permite construir consultas de alto nivel capaces de consolidar información distribuida y transformarla en indicadores útiles para la toma de decisiones dentro de la organización.

</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-javascript'
export default {
  name: 'Tema2',
  data: () => ({
    mostrarModal: false,
    mostrarModal1: false,
    mostrarModal2: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
      Prism.highlightAllUnder(this.$el)
    })
  },
  updated() {
    this.$aosRefresh()
    Prism.highlightAllUnder(this.$el)
  },
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer !important;
}

.img-modal-overlay {
  position: fixed;
  /* Espacio para respetar las barras superior e inferior del marco SENA */
  top: 60px;
  bottom: 60px;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 10px;
}

.img-modal-overlay img {
  /* Ocupa el máximo posible de la zona delimitada */
  width: 95%;
  height: 95%;
  object-fit: contain;
  /* Evita que la imagen se deforme */
  background-color: #fff;
  border-radius: 6px;
}

.btn-close-modal {
  position: absolute;
  top: 20px;
  right: 25px;
  background: transparent;
  border: none;
  color: #242222;
  font-size: 2.5rem;
  cursor: pointer;
}
</style>
