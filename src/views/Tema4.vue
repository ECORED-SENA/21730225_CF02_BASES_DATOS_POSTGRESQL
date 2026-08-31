<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 4
        h1 Automatización reactiva y estructuras de abstracción de datos
      p(data-aos="fade-right") El diseño de infraestructuras modernas de bases de datos no solo requiere componentes lógicos ejecutados bajo demanda por las aplicaciones, sino también mecanismos autónomos y reactivos capaces de auditar y hacer cumplir las reglas del negocio de manera inmediata frente a cualquier modificación de la información.
      p.mb-0(data-aos="fade-left") De igual forma, a medida que los repositorios relacionales incrementan su volumen transaccional, resulta indispensable incorporar capas de abstracción que simplifiquen las consultas complejas y estructuras que mejoren el rendimiento del servidor.
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Automatización del negocio mediante disparadores
      .row.mb-5
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .px-4.py-4.bg-c2
            p.mb-0 En las soluciones informáticas empresariales existen procesos que deben ejecutarse obligatoriamente como consecuencia de una operación de modificación de datos. Por ejemplo, registrar una venta puede implicar la actualización automática del inventario, mientras que modificar el salario de un empleado puede requerir el almacenamiento de un registro histórico en una relación de auditoría.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-down")
          figure
            img(src='@/assets/curso/temas/t4/img1.png', alt='', style='width: 345px').m-auto
        .col-lg-4(data-aos="fade-left")
          .row.h-100.align-items-end
            .col-12
              figure.mb-3.mb-lg-0
                img(src='@/assets/curso/temas/t1/img1.svg', alt='', style='width: 50px')
              p.mb-0 Delegar estas tareas a las aplicaciones cliente incrementa el riesgo de inconsistencias cuando una regla de negocio no es implementada correctamente. Los #[i Triggers] eliminan este riesgo al ejecutar dichas acciones directamente en el servidor, de manera transparente para las aplicaciones externas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Arquitectura, ámbitos y ciclo de vida de un disparador (#[i Triggers])
      p(data-aos="fade-right") Un #[b Trigger] es un objeto asociado exclusivamente a una relación o a una vista que se ejecuta automáticamente cuando ocurre un evento del Lenguaje de Manipulación de Datos (#[b DML]), como #[b INSERT], #[b UPDATE] o #[b DELETE].
      p.mb-4 En PostgreSQL, la implementación de un disparador requiere la creación de dos componentes independientes mediante instrucciones del Lenguaje de Definición de Datos (#[b DDL]).
      .row.bg-c3.mb-4
        .col-12
          .p-5
            .tarjeta.tarjeta--azul1.p-4(data-aos="fade-up")
              SlyderA(tipo="b")
                .row.align-items-center.justify-content-center.mx-4
                  .col-lg-5.mb-4.mb-lg-0
                    h4 Función de trigger (Trigger Function)
                    p.mb-0 Función desarrollada en #[b PL/pgSQL] que no recibe parámetros convencionales y retorna obligatoriamente el tipo especial #[b TRIGGER]. Contiene la lógica que será ejecutada cuando ocurra el evento asociado.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/t4/img2.png', alt='', style='width: 430px').m-auto
                .row.align-items-center.justify-content-center.mx-4
                  .col-lg-5.mb-4.mb-lg-0
                    h4 Disparador (Trigger Object)
                    p.mb-0 Objeto creado mediante la sentencia #[b CREATE TRIGGER], encargado de asociar la función previamente compilada con una relación específica y definir el evento que activará su ejecución.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/t4/img3.png', alt='', style='width: 430px').m-auto
      p.mb-4(data-aos="fade-right") El comportamiento de un disparador también puede configurarse según la granularidad con la que debe ejecutarse:
      TabsC.color-acento-contenido.mb-4(data-aos="fade-left")
        .p-3.p-md-4(titulo="FOR EACH ROW")
          .row.align-items-center.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              h4 FOR EACH ROW
              p.mb-0 Ejecuta el disparador una vez por cada tupla afectada por la operación DML. Es la modalidad más utilizada para procesos de validación, auditoría y transformación de datos.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/t4/img4.png', alt='', style='width: 430px').m-auto
        .p-3.p-md-4(titulo="FOR EACH STATEMENT")
          .row.align-items-center.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              h4 FOR EACH STATEMENT
              p.mb-0 Ejecuta el disparador una única vez por cada instrucción SQL, independientemente del número de filas afectadas. Resulta apropiada para registrar eventos generales o actividades administrativas.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/t4/img5.png', alt='', style='width: 430px').m-auto
      p.mb-5(data-aos="fade-right") Comprender la arquitectura y el ámbito de ejecución de un disparador permite seleccionar la estrategia más adecuada según el tipo de proceso que se desea automatizar.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Creación de funciones de trigger y su asociación a eventos DML (BEFORE, AFTER, INSTEAD OF)
      p(data-aos="fade-right") El momento en que un disparador se ejecuta dentro del ciclo de vida de una transacción determina el efecto que tendrá sobre la operación realizada por el motor PostgreSQL. A continuación, se presentan las modalidades de activación disponibles.
      .row.align-items-center.justify-content-center.mb-3
        .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
            .row(titulo="BEFORE")
              .col-12
                p.mb-0 Se ejecuta antes de que PostgreSQL valide las restricciones de integridad y escriba los cambios en el almacenamiento físico. Permite modificar los valores de la tupla entrante o cancelar la operación antes de que se realicen cambios permanentes.
            .row(titulo="AFTER")
              .col-12
                p.mb-0 Se ejecuta una vez que la operación DML ha finalizado correctamente. Resulta adecuado para registrar auditorías, actualizar información relacionada o replicar datos hacia otras relaciones, ya que la operación principal fue validada exitosamente.
            .row(titulo="INSTEAD OF")
              .col-12
                p.mb-0 Se utiliza exclusivamente sobre vistas que no admiten modificaciones directas. Permite redirigir las operaciones DML hacia las relaciones base correspondientes.
        .col-lg-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img6.png', alt='', style='width: 300px').m-auto
      p() Cuando un disparador se configura con la modalidad FOR EACH ROW, PL/pgSQL proporciona automáticamente variables especiales que representan el estado de la información durante la transacción.
      .row.justify-content-center.mb-4
        .col-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t4/img1.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b NEW]
            p.text-center Contiene la nueva versión de la tupla durante operaciones #[b INSERT] y #[b UPDATE].
        .col-10.col-lg-4(data-aos="fade-left")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t4/img2.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b OLD]
            p.text-center Contiene la versión anterior de la tupla durante operaciones #[b UPDATE] y #[b DELETE].
      p.mb-0() El uso adecuado de los eventos #[b BEFORE], #[b AFTER] e #[b INSTEAD OF], junto con las variables #[b NEW] y  , permite implementar mecanismos de validación, auditoría y automatización que fortalecen la integridad y la consistencia de la información administrada por PostgreSQL.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Abstracción lógica y optimización de consultas
      p() A medida que el modelo físico de una base de datos se normaliza, las consultas utilizadas por los módulos de reportería y las aplicaciones se vuelven más complejas, ya que incorporan múltiples operaciones #[b JOIN], subconsultas y funciones de agregación. Repetir estas estructuras en diferentes componentes del software incrementa la probabilidad de errores y dificulta el mantenimiento cuando el esquema de la base de datos evoluciona.
      p.mb-5() Para reducir esta complejidad, PostgreSQL incorpora mecanismos de abstracción lógica y optimización que permiten simplificar el acceso a la información y mejorar el rendimiento de las consultas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Vistas estándar como mecanismos de simplificación y seguridad de consultas para el usuario final
      p() Una vista estándar, creada mediante la sentencia #[b CREATE VIEW], es un objeto lógico respaldado por una consulta #[b SELECT] almacenada en el catálogo del sistema. A diferencia de una relación física, no almacena información duplicada, sino que genera dinámicamente los resultados cada vez que es consultada (Elmasri y Navathe, 2021).
      p.mb-4() Cuando una aplicación ejecuta una consulta sobre una vista, PostgreSQL combina automáticamente la definición almacenada de la vista con la consulta solicitada y obtiene la información directamente desde las relaciones base. Además de simplificar el desarrollo de aplicaciones, las vistas constituyen un mecanismo importante para el control de acceso a la información.
      TabsC.color-acento-contenido.mb-4(data-aos="fade-left")
        .p-3.p-md-4(titulo="Simplificación de consultas")
          .row.align-items-center.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              h4 Simplificación de consultas
              p.mb-0 Encapsulan consultas complejas bajo un único identificador, reduciendo la repetición de código y facilitando el mantenimiento del sistema.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/t4/img7.png', alt='', style='width: 430px').m-auto
        .p-3.p-md-4(titulo="Control de acceso")
          .row.align-items-center.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              h4 Control de acceso
              p.mb-0 Permiten conceder permisos sobre información específica sin exponer directamente las relaciones que contienen datos sensibles. Por ejemplo, es posible autorizar únicamente la consulta de información pública y restringir campos relacionados con salarios o datos personales.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/t4/img8.png', alt='', style='width: 430px').m-auto
      p.mb-5(data-aos="fade-right") El uso de vistas facilita el desarrollo de aplicaciones y fortalece la seguridad al limitar el acceso únicamente a la información necesaria para cada usuario.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Vistas materializadas y su impacto en el rendimiento de reportes y consultas complejas
      p(data-aos="fade-right") Cuando una consulta procesa grandes volúmenes de información histórica y realiza operaciones de agregación complejas, ejecutar continuamente una vista estándar puede afectar el rendimiento del servidor, debido a que PostgreSQL debe recalcular el resultado en cada solicitud. Para atender este tipo de escenarios, PostgreSQL incorpora las vistas materializadas, creadas mediante la sentencia #[b CREATE MATERIALIZED VIEW]. A continuación, se presentan las principales diferencias entre ambos mecanismos:
      .row.align-items-center.justify-content-center.mb-3
        .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
            .row(titulo="Genera resultados en tiempo real")
              .col-12
                p.mb-0 Genera los resultados en tiempo real a partir de las relaciones base. Almacena físicamente el resultado de la consulta en el almacenamiento del servidor.
            .row(titulo="Muestra siempre datos actualizados")
              .col-12
                p.mb-0 Siempre refleja la información más reciente disponible. Representa una instantánea de los datos existente en el momento de su actualización.
            .row(titulo="Mayor tiempo de procesamiento")
              .col-12
                p.mb-0 Puede requerir mayor tiempo de procesamiento cuando las consultas son complejas. Reduce significativamente los tiempos de respuesta en procesos analíticos y de reportería.
            .row(titulo="No requiere actualización manual")
              .col-12
                p.mb-0 No requiere procesos adicionales de actualización. Debe sincronizarse mediante REFRESH MATERIALIZED VIEW, operación que puede ejecutarse de forma concurrente utilizando la opción CONCURRENTLY cuando las condiciones del sistema lo permiten.
        .col-lg-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img9.png', alt='', style='width: 300px').m-auto
      p.mb-5(data-aos="fade-right") Las vistas materializadas resultan especialmente útiles en procesos analíticos donde la prioridad es obtener respuestas rápidas sobre grandes volúmenes de información y los datos no requieren actualización permanente.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructuras de indexación (B-Tree, Hash) para la aceleración del acceso a los datos en producción
      p(data-aos="fade-right") Un índice es una estructura auxiliar que PostgreSQL crea y mantiene para acelerar la localización de registros, evitando la ejecución de escaneos secuenciales completos (#[i Sequential Scan]) sobre las relaciones. El motor ofrece diferentes tipos de índices, cada uno optimizado para un conjunto específico de operaciones.
      .row.justify-content-center.mb-4
        .col-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t4/img3.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b B-Tree]
            p.text-center Es la estructura predeterminada y la más versátil de PostgreSQL. Optimiza consultas que utilizan operadores de #[b comparación (<, <=, =, >=, >)] y búsquedas por rangos. Las restricciones #[b PRIMARY KEY] y #[b UNIQUE] generan automáticamente este tipo de índice.
        .col-10.col-lg-4(data-aos="fade-left")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t4/img4.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b Hash]
            p.text-center Está diseñado para consultas basadas exclusivamente en comparaciones de igualdad #[b (=)]. Almacena valores mediante funciones hash, lo que favorece búsquedas puntuales, aunque no resulta adecuado para consultas por rangos ni para operaciones de ordenamiento.
      p.mb-5(data-aos="fade-right") La selección del tipo de índice debe realizarse de acuerdo con el patrón de consultas predominante en la aplicación, buscando un equilibrio entre el rendimiento de lectura y el costo de mantenimiento de las estructuras de indexación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso. Sistema de gestión de recaudo de la empresa de transporte (fase de automatización y abstracción)
      p(data-aos="fade-right") La empresa de transporte requiere implementar un mecanismo de auditoría automática que registre de manera permanente cualquier modificación realizada sobre las planillas de recaudo diario de los autobuses. Al mismo tiempo, la gerencia necesita disponer de reportes mensuales con tiempos de respuesta mínimos, sin afectar el rendimiento de la aplicación móvil utilizada por los conductores durante la operación.
      p.mb-4(data-aos="fade-right") Para satisfacer estos requerimientos, el experto en datos diseña e implementa los componentes correspondientes en el servidor PostgreSQL:
      .row.justify-content-center.mb-4
        .col-lg-10
          .tarjeta-codigo(data-aos="fade-down")
            pre.language-javascript(language="javascript")
              code
                | -- 1. Creación de la tabla de auditoría física para el histórico de cambios
                | CREATE TABLE auditoria_recaudo (
                |     id_auditoria SERIAL PRIMARY KEY,
                |     placa_vehiculo VARCHAR(6),
                |     valor_anterior NUMERIC(12,2),
                |     valor_nuevo NUMERIC(12,2),
                |     usuario_aplicacion TEXT DEFAULT CURRENT_USER,
                |     fecha_modificacion TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
                | );
                | 
                | -- 2. Codificación de la función de trigger en PL/pgSQL
                | CREATE OR REPLACE FUNCTION fn_trg_auditar_cambio_recaudo()
                | RETURNS TRIGGER AS $$
                | BEGIN
                |     -- Validación técnica: Solo registrar si el valor financiero realmente cambió
                |     IF OLD.valor_base_recaudo <> NEW.valor_base_recaudo THEN
                |         INSERT INTO auditoria_recaudo (placa_vehiculo, valor_anterior, valor_nuevo)
                |         VALUES (OLD.placa_vehiculo, OLD.valor_base_recaudo, NEW.valor_base_recaudo);
                |     END IF;
                |     RETURN NEW; -- Permite que la operación UPDATE continúe su curso normal
                | END;
                | $$ LANGUAGE plpgsql;
                | 
                | -- 3. Asociación del disparador físico a la tabla operativa de asignación de turnos
                | CREATE TRIGGER trg_auditar_turnos
                | AFTER UPDATE ON asignacion_turnos
                | FOR EACH ROW
                | EXECUTE FUNCTION fn_trg_auditar_cambio_recaudo();
                | 
                | -- 4. Creación de una Vista Materializada para el reporte ejecutivo de gerencia
                | CREATE MATERIALIZED VIEW mv_resumen_mensual_recaudo AS
                | SELECT 
                |     v.placa,
                |     v.modelo,
                |     COUNT(t.id_turno) AS total_despachos,
                |     SUM(t.valor_base_recaudo) AS recaudo_acumulado
                | FROM vehiculos v
                | INNER JOIN asignacion_turnos t ON v.placa = t.placa_vehiculo
                | GROUP BY v.placa, v.modelo
                | ORDER BY recaudo_acumulado DESC;
                | 
                | -- 5. Creación de un Índice explícito para acelerar consultas por modelo de flota
                | CREATE INDEX idx_vehiculos_modelo ON vehiculos USING btree (modelo);
      p(data-aos="fade-right") Una vez implementados los componentes, es posible analizar el comportamiento del sistema y la contribución de cada mecanismo al fortalecimiento de la seguridad y del rendimiento.
      .row.align-items-center.justify-content-center.mb-3
        .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img10.png', alt='', style='width: 300px').m-auto
        .col-lg-9(data-aos="fade-left")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
            .row(titulo="Garantía de reactividad y no repudio")
              .col-12
                p.mb-0 Cuando un usuario ejecuta una sentencia #[b UPDATE] sobre la relación #[b asignacion_turnos], el disparador #[b trg_auditar_turnos] se activa automáticamente después de que la modificación ha sido confirmada (#[b AFTER]). Durante la ejecución, la variable #[b OLD] conserva el valor original de la operación y #[b NEW] registra el valor actualizado. Ambos datos, junto con el usuario obtenido mediante #[b CURRENT_USER], se almacenan en la relación de auditoría, fortaleciendo la trazabilidad y reduciendo el riesgo de alteraciones no autorizadas.
            .row(titulo="Aceleración de reportes mediante almacenamiento físico")
              .col-12
                p.mb-0 La gerencia puede consultar la vista materializada #[b mv_resumen_mensual_recaudo] sin ejecutar nuevamente las operaciones de agregación sobre las relaciones operativas. PostgreSQL recupera directamente la información almacenada, reduciendo considerablemente los tiempos de respuesta. Al finalizar la jornada, la ejecución de #[b REFRESH MATERIALIZED VIEW mv_resumen_mensual_recaudo] sincroniza la información para mantener actualizados los reportes sin afectar el desempeño del entorno de producción.
      p.mb-0(data-aos="fade-right") La combinación de disparadores, vistas, vistas materializadas e índices constituye una estrategia fundamental para fortalecer la automatización, la seguridad y el rendimiento de las bases de datos PostgreSQL utilizadas en entornos empresariales.

</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-javascript'
export default {
  name: 'Tema4',
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
