<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la apropiación técnica y la capacidad de análisis procedimental en lo referente a operaciones DML, funciones de agregación, uniones relacionales (joins) y el desarrollo de lógica programable (PL/pgSQL y triggers) en PostgreSQL.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el beneficio de utilizar una sentencia INSERT INTO masiva en lugar de múltiples inserciones individuales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se reduce el tráfico de red y se procesa en una sola transacción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evita tener que definir los tipos de datos en la tabla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'PostgreSQL desactiva automáticamente las restricciones CHECK.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Modifica físicamente las páginas del sistema de archivos de inmediato.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'La cláusula avanzada RETURNING en una instrucción INSERT se utiliza principalmente para:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obtener de forma inmediata valores generados por el servidor sin hacer un SELECT posterior.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Revertir la transacción si los datos son inválidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Devolver el control de la consola al sistema operativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limpiar los registros muertos generados por el mecanismo MVCC.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué sucede a nivel interno en el motor PostgreSQL cuando se ejecuta una sentencia UPDATE?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se marca la tupla antigua como obsoleta y se escribe una versión nueva del registro.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Se sobrescriben directamente los bytes físicos originales en el disco.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La tabla se bloquea por completo impidiendo cualquier lectura concurrente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El proceso maestro postgres realiza un <i>fork</i> obligatorio del clúster.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Si se requiere vaciar por completo el contenido de una tabla de millones de filas de la manera más rápida posible y sin escanear registro por registro, el comando idóneo es:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'TRUNCATE.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'DELETE.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'DROP.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'REMOVE.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Al intentar evaluar la presencia de valores nulos en una columna de tipo texto, ¿cuál sintaxis es la correcta?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'WHERE columna IS NULL.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'WHERE columna = NULL.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'WHERE columna LIKE NULL.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'WHERE columna <> NULL.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Para paginar los resultados de una consulta web y saltarse las primeras 20 filas del conjunto de datos, se debe emplear:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'OFFSET 20.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'LIMIT 20.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'FETCH 20.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'PAGE 20.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la diferencia fundamental entre las cláusulas WHERE y HAVING en una consulta con agrupamientos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'WHERE filtra filas individuales antes del agrupamiento y HAVING filtra los grupos consolidados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'HAVING solo se puede usar con el tipo de dato avanzado JSONB.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'WHERE opera únicamente del lado del cliente y HAVING del lado del servidor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ambas cláusulas ejecutan exactamente el mismo algoritmo y son intercambiables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de JOIN devuelve únicamente las tuplas donde existe una coincidencia exacta y matemática entre las tablas involucradas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'INNER JOIN',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'LEFT JOIN',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'FULL OUTER JOIN',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'RIGHT JOIN',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'En un LEFT JOIN, si una fila de la tabla izquierda no encuentra coincidencia en la tabla derecha, los campos de la tabla derecha se completan con:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Valores nulos (NULL).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Espacios en blanco.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El valor por defecto de la clave primaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ceros (0).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la característica principal de una subconsulta correlacionada?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Hace referencia a una columna de la tabla externa, ejecutándose una vez por cada fila analizada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Se ejecuta una sola vez al inicio de la instrucción principal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se guarda físicamente en el disco como una vista materializada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'No permite el uso de operadores lógicos como <b>AND</b> o <b>OR</b>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'CASO: Un desarrollador júnior de la empresa Logística Express requería actualizar el estado de un envío específico. Para ello ejecutó la siguiente instrucción: UPDATE envios SET estado = &apos;Entregado&apos;; olvidando incluir la cláusula WHERE. Al percatarse de que alteró los miles de registros de la empresa, intentó aplicar un ROLLBACK, pero el motor PostgreSQL rechazó la reversión porque la consola operaba en modo autocommit. ¿Cuál es el diagnóstico de la falla y qué buena práctica debió aplicar?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Debió empaquetar la instrucción DML dentro de una transacción explícita (BEGIN ... COMMIT) y validar los cambios mediante un conteo antes de asentarlos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El motor colapsó porque el comando UPDATE requiere obligatoriamente un índice Hash para no alterar toda la tabla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La sentencia debió ejecutarse mediante un comando TRUNCATE para que el sistema operativo solicitara una confirmación de red.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El error fue del proceso autovacuum, que bloqueó el acceso físico al disco antes de procesar el filtro de seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué diferencia técnica clave existe entre una función almacenada y un procedimiento almacenado en PostgreSQL?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los procedimientos pueden gestionar control transaccional (COMMIT/ROLLBACK) interno y las funciones no.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Las funciones no admiten parámetros y los procedimientos sí.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las funciones son siempre IMMUTABLE y los procedimientos son VOLATILE.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las funciones se invocan con CALL y los procedimientos se integran dentro de un SELECT.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Dentro de un bloque de excepciones en PL/pgSQL, la variable especial SQLERRM almacena:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El mensaje descriptivo del sistema sobre la excepción suscitada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El código numérico interno del error.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El nombre de la tabla que causó el fallo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La versión física del servidor de la base de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Un disparador (<i>Trigger</i>) configurado con la temporización BEFORE permite:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Modificar los valores de la tupla entrante antes de que se validen las restricciones de integridad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Replicar datos de forma segura una vez asentada la transacción en el disco.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Crear automáticamente un índice B-Tree sobre la tabla operativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ejecutar la instrucción REFRESH MATERIALIZED VIEW de forma síncrona.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'En un disparador de fila (FOR EACH ROW) orientado a un evento UPDATE, la variable lógica OLD contiene:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La versión previa de la tupla con los datos originales antes del cambio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los datos modificados que se intentan insertar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La estructura inicial de la tabla antes de ser compilada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una copia exacta del log de transacciones (WAL).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
