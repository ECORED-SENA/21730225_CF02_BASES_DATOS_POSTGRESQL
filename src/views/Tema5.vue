<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 5
        h1 Perímetros de seguridad, control de acceso granular y continuidad del negocio
      p.mb-0(data-aos="fade-right") Una infraestructura de datos relacional destinada a entornos de producción debe incorporar mecanismos que protejan la confidencialidad de la información y garanticen la continuidad operativa frente a fallos físicos o lógicos. En este contexto, el especialista en bases de datos debe considerar el servidor como un perímetro expuesto a amenazas constantes, lo que hace indispensable implementar controles de acceso, mecanismos de autenticación y estrategias de recuperación de la información.
      Separador
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Directivas de seguridad perimetral y autenticación en el servidor
      p.mb-5(data-aos="fade-right") El primer nivel de protección de PostgreSQL se encuentra en la capa de red del sistema operativo. Antes de validar los privilegios de un usuario sobre la información almacenada, el servidor debe comprobar el origen de la conexión y el mecanismo utilizado para autenticar la identidad del cliente.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Configuración de directivas de escucha global (postgresql.conf)
      p(data-aos="fade-right") Después de una instalación estándar en un entorno local, PostgreSQL configura el proceso principal para aceptar conexiones únicamente desde la interfaz de bucle local (#[b localhost] o #[b 127.0.0.1]). Cuando las aplicaciones se ejecutan en servidores remotos o en infraestructuras distribuidas, el administrador debe modificar la directiva #[b listen_addresses] dentro del archivo #[b postgresql.conf] para permitir conexiones externas. A continuación, se presentan las principales directivas relacionadas con la configuración de la escucha del servidor;
      TabsC.color-acento-contenido.mb-4(data-aos="fade-left")
        .p-3.p-md-4(titulo="listen_addresses")
          .row.align-items-center.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              h4 listen_addresses
              p.mb-0 Define las interfaces de red desde las cuales PostgreSQL aceptará conexiones. La configuración #[b listen_addresses = '*'] habilita la recepción de solicitudes desde todas las interfaces disponibles.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/t5/img1.png', alt='', style='width: 430px').m-auto
        .p-3.p-md-4(titulo="ssl = on")
          .row.align-items-center.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              h4 ssl = on
              p.mb-0 Activa el uso de conexiones cifradas mediante los protocolos #[b SSL/TLS], protegiendo la información transmitida entre el servidor y las aplicaciones cliente.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/t5/img2.png', alt='', style='width: 430px').m-auto
      p.mb-5(data-aos="fade-right") Aunque la configuración #[b listen_addresses = '*'] facilita el acceso remoto al servidor, también amplía la superficie de exposición. Por esta razón, debe implementarse junto con mecanismos de autenticación y comunicaciones cifradas que fortalezcan la seguridad de la infraestructura.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Control de acceso perimetral mediante el archivo pg_hba.conf
      .row.bg-c5
        .col-12
          .px-5
            p(data-aos="fade-right") El archivo #[b pg_hba.conf] (#[i Host-Based Authentication]) constituye el mecanismo nativo de control de acceso de PostgreSQL. Cada registro define una regla que determina si una conexión será aceptada o rechazada, teniendo en cuenta el origen de la solicitud, el usuario, la base de datos y el método de autenticación configurado. A continuación, se presentan los elementos que conforman cada regla de autenticación.
            .row.justify-content-center.mb-3
              .col-lg-10
                .titulo-sexto.color-secundario.mb-3(data-aos="fade-right")
                  h5 Tabla 3. 
                  span Campos que conforman una regla de autenticación en el archivo pg_hba.conf
                .tabla-a.color-acento-contenido(data-aos="fade-left")
                  table
                    thead
                      tr
                        th(style="width: 30%").text-left Campo
                        th.text-left Descripción
                    tbody.bg-white
                      tr
                        td
                          p.mb-0 #[b Tipo de conexión]
                        td
                          p.mb-0 Define si la conexión se realiza de forma local o mediante TCP/IP.
                      tr
                        td
                          p.mb-0 #[b Base de datos]
                        td
                          p.mb-0 Especifica la base de datos sobre la cual aplica la regla.
                      tr
                        td
                          p.mb-0 #[b Usuario]
                        td
                          p.mb-0 Indica el usuario o grupo de usuarios autorizado por la configuración.
                      tr
                        td
                          p.mb-0 #[b Dirección IP / Máscara de red]
                        td
                          p.mb-0 Determina el origen permitido para establecer la conexión.
                      tr
                        td
                          p.mb-0 #[b Método de autenticación]
                        td
                          p.mb-0 Define el mecanismo mediante el cual PostgreSQL verificará la identidad del usuario.
            p(data-aos="fade-right") El siguiente ejemplo presenta la estructura básica de una regla de autenticación en el archivo pg_hba.conf, utilizada para controlar el acceso de usuarios al servidor PostgreSQL según el origen de la conexión y el método de autenticación:
            .row.justify-content-center.mb-4
              .col-lg-10
                .tarjeta-codigo(data-aos="fade-down")
                  pre.language-javascript(language="javascript")
                    code
                      | # Formato técnico de una regla de exclusión en pg_hba.conf
                      | # TIPO    BASE_DATOS      USUARIO         DIRECCIÓN_IP          MÉTODO
                      |   host    sana_red_db     app_backend     192.168.10.25/32      scram-sha-256
                      |   host    all             all             0.0.0.0/0             reject
      .row
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .px-4.py-5.bg-c2
            p.mb-0 Como práctica recomendada, PostgreSQL utiliza el método de autenticación scram-sha-256, el cual implementa un esquema criptográfico de desafío y respuesta que fortalece la protección de las credenciales durante el proceso de autenticación.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-down")
          figure
            img(src='@/assets/curso/temas/t5/img3.png', alt='', style='width: 290px').m-auto
        .col-lg-4(data-aos="fade-left")
          .row.h-100.align-items-end
            .col-12
              figure.mb-3.mb-lg-0
                img(src='@/assets/curso/temas/t1/img1.svg', alt='', style='width: 50px')
              p.mb-0 Las reglas definidas en pg_hba.conf se procesan de forma secuencial. La primera coincidencia determina si la conexión será autorizada o rechazada; por ello, el orden de las reglas constituye un aspecto fundamental para garantizar un control de acceso seguro y coherente con las políticas de la organización.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Administración de identidades corporativas y matriz de privilegios privados
      p.mb-5(data-aos="fade-right") En PostgreSQL, los conceptos tradicionales de usuario y grupo se integran bajo una única entidad denominada rol (#[b ROLE]). Este modelo simplifica la administración de identidades y facilita la aplicación del Principio del Menor Privilegio, según el cual cada usuario o componente del sistema debe disponer únicamente de los permisos indispensables para desempeñar sus funciones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Creación de roles, usuarios y herencia jerárquica
      p(data-aos="fade-right") La creación de perfiles de acceso se realiza mediante la sentencia #[b CREATE ROLE]. Cuando un rol requiere autenticarse de manera independiente en el servidor, debe configurarse con el atributo #[b LOGIN], adquiriendo el comportamiento tradicional de un usuario.
      p(data-aos="fade-right") Como práctica recomendada para la administración de bases de datos, se aconseja crear inicialmente roles de asignación que agrupen permisos comunes y, posteriormente, asociar dichos roles a los usuarios operativos de la organización. A continuación, se presentan los principales elementos involucrados en este modelo de administración.
      .row.align-items-center.mb-4
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img4.png', alt='', style='width: 290px').m-auto
        .col-lg-8(data-aos="fade-left")
          SlyderF.circl-arrow(columnas="col-md-6")
            .tarjeta.color-primario1.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img1.svg' alt='')
              h2.text-center CREATE ROLE
              p.text-center Crea un nuevo rol dentro de PostgreSQL.
            .tarjeta.color-primario1.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img2.svg' alt='')
              h2.text-center LOGIN
              p.text-center Habilita al rol para iniciar sesión en el servidor como usuario independiente.
            .tarjeta.color-primario1.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img3.svg' alt='')
              h2.text-center Rol de asignación
              p.text-center Agrupa privilegios comunes del negocio sin permitir autenticación directa. Facilita la administración centralizada de permisos.
            .tarjeta.color-primario1.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img4.svg' alt='')
              h2.text-center INHERIT
              p.text-center Permite que un usuario herede automáticamente los privilegios asignados al rol del cual forma parte, simplificando la gestión de permisos en organizaciones con múltiples usuarios.
      p(data-aos="fade-right") Este modelo favorece una administración más eficiente, ya que los cambios en los privilegios se realizan sobre los roles de asignación y se propagan automáticamente a los usuarios asociados.
      p.mb-4(data-aos="fade-right") El siguiente ejemplo presenta la creación de un rol de grupo y la asignación de un usuario operativo, aplicando el modelo de herencia de privilegios en PostgreSQL:
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta-codigo(data-aos="fade-down")
            pre.language-javascript(language="javascript")
              code
                | -- Creación de un rol de grupo (Matriz de acceso para auditores)
                | CREATE ROLE rol_auditoria_salud WITH NOSUPERUSER NOCREATEDB INHERIT;
                | 
                | -- Creación de un usuario operativo asignado al rol grupal
                | CREATE USER auditor_clinico WITH PASSWORD 'ClaveSegura_2026' INHERIT;
                | GRANT rol_auditoria_salud TO auditor_clinico;
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Matriz de seguridad granular (GRANT y REVOKE)
      p(data-aos="fade-right") El control de las operaciones que un usuario puede ejecutar sobre los objetos de una base de datos se administra mediante las instrucciones del Lenguaje de Control de Datos (#[b DCL]). A continuación, se presentan los comandos fundamentales para la asignación y revocación de privilegios.
      .row.justify-content-center.mb-4
        .col-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t5/img5.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b GRANT]
            p.text-center Concede privilegios específicos, como #[b SELECT], #[b INSERT], #[b UPDATE] y #[b DELETE], sobre relaciones, vistas u otros objetos de la base de datos a uno o varios roles.
        .col-10.col-lg-4(data-aos="fade-left")
          .p-4.bg-c4
            figure.mb-4
              img(src='@/assets/curso/temas/t5/img6.svg', alt='', style='width: 120px').m-auto
            p.text-center #[b REVOKE]
            p.text-center Revoca de forma inmediata los privilegios previamente otorgados, impidiendo la ejecución de operaciones no autorizadas.
      .row.align-items-center
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img5.png', alt='', style='width: 470px').m-auto
        .col-lg-7(data-aos="fade-left")
          .row.align-items-center.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/temas/t5/img7.svg', alt='', style='width: 60px').m-auto
            .col
              p.mb-0 La administración de privilegios puede realizarse tanto a nivel de esquema como de relación, permitiendo implementar un modelo de seguridad ajustado a las funciones de cada perfil.
          p.mb-0 Por ejemplo, una aplicación de facturación médica puede requerir permisos INSERT sobre la relación de cobros para registrar nuevas transacciones, mientras que el personal encargado de la recepción de citas únicamente necesita privilegios SELECT para consultar la información. Esta distribución de permisos reduce el riesgo de modificaciones accidentales o acciones maliciosas que comprometan la integridad de los datos y la seguridad de la organización.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Protocolos de respaldo
      p.mb-5(data-aos="fade-right") La continuidad del negocio y la resiliencia operativa frente a desastres físicos o lógicos, como fallos de energía o corrupción del almacenamiento, dependen de la implementación de mecanismos de recuperación que permitan restaurar la información de manera confiable. En un entorno corporativo, una base de datos solo puede considerarse protegida cuando dispone de estrategias que permitan reconstruir su estado hasta el momento inmediatamente anterior a una contingencia.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Fundamentos operativos del #[i log] de transacciones o Write-Ahead Logging (WAL)
      p(data-aos="fade-right") El mecanismo #[b Write-Ahead Logging (WAL)] constituye uno de los pilares tecnológicos que garantizan la propiedad de durabilidad del modelo #[b ACID] en PostgreSQL. Su principio de funcionamiento establece que ninguna modificación sobre las tuplas físicas se almacena en las relaciones de datos hasta que el cambio ha sido registrado previamente de forma secuencial en los archivos de transacciones #[b WAL], ubicados en el directorio #[b pg_wal].
      p.mb-4(data-aos="fade-right") Cuando ocurre una interrupción inesperada del servidor, PostgreSQL utiliza la información registrada en estos archivos para recuperar automáticamente el estado consistente de la base de datos. A continuación, se presentan las principales funciones del mecanismo #[b WAL].
      .row.bg-c3.mb-4
        .col-12
          .p-5
            .tarjeta.tarjeta--azul1.p-4(data-aos="fade-up")
              SlyderA(tipo="b")
                .row.align-items-center.justify-content-center.mx-4
                  .col-lg-5.mb-4.mb-lg-0
                    h4 Registro previo de transacciones
                    p.mb-0 Almacena cada modificación en los archivos #[b WAL] antes de actualizar las relaciones físicas de la base de datos.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/t5/img6.png', alt='', style='width: 430px').m-auto
                .row.align-items-center.justify-content-center.mx-4
                  .col-lg-5.mb-4.mb-lg-0
                    h4 Recuperación automática
                    p.mb-0 Durante el reinicio del servidor, PostgreSQL analiza los archivos #[b WAL] para reconstruir el estado consistente del clúster.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/t5/img7.png', alt='', style='width: 430px').m-auto
                .row.align-items-center.justify-content-center.mx-4
                  .col-lg-5.mb-4.mb-lg-0
                    h4 Aplicación de transacciones confirmadas
                    p.mb-0 Ejecuta nuevamente los cambios asociados a transacciones confirmadas mediante #[b COMMIT] que aún no habían sido escritos en las relaciones físicas.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/t5/img8.png', alt='', style='width: 430px').m-auto
                .row.align-items-center.justify-content-center.mx-4
                  .col-lg-5.mb-4.mb-lg-0
                    h4 Reversión de transacciones incompletas
                    p.mb-0 Descarta las operaciones que quedaron inconclusas mediante un proceso equivalente a #[b ROLLBACK], preservando la integridad de la información.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/temas/t5/img9.png', alt='', style='width: 430px').m-auto
      p.mb-5(data-aos="fade-right") Este mecanismo garantiza que la base de datos pueda recuperarse de forma consistente incluso cuando la interrupción ocurre durante la ejecución de operaciones críticas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/img1.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Respaldos lógicos y restauración mediante comandos de consola (pg_dump, pg_restore)
      p(data-aos="fade-right") Además del registro de transacciones, PostgreSQL incorpora utilidades de consola que permiten generar copias de seguridad lógicas sin interrumpir la disponibilidad del servicio. A continuación, se presentan las principales herramientas utilizadas durante las tareas de respaldo y restauración:
      .row.align-items-center.justify-content-center.mb-3
        .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
            .row(titulo="pg_dump")
              .col-12
                p.mb-0 Genera una copia de seguridad de una base de datos específica, incluyendo la estructura lógica (#[b DDL]) y los datos (#[b DML]). Permite crear archivos en formato de texto (#[b .sql]) o en formatos binarios comprimidos, como #[b .backup] y #[b .tar].
            .row(titulo="pg_dumpall")
              .col-12
                p.mb-0 Genera un respaldo completo del clúster PostgreSQL, incluyendo todas las bases de datos, los roles, los usuarios y la configuración global de privilegios. Resulta especialmente útil durante procesos de migración o recuperación integral del servidor.
            .row(titulo="pg_restore")
              .col-12
                p.mb-0 Restaura copias de seguridad generadas en formatos binarios compatibles con #[b pg_dump], reconstruyendo la estructura y los datos de la base de datos.
            .row(titulo="psql")
              .col-12
                p.mb-0 Ejecuta archivos de respaldo en formato #[b .sql], permitiendo reconstruir el repositorio mediante instrucciones SQL almacenadas en el script de recuperación.
        .col-lg-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img10.png', alt='', style='width: 300px').m-auto
      p(data-aos="fade-right") La selección de la herramienta adecuada depende del alcance del respaldo requerido y del formato utilizado para almacenar la copia de seguridad. La combinación de estas utilidades con el mecanismo #[b WAL] constituye una estrategia fundamental para garantizar la recuperación de la información y la continuidad operativa de los sistemas basados en PostgreSQL.
      p(data-aos="fade-right") El siguiente ejemplo presenta los comandos básicos para generar y restaurar un respaldo lógico de una base de datos PostgreSQL mediante las utilidades #[b pg_dump] y #[b pg_restore].
      .row.justify-content-center
        .col-lg-10
          .tarjeta-codigo(data-aos="fade-down")
            pre.language-javascript(language="javascript")
              code
                | # Comando de consola para realizar un respaldo comprimido de alta fidelidad
                | pg_dump -h host_remoto -U postgres -F c -b -v -f backup_SanaRed_2026.backup sana_red_db
                | 
                | # Comando de consola para restaurar el respaldo binario en un nuevo servidor vacío
                | pg_restore -h localhost -U postgres -d sana_red_db -v backup_SanaRed_2026.backup

</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-javascript'
export default {
  name: 'Tema5',
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
