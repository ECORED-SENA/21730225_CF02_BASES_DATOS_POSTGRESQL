<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Lógica programable en el servidor (PL/pgSQL)
      P.mb-0(data-aos="fade-right") El desarrollo de soluciones informáticas modernas exige que las reglas críticas del negocio no dependan exclusivamente de las capas de aplicación externas, como el frontend o el backend. Centralizar la lógica transaccional en el servidor reduce el tráfico de red, disminuye la latencia y fortalece la consistencia de los datos durante la ejecución de las operaciones. Con este propósito, PostgreSQL incorpora un entorno de programación que permite implementar procesos, automatizar tareas y ejecutar reglas de negocio directamente en el motor de base de datos.
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Programación procedural en PostgreSQL
      p(data-aos="fade-right") El lenguaje SQL tradicional responde a un paradigma declarativo, en el cual el desarrollador especifica qué información desea consultar o modificar, sin definir de manera explícita el flujo de ejecución necesario para lograrlo.
      .row.mb-5
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .px-4.py-4.bg-c2
            p.mb-0 Para incorporar estructuras propias de la programación imperativa, como variables, condicionales y ciclos, PostgreSQL implementa #[b PL/pgSQL] (Procedural Language/PostgreSQL), un entorno de programación que se ejecuta directamente en el servidor dentro de un espacio de memoria aislado.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-down")
          figure
            img(src='@/assets/curso/temas/t3/img1.png', alt='', style='width: 260px').m-auto
        .col-lg-4(data-aos="fade-left")
          .row.h-100.align-items-end
            .col-12
              figure.mb-3.mb-lg-0
                img(src='@/assets/curso/temas/t1/img1.svg', alt='', style='width: 50px')
              p.mb-0 En este apartado se estudiará la sintaxis básica para declarar variables y controlar el flujo de ejecución. Asimismo, se analizarán las diferencias funcionales entre las funciones almacenadas, orientadas al retorno de datos, y los procedimientos almacenados, diseñados para administrar procesos transaccionales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructuras de control de flujo, ciclos, condicionales y declaración de variables
      p(data-aos="fade-right") Un bloque de código desarrollado en PL/pgSQL posee una estructura jerárquica claramente definida, organizada mediante palabras clave que delimitan cada una de sus secciones. A continuación, se presentan los componentes fundamentales de un bloque procedural:
      .row.justify-content-center.mb-3
        .col-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t3/img1.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b DECLARE]
            p.text-center Define las variables locales, sus identificadores y los tipos de datos que serán utilizados durante la ejecución del bloque.
        .col-10.col-lg-4(data-aos="fade-down")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t3/img2.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b BEGIN]
            p.text-center Contiene las instrucciones que conforman la lógica del programa.
        .col-10.col-lg-4(data-aos="fade-left")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t3/img3.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b END]
            p.text-center Finaliza el bloque de código y marca el cierre de la ejecución.
      .row.bg-c5.mb-4
        .col-12
          .px-5
            p(data-aos="fade-right") Para implementar la lógica de negocio, PL/pgSQL incorpora diferentes estructuras de control que permiten tomar decisiones y repetir procesos. A continuación, se resumen las principales estructuras utilizadas durante el desarrollo procedural.
            .row.justify-content-center.mb-3
              .col-lg-10
                .titulo-sexto.color-secundario.mb-3(data-aos="fade-right")
                  h5 Tabla 1. 
                  span Principales estructuras de control de flujo en PL/pgSQL
                .tabla-a.color-acento-contenido(data-aos="fade-left")
                  table
                    thead
                      tr
                        th(style="width: 30%").text-left Estructura
                        th.text-left Aplicación
                    tbody.bg-white
                      tr
                        td
                          p.mb-0 #[b IF...THEN...ELSE...END IF]
                        td
                          p.mb-0 Ejecuta acciones diferentes según el cumplimiento de una condición lógica.
                      tr
                        td
                          p.mb-0 #[b CASE]
                        td
                          p.mb-0 Evalúa múltiples condiciones y selecciona una alternativa de ejecución.
                      tr
                        td
                          p.mb-0 #[b LOOP]
                        td
                          p.mb-0 Repite un conjunto de instrucciones hasta que se cumpla una condición de salida.
                      tr
                        td
                          p.mb-0 #[b WHILE]
                        td
                          p.mb-0 Ejecuta un bloque de instrucciones mientras una condición permanezca verdadera.
                      tr
                        td
                          p.mb-0 #[b FOR registro IN SELECT... LOOP]
                        td
                          p.mb-0 Recorre automáticamente los registros devueltos por una consulta, permitiendo procesar colecciones relacionales de forma eficiente mediante cursores implícitos.
            p.mb-5(data-aos="fade-right") El uso adecuado de estas estructuras permite implementar procesos automatizados y reglas de negocio directamente en el servidor, reduciendo la necesidad de trasladar el procesamiento a las aplicaciones cliente.
            .titulo-tercer-nivel.mb-5(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Creación, modificación y ejecución de funciones personalizadas (#[i Stored Functions])
            p(data-aos="fade-right") Las funciones almacenadas se crean mediante la sentencia CREATE FUNCTION y se fundamentan en un modelo de procesamiento que recibe parámetros de entrada, ejecuta una secuencia de instrucciones y retorna obligatoriamente un valor o un conjunto estructurado de registros.
            p.mb-0(data-aos="fade-right") Uno de los aspectos técnicos más importantes durante su definición corresponde a la especificación de la volatilidad de la función, característica que permite al optimizador determinar si el resultado puede reutilizarse para mejorar el rendimiento de las consultas. A continuación, se presentan los niveles de volatilidad disponibles en PostgreSQL:
      .row.bg-c3.mb-4
        .col-12
          .p-5
            .tarjeta.tarjeta--azul1.p-4(data-aos="fade-up")
              SlyderA(tipo="b")
                .row.align-items-center.justify-content-center.mx-4
                  .col-lg-5.mb-4.mb-lg-0
                    h4 IMMUTABLE
                    p.mb-0 Siempre produce el mismo resultado para los mismos parámetros de entrada. PostgreSQL puede reutilizar el resultado y optimizar su ejecución mediante almacenamiento en memoria.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/t3/img2.png', alt='', style='width: 430px').m-auto
                .row.align-items-center.justify-content-center.mx-4
                  .col-lg-5.mb-4.mb-lg-0
                    h4 STABLE
                    p.mb-0 Mantiene un resultado constante durante la ejecución de una consulta, aunque puede cambiar entre diferentes transacciones.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/t3/img3.png', alt='', style='width: 430px').m-auto
                .row.align-items-center.justify-content-center.mx-4
                  .col-lg-5.mb-4.mb-lg-0
                    h4 VOLATILE
                    p.mb-0 Puede producir resultados distintos incluso dentro de una misma consulta, por lo que el optimizador debe ejecutarla cada vez que sea invocada.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/t3/img4.png', alt='', style='width: 430px').m-auto
      p(data-aos="fade-right") Las funciones almacenadas pueden utilizarse directamente dentro de sentencias SELECT, WHERE, INSERT, UPDATE y otras instrucciones SQL, lo que facilita la incorporación de lógica reutilizable en las consultas.
      p.mb-4(data-aos="fade-right") La siguiente función ejemplifica la creación de una función almacenada en PL/pgSQL, la cual recibe un parámetro, realiza un procesamiento y retorna un valor al finalizar su ejecución:
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta-codigo(data-aos="fade-down")
            pre.language-javascript(language="javascript")
              code
                | -- Sintaxis base de una función en PL/pgSQL
                | CREATE OR REPLACE FUNCTION calcular_antiguedad(anio_modelo INT)
                | RETURNS INT AS $$
                | BEGIN
                |     RETURN EXTRACT(YEAR FROM CURRENT_DATE) - anio_modelo;
                | END;
                | $$ LANGUAGE plpgsql STABLE;
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Desarrollo de procedimientos almacenados (#[i Stored Procedures])
      .row.bg-c5
        .col-12
          .px-5
            p(data-aos="fade-right") Los procedimientos almacenados fueron incorporados en las versiones modernas de PostgreSQL para ofrecer una implementación alineada con el estándar ANSI SQL. Se crean mediante la sentencia CREATE PROCEDURE y, a diferencia de las funciones, no están orientados al retorno de valores, sino a la ejecución de procesos. Su invocación se realiza mediante el comando CALL.
            p.mb-4(data-aos="fade-right") La principal ventaja de los procedimientos almacenados consiste en la capacidad de administrar el control transaccional desde el propio servidor, permitiendo confirmar o revertir cambios durante la ejecución de un proceso. A continuación, se presentan las principales diferencias entre funciones y procedimientos almacenados.
            .row.justify-content-center.mb-3
              .col-lg-10
                .titulo-sexto.color-secundario.mb-3(data-aos="fade-right")
                  h5 Tabla 2. 
                  span Diferencias entre funciones almacenadas y procedimientos almacenados en PostgreSQL
                .tabla-a.color-acento-contenido(data-aos="fade-left")
                  table
                    thead
                      tr
                        th.text-left Funciones almacenadas
                        th.text-left Procedimientos almacenados
                    tbody.bg-white
                      tr
                        td
                          p.mb-0 Se crean mediante #[b CREATE FUNCTION].
                        td
                          p.mb-0 Se crean mediante #[b CREATE PROCEDURE].
                      tr
                        td
                          p.mb-0 Deben retornar un valor o un conjunto de registros.
                        td
                          p.mb-0 No requieren retornar valores.
                      tr
                        td
                          p.mb-0 Pueden utilizarse dentro de consultas SQL.
                        td
                          p.mb-0 Se ejecutan mediante el comando #[b CALL].
                      tr
                        td
                          p.mb-0 Están orientadas a encapsular lógica reutilizable y operaciones de consulta.
                        td
                          p.mb-0 Están orientados a procesos administrativos y operaciones transaccionales complejas.
                      tr
                        td
                          p.mb-0 No administran el control transaccional mediante #[b COMMIT] o #[b ROLLBACK] de la misma forma que los procedimientos.
                        td
                          p.mb-0 Permiten ejecutar #[b COMMIT] y #[b ROLLBACK] durante el procesamiento, facilitando la ejecución de procesos por lotes y operaciones de larga duración.
            p.mb-0(data-aos="fade-right") La administración del control transaccional convierte a los procedimientos almacenados en una herramienta esencial para procesos como cierres contables, sincronizaciones masivas de inventarios o cualquier operación que requiera procesar grandes volúmenes de información de manera segura y controlada.
            Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Control de errores y robustez del código
      p.mb-5(data-aos="fade-right") Las aplicaciones empresariales deben garantizar que los errores durante la ejecución de procesos no comprometan la integridad de la información ni interrumpan innecesariamente las operaciones del sistema. Para ello, PL/pgSQL incorpora mecanismos que permiten detectar excepciones, administrar fallos de forma controlada y preservar la consistencia de los datos durante la ejecución de procesos transaccionales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Gestión y captura avanzada de excepciones técnicas (EXCEPTION)
      p(data-aos="fade-right") PL/pgSQL incorpora un subsistema de captura de errores mediante la cláusula #[b EXCEPTION], ubicada inmediatamente antes del cierre del bloque principal de ejecución. Cuando se produce un error dentro del bloque #[b BEGIN], PostgreSQL interrumpe la instrucción en ejecución y transfiere automáticamente el control hacia la sección destinada al tratamiento de excepciones, evitando que el fallo sea propagado directamente a la aplicación cliente. El lenguaje permite interceptar diferentes tipos de errores mediante identificadores estándar del sistema.
      .row.justify-content-center.mb-3
        .col-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t3/img4.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b UNIQUE_VIOLATION]
            p.text-center Detecta intentos de insertar registros con valores duplicados en restricciones de unicidad o claves primarias.
        .col-10.col-lg-4(data-aos="fade-down")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t3/img2.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b FOREIGN_KEY_VIOLATION]
            p.text-center Identifica violaciones de integridad referencial ocasionadas por claves foráneas sin correspondencia.
        .col-10.col-lg-4(data-aos="fade-left")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t3/img3.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b DIVISION_BY_ZERO]
            p.text-center Captura operaciones aritméticas que intentan dividir un valor entre cero.
      p.mb-5(data-aos="fade-right") Durante el procesamiento de una excepción, es posible acceder a información de diagnóstico suministrada por PostgreSQL, como el código del error (#[b SQLSTATE]) y el mensaje descriptivo (#[b SQLERRM]). Estos elementos permiten implementar respuestas específicas según el tipo de incidente detectado.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Uso de bloques condicionales para resguardar la consistencia de los datos en ejecuciones por lotes
      .row.mb-5
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .px-4.py-4.bg-c2
            p.mb-0 Como complemento del manejo de excepciones, PL/pgSQL incorpora la instrucción #[b RAISE], la cual permite emitir mensajes personalizados hacia la consola administrativa, registrar advertencias en la bitácora del servidor o provocar deliberadamente la interrupción de una transacción mediante #[b RAISE EXCEPTION]. La combinación de bloques condicionales, subbloques anidados y mecanismos de captura de errores permite preservar la consistencia atómica de los datos durante procesos masivos.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-down")
          figure
            img(src='@/assets/curso/temas/t3/img5.png', alt='', style='width: 390px').m-auto
        .col-lg(data-aos="fade-left")
          .row.h-100.align-items-end
            .col-12
              figure.mb-3.mb-lg-0
                img(src='@/assets/curso/temas/t1/img1.svg', alt='', style='width: 50px')
              p.mb-0 Cuando un registro incumple una regla de negocio, el bloque de control puede capturar el incidente, descartar únicamente la operación afectada o registrar el evento en una relación de auditoría, permitiendo que el procesamiento de los demás registros continúe sin afectar la ejecución global del proceso.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso. Sistema de gestión de recaudo de la empresa de transporte (fase de lógica procedural)
      p(data-aos="fade-right") La empresa de transporte requiere automatizar el proceso de liquidación financiera diaria de los turnos de los conductores, garantizando que el cálculo incorpore las penalizaciones correspondientes por antigüedad de los vehículos y que el procedimiento continúe operando de manera controlada ante posibles errores de inserción.
      p.mb-4(data-aos="fade-right") Con este propósito, el experto en datos diseña e implementa el siguiente procedimiento almacenado en la base de datos corporativa. El siguiente procedimiento almacenado ejemplifica la automatización de una regla de negocio, incorporando validaciones, control transaccional y manejo de excepciones mediante PL/pgSQL:
      .row.justify-content-center.mb-4
        .col-lg-10
          .tarjeta-codigo(data-aos="fade-down")
            pre.language-javascript(language="javascript")
              code
                | -- Creación del procedimiento almacenado para la liquidación diaria transaccional
                | CREATE OR REPLACE PROCEDURE liquidar_jornada_conductor(
                |     p_cedula VARCHAR,
                |     p_placa VARCHAR,
                |     p_valor_bruto NUMERIC
                | )
                | AS $$
                | DECLARE
                |     v_modelo_vehiculo INT;
                |     v_antiguedad INT;
                |     v_descuento_mantenimiento NUMERIC := 0;
                |     v_valor_final_recaudo NUMERIC;
                | BEGIN
                |     -- 1. Extracción y validación de datos base del catálogo físico
                |     SELECT modelo INTO v_modelo_vehiculo 
                |     FROM vehiculos 
                |     WHERE placa = p_placa;
                |     
                |     -- Invocación de la función estable para determinar la antigüedad
                |     v_antiguedad := calcular_antiguedad(v_modelo_vehiculo);
                |     
                |     -- 2. Aplicación de regla de negocio: Penalización por desgaste de flota vieja
                |     IF v_antiguedad > 5 THEN
                |         v_descuento_mantenimiento := p_valor_bruto * 0.05; -- 5% de descuento técnico
                |     END IF;
                |     
                |     v_valor_final_recaudo := p_valor_bruto - v_descuento_mantenimiento;
                |     
                |     -- 3. Intento de inserción transaccional en la tabla operativa
                |     INSERT INTO asignacion_turnos (placa_vehiculo, cedula_conductor, valor_base_recaudo)
                |     VALUES (p_placa, p_cedula, v_valor_final_recaudo);
                |     
                |     -- Confirmación explícita de los cambios si no hay errores
                |     COMMIT;
                |     RAISE NOTICE 'Liquidación procesada con éxito para el conductor %', p_cedula;
                | 
                | EXCEPTION
                |     -- 4. Bloque defensivo de captura de excepciones
                |     WHEN UNIQUE_VIOLATION THEN
                |         -- Evita duplicar el turno del conductor para la misma fecha
                |         ROLLBACK;
                |         RAISE WARNING 'Excepción controlada: El conductor % ya posee un turno registrado hoy.', p_cedula;
                |         
                |     WHEN OTHERS THEN
                |         -- Captura cualquier otro error físico imprevisto
                |         ROLLBACK;
                |         RAISE EXCEPTION 'Fallo crítico en el servidor: % - %', SQLSTATE, SQLERRM;
                | END;
                | $$ LANGUAGE plpgsql;
      p(data-aos="fade-right") Una vez implementado el procedimiento, es posible analizar el comportamiento del motor PostgreSQL y la manera en que la lógica procedural fortalece la consistencia y la confiabilidad del proceso transaccional.
      .row.align-items-center.justify-content-center.mb-3
        .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img6.png', alt='', style='width: 300px').m-auto
        .col-lg-9(data-aos="fade-left")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
            .row(titulo="Centralización de la regla de negocio")
              .col-12
                p.mb-0 El cálculo de la penalización del 5 % aplicable a los autobuses con más de cinco años de servicio se ejecuta directamente en la memoria compartida del servidor PostgreSQL. La aplicación #[i backend] únicamente invoca el procedimiento mediante el comando #[b CALL liquidar_jornada_conductor(...)], reduciendo la transferencia de datos y garantizando que la lógica financiera permanezca centralizada en el motor de base de datos.
            .row(titulo="Robustez y control atómico")
              .col-12
                p.mb-0 Al implementar el manejo específico de la excepción #[b WHEN UNIQUE_VIOLATION], si un operador registra accidentalmente la misma operación en dos ocasiones, PostgreSQL intercepta el error de duplicidad de clave, ejecuta un #[b ROLLBACK] seguro sobre la operación afectada y genera un mensaje de advertencia controlado. De esta manera, se evita la interrupción del proceso y se preserva la estabilidad de la aplicación utilizada por la empresa.
      p.mb-0(data-aos="fade-right") El uso conjunto de #[b EXCEPTION], #[b RAISE], bloques condicionales y procedimientos almacenados permite desarrollar soluciones transaccionales robustas, capaces de responder adecuadamente ante situaciones imprevistas y de mantener la integridad de la información durante la ejecución de procesos críticos.

</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-javascript'
export default {
  name: 'Tema3',
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
