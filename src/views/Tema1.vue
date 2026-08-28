<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Operaciones de modificación de datos y consultas esenciales (CRUD)
      p.mb-3(data-aos="fade-right") Una vez que la infraestructura física y el esquema de tablas han sido desplegados con éxito en el servidor, el ciclo de vida de la información entra en su fase más dinámica e interactiva. La capacidad de poblar, corregir y depurar los registros dentro de un repositorio digital constituye la competencia procedimental básica que conecta la base de datos con la lógica de negocio de cualquier aplicación informática.
      .row(data-aos="fade-left")
        .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/t1/img1.png', alt='', style='width: 430px').m-auto
        .col.ps-lg-0
          .p-4.bg-c1.h-100
            p.mb-0 En esta unidad temática se abordarán las sentencias fundamentales del Lenguaje de Manipulación de Datos (DML) bajo el estándar de PostgreSQL. A partir de ello, se comprenderán las operaciones esenciales de inserción, actualización y borrado condicional, así como los mecanismos básicos de filtrado que garantizan la extracción precisa y oportuna de los activos de información de una organización.
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Operaciones esenciales del ciclo de vida de los datos
      p.mb-5(data-aos="fade-right") El mantenimiento y la persistencia de la información exigen el dominio de las operaciones conocidas mediante el acrónimo CRUD (Create, Read, Update y Delete; Crear, Leer, Actualizar y Borrar). En una solución informática concurrente, estas instrucciones alteran directamente los bloques físicos de almacenamiento y activan los mecanismos internos de control transaccional del motor de base de datos para preservar las propiedades ACID (Aislamiento, Consistencia, Integridad y Durabilidad).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Sentencias de inserción masiva y selectiva de registros (INSERT INTO)
      p(data-aos="fade-right") La creación de nuevos registros se realiza mediante la instrucción #[b INSERT INTO], la cual comunica al proceso del servidor la intención de añadir filas lógicas a una relación física específica. La sintaxis estándar exige declarar explícitamente la tabla de destino, la lista de atributos que se desean poblar y los valores correspondientes, organizados por tuplas (Silberschatz, Korth, y Sudarshan, 2002).
      .row.mb-3
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4.bg-c2
            p.mb-0 PostgreSQL amplía las capacidades del estándar ANSI SQL al permitir la inserción masiva en una sola sentencia mediante la separación de tuplas por comas. Este mecanismo reduce significativamente el tráfico de red y optimiza el tiempo de procesamiento, ya que abre una única transacción en lugar de ejecutar múltiples peticiones independientes.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-down")
          figure
            img(src='@/assets/curso/temas/t1/img2.png', alt='', style='width: 287px').m-auto
        .col-lg-4(data-aos="fade-left")
          figure.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t1/img1.svg', alt='', style='width: 50px')
          p.mb-0 De manera complementaria, el motor incorpora la cláusula avanzada #[b RETURNING], la cual devuelve inmediatamente los valores generados automáticamente por el servidor, como llaves primarias de tipo #[b SERIAL] o valores definidos por defecto. Gracias a esta funcionalidad, la aplicación evita realizar una consulta adicional para recuperar dichos datos.
      p(data-aos="fade-right") La siguiente sentencia realiza una inserción masiva de registros y utiliza la cláusula RETURNING para recuperar automáticamente los identificadores generados por PostgreSQL:
      .row.justify-content-center.mb-5(data-aos="fade-down")
        .col-lg-8
          .tarjeta-codigo
            pre.language-javascript(language="javascript")
              code
                | -- Inserción masiva optimizada con cláusula de retorno en PostgreSQL
                | INSERT INTO ejemplo_sena (codigo_modulo, estado)
                | VALUES 
                |   ('MOD-001', TRUE),
                |   ('MOD-002', FALSE),
                |   ('MOD-003', TRUE)
                | RETURNING id_registro;
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Modificación y actualización condicional de datos (UPDATE)
      .row.align-items-center.mb-5
        .col-xl.order-2.order-lg-1(data-aos="fade-right")
          .row.mb-4
            .col-lg.order-2.order-lg-1.pe-lg-0
              figure
                img(src='@/assets/curso/temas/t1/img4.png', alt='', style='width: 430px').m-auto
            .col-lg.ps-lg-0.order-1.order-lg-2.mb-4.mb-lg-0
              .p-4.bg-c1.h-100
                p.mb-0 Un principio fundamental de seguridad consiste en comprender que la sentencia UPDATE opera, por defecto, sobre la totalidad de las filas de la tabla (Elmasri y Navathe, 2021). Por esta razón, resulta indispensable incorporar la cláusula WHERE, la cual delimita de forma precisa el subconjunto de registros que será actualizado.
          p.mb-0 Desde la perspectiva interna del motor PostgreSQL, y debido al mecanismo de control de concurrencia multiversión (MVCC), la ejecución de un UPDATE no sobrescribe los datos originales. En su lugar, marca la versión anterior de la fila como obsoleta y genera una nueva versión del registro, dejando al proceso autovacuum la responsabilidad de efectuar posteriormente la limpieza física correspondiente.
        .col-xl-auto.order-1.order-lg-2(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img3.png', alt='', style='width: 350px').m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Modificación y actualización condicional de datos (UPDATE)
      p(data-aos="fade-right") Cuando la información pierde vigencia operativa, PostgreSQL dispone de dos comandos con finalidades similares, pero con comportamientos internos y efectos sobre el rendimiento claramente diferenciados.
      p(data-aos="fade-right") A continuación, se resume las principales características de cada uno de ellos:
      TabsC.color-acento-contenido.mb-4(data-aos="fade-left")
        .p-3.p-md-4(titulo="DELETE")
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t1/img5.png', alt='', style='width: 430px').m-auto
            .col-lg-6.mb-4.mb-lg-0
              h4 DELETE
              p.mb-0 Elimina registros de forma selectiva mediante la cláusula #[b WHERE]. Opera bajo el esquema #[b MVCC], por lo que genera registros muertos que permanecen almacenados hasta que se ejecuta el proceso de limpieza física (#[i autovacuum]) (PostgreSQL 16.0 Documentation, 2026). Es una operación completamente transaccional y permite revertir los cambios mediante #[b ROLLBACK].
        .p-3.p-md-4(titulo="TRUNCATE")
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t1/img6.png', alt='', style='width: 430px').m-auto
            .col-lg-6.mb-4.mb-lg-0
              h4 TRUNCATE
              p.mb-0 Elimina de forma inmediata la totalidad de las filas de una tabla. No recorre los registros individualmente ni genera bitácoras de tuplas muertas; en su lugar, desasigna directamente las páginas de almacenamiento a nivel del sistema de archivos del sistema operativo. Al omitir el procesamiento transaccional granular, ofrece un rendimiento significativamente superior, aunque requiere privilegios administrativos debido a su impacto sobre la estructura física de la tabla.
      p.mb-0(data-aos="fade-right") La elección entre #[b DELETE] y #[b TRUNCATE] dependerá del objetivo de la operación, del volumen de información involucrado y del nivel de control transaccional requerido durante el proceso de administración de la base de datos.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Consultas básicas y procesamiento de datos
      p.mb-5(data-aos="fade-right") La extracción selectiva de la información constituye una de las operaciones más frecuentes en los entornos de producción. Las aplicaciones informáticas requieren respuestas inmediatas para poblar interfaces de usuario, validar procesos de autenticación y soportar la lógica de negocio. En este contexto, la sentencia #[b SELECT] representa el mecanismo central para consultar información, ya que implementa los operadores matemáticos de proyección y selección del modelo relacional.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cláusulas de restricción fundamental (WHERE), operadores lógicos y relacionales
      p(data-aos="fade-right") La cláusula ##[b WHERE] constituye el principal mecanismo de filtrado de las consultas. Cuando el proceso hijo del servidor ejecuta un escaneo sobre una tabla, evalúa cada tupla frente a la expresión condicional definida en esta cláusula. Únicamente aquellas cuyo resultado lógico sea #[b TRUE] serán incluidas en el conjunto de resultados enviado al cliente.
      p(data-aos="fade-right") Para construir criterios de búsqueda, es posible combinar operadores relacionales estándar (=, <>, >, <, >=, <=) con operadores lógicos (#[b AND], #[b OR] y #[b NOT]). Esta combinación permite expresar reglas de negocio cada vez más específicas. Adicionalmente, PostgreSQL incorpora operadores especializados para realizar búsquedas sobre datos de tipo texto:
      .row.bg-c3.mb-3
        .col-12
          .p-5
            .tarjeta.tarjeta--azul1.p-4(data-aos="fade-up")
              SlyderA(tipo="b")
                .row.align-items-center.justify-content-center.mx-4
                  .col-lg-5.mb-4.mb-lg-0
                    h4 LIKE
                    p.mb-0 Busca coincidencias de texto respetando la diferencia entre mayúsculas y minúsculas. Utiliza los comodines % (cualquier cantidad de caracteres) y _ (un único carácter).
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/t1/img6.png', alt='', style='width: 430px').m-auto
                .row.align-items-center.justify-content-center.mx-4
                  .col-lg-5.mb-4.mb-lg-0
                    h4 ILIKE
                    p.mb-0 Realiza búsquedas sin distinguir entre mayúsculas y minúsculas. También emplea los comodines % y _, facilitando consultas más flexibles sobre información textual.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/t1/img7.png', alt='', style='width: 430px').m-auto
      p.mb-5(data-aos="fade-right") Estos operadores permiten localizar fragmentos de texto dentro de los campos alfanuméricos almacenados en la base de datos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Evaluación de nulos (IS NULL) y criterios de ordenación extendida (ORDER BY)
      p.mb-4(data-aos="fade-right") Un error frecuente al consultar bases de datos consiste en intentar evaluar valores nulos mediante el operador de igualdad convencional, por ejemplo:
      .row.justify-content-center.mb-4(data-aos="fade-down")
        .col-lg-8
          .tarjeta-codigo
            pre.language-javascript(language="javascript")
              code
                | columna = NULL
      .row.mb-3
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .px-4.py-5.bg-c2
            p.mb-0 Esta comparación nunca produce el resultado esperado, ya que #[b NULL] representa la ausencia de información o un valor desconocido. En consecuencia, cualquier comparación directa se evalúa bajo la lógica trivalente del modelo relacional (Elmasri y Navathe, 2021).
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-down")
          figure
            img(src='@/assets/curso/temas/t1/img9.png', alt='', style='width: 287px').m-auto
        .col-lg-4(data-aos="fade-left")
          .row.h-100.align-items-end
            .col-12
              figure.mb-3.mb-lg-0
                img(src='@/assets/curso/temas/t1/img1.svg', alt='', style='width: 50px')
              p.mb-0 Para realizar esta validación correctamente, PostgreSQL dispone de los operadores unarios #[b IS NULL] e #[b IS NOT NULL], diseñados específicamente para identificar la presencia o ausencia de valores nulos.
      p(data-aos="fade-right") Por otra parte, los motores de bases de datos relacionales no garantizan un orden físico determinado al devolver los registros de una consulta. Cuando una aplicación necesita presentar información organizada cronológica, numérica o alfabéticamente, debe incorporar explícitamente la cláusula #[b ORDER BY]. A continuación, se presentan las directivas utilizadas para definir el criterio de ordenamiento:
      .row.justify-content-center.mb-4
        .col-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t1/img2.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b ASC]
            p.text-center Organiza los registros en orden ascendente. Corresponde al comportamiento predeterminado cuando no se especifica una dirección de ordenamiento.
        .col-10.col-lg-4(data-aos="fade-left")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t1/img3.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b DESC]
            p.text-center Organiza los registros en orden descendente.
      p.mb-5(data-aos="fade-right") El uso de ORDER BY permite obtener resultados consistentes y facilita la presentación de la información en aplicaciones y sistemas gestores de bases de datos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso: El sistema de gestión de recaudo compañía de transporte (fase de operaciones CRUD)
      p(data-aos="fade-right") Una empresa de transporte cuenta con la base de datos física implementada en la nube. A partir de esta infraestructura, el administrador de bases de datos (#[b DBA]) desarrolla el módulo del backend encargado de procesar la manipulación diaria de los despachos y las consultas relacionadas con el estado operativo de la flota.
      p.mb-4(data-aos="fade-right") Con el propósito de garantizar una interacción segura con el servidor PostgreSQL, el #[b DBA] diseña y valida el siguiente conjunto de sentencias del Lenguaje de Manipulación de Datos (#[b DML]). El siguiente bloque de sentencias ejemplifica las principales operaciones #[b CRUD] en PostgreSQL, incluyendo la inserción de registros, la actualización condicional y la consulta de información mediante criterios de filtrado y ordenamiento:
      .row.justify-content-center.mb-4
        .col-lg-10
          .tarjeta-codigo(data-aos="fade-down")
            pre.language-javascript(language="javascript")
              code
                | -- 1. Poblado inicial de la flota mediante inserción masiva optimizada
                | INSERT INTO vehiculos (placa, modelo, capacidad_pasajeros)
                | VALUES 
                |    ('TSV123', 2018, 42),
                |    ('TSV456', 2022, 38),
                |    ('TSV789', 2015, 40)
                | RETURNING placa;
                |
                | -- 2. Registro condicional de una asignación de turno para el día actual
                | INSERT INTO conductores (cedula, nombre_completo, numero_licencia, numero_telefono)
                | VALUES ('10203040', 'Jaime Tejada', 'LIC-9988', '3001234567');
                |
                | INSERT INTO asignacion_turnos (placa_vehiculo, cedula_conductor, valor_base_recaudo)
                | VALUES ('TSV123', '10203040', 150000);
                |
                | -- 3. Actualización selectiva de seguridad: ajuste del valor de recaudo por corrección de planilla
                | UPDATE asignacion_turnos
                | SET valor_base_recaudo = 155000
                | WHERE placa_vehiculo = 'TSV123' 
                |   AND fecha_turno = CURRENT_DATE;
                |
                | -- 4. Consulta de auditoría: Extraer vehículos modernos con capacidad crítica
                | SELECT placa, capacidad_pasajeros
                | FROM vehiculos
                | WHERE modelo >= 2018 
                |   AND capacidad_pasajeros > 40
                | ORDER BY capacidad_pasajeros DESC;
      p.mb-4(data-aos="fade-right") Una vez ejecutadas las sentencias, es posible analizar el comportamiento interno del motor de base de datos y la forma en que este garantiza la integridad de la información:
      .row.bg-c3
        .col-12
          .p-5
            .tarjeta.tarjeta--azul1.p-4(data-aos="fade-down")
              SlyderA(tipo="b")
                .row.align-items-center.justify-content-center.mx-4
                  .col-lg-5.mb-4.mb-lg-0
                    h4 Garantía de la consistencia referencial
                    p.mb-0 Si se intenta ejecutar una sentencia #[b INSERT INTO asignacion_turnos] utilizando una placa inexistente, por ejemplo, '#[b XYZ999]', el proceso hijo de PostgreSQL abortará inmediatamente la transacción y generará una excepción por violación de clave foránea (#[b FOREIGN KEY constraint]). Este comportamiento demuestra cómo el motor protege automáticamente la consistencia de los datos frente a registros inválidos provenientes de la aplicación frontend.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/t1/img10.png', alt='', style='width: 430px').m-auto
                .row.align-items-center.justify-content-center.mx-4
                  .col-lg-5.mb-4.mb-lg-0
                    h4 Mitigación de riesgos en las modificaciones
                    p.mb-0 Al incorporar las restricciones #[b placa_vehiculo] y #[b fecha_turno] dentro de la cláusula #[b WHERE] de la sentencia #[b UPDATE], el desarrollador limita el alcance de la modificación únicamente al turno correspondiente del vehículo seleccionado. Esta práctica evita actualizaciones masivas no deseadas y preserva la integridad del histórico operativo y contable de la empresa de transporte.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/t1/img11.png', alt='', style='width: 430px').m-auto

</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-javascript'
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
