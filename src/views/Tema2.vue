<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Ejecución de #[em scripts] de pruebas
    
    .p-4.cont_2_1(style="background-color:#273A89;border-radius:8px;position:relative;")
      .d-none.d-lg-block(style="position:absolute;width:100%;bottom:-2px;left:0;height:100%;")
        figure
          img(src="@/assets/curso/tema2/1.png")
      .row
        .col-md-auto.col-7(data-aos="fade-right" style="place-self:center;")
          figure.mb-4.mb-md-0
            img(src="@/assets/curso/tema2/2.svg")
        .text-white.col-md(data-aos="fade-left" style="place-self:center;")
          p Un #[em script] de prueba es un conjunto de instrucciones en un sistema para realizar determinadas pruebas utilizando unos parámetros para analizar resultados y que estos sean los esperados.
          p.mb-0 Con el fin de mostrar la manera en la que se realiza esta ejecución de #[em scripts] de prueba, se realizará el siguiente ejercicio, en el cual partimos de las características que se presentan en tres computadores, con el fin de revisar la forma de realizar la ejecución de #[em scripts] de pruebas.
    
    p.mt-4(data-aos="fade-right") Para cada uno de los tres (3) equipos se observó el Sistema Operativo SO, la memoria RAM, la alta definición HD y la unidad central de procesamiento CPU.

    .col-xl-10.m-auto.mt-5
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
            h5 Tabla 1.
            span Identificación de los equipos
          .tabla-a.color-primario(data-aos="zoom-in-up")
            table
              thead
                tr(style="background-color:#273A89;")
                  th.text-white.text-center(style="border:0;border-right:1px white solid;") Equipo
                  th.text-white.text-center(style="border:0;border-right:1px white solid;") SO
                  th.text-white.text-center(style="border:0;border-right:1px white solid;") RAM
                  th.text-white.text-center(style="border:0;border-right:1px white solid;") HD
                  th.text-white.text-center(style="border:0") CPU
              tbody
                tr(style="background-color:#DCECFE;")
                  td.p-3.text-center(style="border:1px white solid;") Equipo 1
                  td.p-3.text-center(style="border:1px white solid;") Windows 8.1
                  td.p-3.text-center(style="border:1px white solid;") 4 GB
                  td.p-3.text-center(style="border:1px white solid;") 500 GB Mecánico
                  td.p-3.text-center(style="border:1px white solid;") Core I5 2.6 GHz
                tr(style="background-color:#DCECFE;")
                  td.p-3.text-center(style="border:1px white solid;") Equipo 2
                  td.p-3.text-center(style="border:1px white solid;") Windows 10
                  td.p-3.text-center(style="border:1px white solid;") 8 GB
                  td.p-3.text-center(style="border:1px white solid;") 480 GB SSD
                  td.p-3.text-center(style="border:1px white solid;") Core I5 2.6 GHz
                tr(style="background-color:#DCECFE;")
                  td.p-3.text-center(style="border:1px white solid;") Equipo 3
                  td.p-3.text-center(style="border:1px white solid;") Windows 11
                  td.p-3.text-center(style="border:1px white solid;") 12 GB
                  td.p-3.text-center(style="border:1px white solid;") 1 Tera
                  td.p-3.text-center(style="border:1px white solid;") Core I7 3.0 GHz
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-7.col-md-6.col-lg-12
            img(src="@/assets/curso/tema2/3.svg")
    
    p.mt-4(data-aos="fade-right") Para comenzar, se elaboran las pruebas de carga, en las que se hace la primera evaluación sobre los servicios con un #[em host], desplegando los servicios de ESB y un elemento de carga (otros #[em hosts]) con los parámetros de carga para tal fin. 

    .cont_2_2.mt-4
      .p-4(style="background-color:#ADD3FD;border-radius:7px;")
        .col-xl-11.m-auto
          .row
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src="@/assets/curso/tema2/4.svg")
            .col-lg-8(data-aos="fade-left" style="place-self:center;")
              p Antes de presentar los valores de carga se describen los parámetros de configuración de los algoritmos de carga, así:
              ul.lista-ul.ps-3.ps-md-4
                li.d-flex
                  i.far.fa-file-code(style="color:#1682FB;")
                  div #[strong Hilos:] cada hilo que se configura es un proceso de ejecución que hace parte del proceso de negocio.
                li.d-flex
                  i.far.fa-file-code(style="color:#1682FB;")
                  div #[strong Periodo entre hilos:] define cada cuántos segundos disparará cada uno de los hilos, es decir, la concurrencia.
                li.d-flex
                  i.far.fa-file-code(style="color:#1682FB;")
                  div #[strong Número de veces de ejecución:] determina las veces que se ejecutarán determinados números de hilos o la recurrencia.
    
    p.mt-4(data-aos="fade-right") En la siguiente tabla, observamos los parámetros de carga y la configuración de clúster y de carga para la prueba: se presenta el ID de prueba para cada equipo y se relaciona con el #[em host] de carga, el número de hilos por grupo, el periodo entre grupos de hilos por segundo y el número de ejecuciones.

    .col-xl-8.m-auto.mt-4
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Tabla 2.
        span Parámetros de carga, configuración de clúster y de carga para la prueba
      .tabla-a.color-primario(data-aos="zoom-in-up")
        table
          thead
            tr(style="background-color:#273A89;")
              th.text-white.text-center(style="border:0;border-right:1px white solid;")
              th.text-white.text-center(style="border:0;border-right:1px white solid;") Equipo
              th.text-white.text-center(style="border:0;border-right:1px white solid;") #[em Host] de #[br] carga
              th.text-white.text-center(style="border:0;border-right:1px white solid;") Número de hilos #[br] por grupo
              th.text-white.text-center(style="border:0;border-right:1px white solid;") Periodo entre #[br] grupo de hilos (seg)
              th.text-white.text-center(style="border:0") Número de #[br] ejecuciones
          tbody
            tr(style="background-color:#DCECFE;")
              td.p-3.text-center(style="border:1px white solid;") 
                p P1.1
                p P1.2
                p P1.3
              td.p-3.text-center(style="border:1px white solid;") 
                p Equipo 1
              td.p-3.text-center(style="border:1px white solid;") 
                p 1
                p 1
                p 1
              td.p-3.text-center(style="border:1px white solid;") 
                p 120
                p 180
                p 240
              td.p-3.text-center(style="border:1px white solid;") 
                p 30
                p 20
                p 10
              td.p-3.text-center(style="border:1px white solid;") 
                p 3
                p 6
                p 9
            tr(style="background-color:#DCECFE;")
              td.p-3.text-center(style="border:1px white solid;") 
                p P2.1
                p P2.2
                p P2.3
              td.p-3.text-center(style="border:1px white solid;") 
                p Equipo 2
              td.p-3.text-center(style="border:1px white solid;") 
                p 2
                p 2
                p 2
              td.p-3.text-center(style="border:1px white solid;") 
                p 240
                p 380
                p 500
              td.p-3.text-center(style="border:1px white solid;") 
                p 20
                p 10
                p 5
              td.p-3.text-center(style="border:1px white solid;") 
                p 3
                p 6
                p 9
            tr(style="background-color:#DCECFE;")
              td.p-3.text-center(style="border:1px white solid;") 
                p P3.1
                p P3.2
                p P3.3
              td.p-3.text-center(style="border:1px white solid;") 
                p Equipo 3
              td.p-3.text-center(style="border:1px white solid;") 
                p 3
                p 3
                p 3
              td.p-3.text-center(style="border:1px white solid;") 
                p 600
                p 900
                p 1000
              td.p-3.text-center(style="border:1px white solid;") 
                p 20
                p 10
                p 5
              td.p-3.text-center(style="border:1px white solid;") 
                p 3
                p 6
                p 9
    
    p.mt-4(data-aos="fade-right") Como hemos ya indicado, con estas pruebas evaluamos las pruebas de carga. Pero también es importante establecer una comparación entre ambientes de Arquitectura Orientada a Servicios, SOA y no SOA.
    p(data-aos="fade-left") Veamos, entonces, los resultados de las pruebas de carga para cada equipo. Analicemos los datos de latencia, #[em throughout], los porcentajes en el disco duro y en memoria RAM. 

    .col-xl-8.m-auto.mt-4
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Tabla 3.
        span Resultados de la prueba de carga para cada equipo
      .tabla-a.color-primario(data-aos="zoom-in-up")
        table
          thead
            tr(style="background-color:#273A89;")
              th.text-white.text-center(style="border:0;border-right:1px white solid;") Equipo
              th.text-white.text-center(style="border:0;border-right:1px white solid;") Id de #[br] prueba
              th.text-white.text-center(style="border:0;border-right:1px white solid;") Latencia #[br] (ms)
              th.text-white.text-center(style="border:0;border-right:1px white solid;") #[em Throughout] #[br] (tps)
              th.text-white.text-center(style="border:0;border-right:1px white solid;" colspan="2") Disco #[br] duro %
              th.text-white.text-center(style="border:0" colspan="3") Memoria #[br] ram (%)
          tbody
            tr(style="background-color:#DCECFE;")
              td.p-3.text-center(style="border:1px white solid;") Equipo 1
              td.p-3.text-center(style="border:1px white solid;") 
                p P1.1
                p P1.2
                p P1.3
              td.p-3.text-center(style="border:1px white solid;") 
                p 1933
                p 2223
                p 2536
              td.p-3.text-center(style="border:1px white solid;") 
                p 273
                p 452
                p 467
              td.p-3.text-center(style="border:1px white solid;" colspan="2") 
                p 36.3
                p 36.7
                p 39.9
              td.p-3.text-center(style="border:1px white solid;" colspan="3") 
                p 86.6 %
                p 88.3 %
                p 91.1 %
            tr(style="background-color:#DCECFE;")
              td.p-3.text-center(style="border:1px white solid;") Equipo 2
              td.p-3.text-center(style="border:1px white solid;") 
                p P2.1
                p P2.2
                p P2.3
              td.p-3.text-center(style="border:1px white solid;") 
                p 1702
                p 1493
                p 1587
              td.p-3.text-center(style="border:1px white solid;") 
                p 587
                p 522
                p 656
              td.p-3.text-center(style="border:1px white solid;") 
               p 46.8 %
               p 52.2 %
               p 46.2 %
              td.p-3.text-center(style="border:1px white solid;") 
                p 38.3 %
                p 38.7 %
                p 39.9 %
              td.p-3.text-center(style="border:1px white solid;" colspan="1") 
                p 91.2 %
                p 92.8 %
                p 84.2 %
              td.p-3.text-center(style="border:1px white solid;" colspan="2") 
                p 82.2 %
                p 74.6 %
                p 65.9 %
            tr(style="background-color:#DCECFE;")
              td.p-3.text-center(style="border:1px white solid;") Equipo 3
              td.p-3.text-center(style="border:1px white solid;") 
                p P3.1
                p P3.2
                p P3.3
              td.p-3.text-center(style="border:1px white solid;") 
                p 1202
                p 1194
                p 1025
              td.p-3.text-center(style="border:1px white solid;") 
                p 684
                p 721
                p 735
              td.p-3.text-center(style="border:1px white solid;") 
                p 66.2 %
                p 62.1 %
                p 62.1 %
              td.p-3.text-center(style="border:1px white solid;") 
                p 45.6 %
                p 58.2 %
                p 56.2 %
              td.p-3.text-center(style="border:1px white solid;") 
                p 92.2 %
                p 96.5 %
                p 93.3 %
              td.p-3.text-center(style="border:1px white solid;") 
                p 72.7 %
                p 81.3 %
                p 63.8 %
              td.p-3.text-center(style="border:1px white solid;") 
                p 82.5 %
                p 61.2 %
                p 62.1 %
    
    p.mt-4(data-aos="fade-right") Ahora, se procede a realizar las pruebas de estrés, para lo cual se emplean los siguientes ítems sobre la arquitectura, con el fin de determinar los límites del sistema, manteniendo constante el periodo entre hilos con un valor de 5 segundos.

    .col-xl-7.m-auto.mt-5
      .p-4(style="background-color:#E1F6EF;border-radius:7px;")
        .row
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src="@/assets/curso/tema2/5.svg")
          .col-lg-7(data-aos="fade-left" style="place-self:center;")
            p.mb-0 Número de hilos por grupo: 120, 180, 240...
            p.mb-0 Número de ejecuciones: 3, 6, 9, 12...
    
    p.mt-4(data-aos="fade-right") En estos resultados, observamos la prueba P.5.n, del equipo 1, en donde más del 20 % de la ejecución del proceso produce error de denegación de servicio. De esta misma forma se procederá con las pruebas cuando en el equipo existan 2 nodos, para lo cual el ID de la prueba será P.6.x y pruebas P.7x para 3 nodos. 

    .col-xl-8.m-auto.mt-4
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Tabla 4.
        span Resultados de determinadas pruebas
      .tabla-a.color-primario(data-aos="zoom-in-up")
        table
          thead
            tr(style="background-color:#273A89;")
              th.text-white.text-center(style="border:0;border-right:1px white solid;") Id de #[br] prueba
              th.text-white.text-center(style="border:0;border-right:1px white solid;") Equipo
              th.text-white.text-center(style="border:0;border-right:1px white solid;") #[em Host] de #[br] carga
              th.text-white.text-center(style="border:0;border-right:1px white solid;") Número de hilos #[br] por grupo
              th.text-white.text-center(style="border:0;border-right:1px white solid;") Periodo entre #[br] grupo de hilos (seg)
              th.text-white.text-center(style="border:0") Número de #[br] ejecuciones
          tbody
            tr(style="background-color:#DCECFE;")
              td.p-3.text-center(style="border:1px white solid;") 
                p P5.1
                p P5.2
                p P5.3
              td.p-3.text-center(style="border:1px white solid;") 1
              td.p-3.text-center(style="border:1px white solid;") 
                p 1
                p 1
                p 1
              td.p-3.text-center(style="border:1px white solid;") 
                p 120
                p 180
                p 240
              td.p-3.text-center(style="border:1px white solid;") 
                p 5
                p 5
                p 5
              td.p-3.text-center(style="border:1px white solid;") 
                p 3 
                p 6
                p 9

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/6.png")
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        p El trabajo de diseñar y ejecutar pruebas de flexibilidad, es una labor ardua que requiere de personal experto para determinar en el servidor de aplicaciones, diversas configuraciones de los nodos de los equipos (número de sesiones concurrentes, número de conexiones del pool de conexiones, memoria de los objetos en el servidor, entre otros), para determinar las causas de la denegación de servicio. También se requiere la colaboración de administradores de bases de datos para sistemas de almacenamiento.
        .tarjeta.color-primario.p-3.mt-4(style="background-color:#273A89;")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/7.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Resultados de pruebas de estrés para equipo con un nodo
                  p.text-small Con el fin de familiarizarse con la forma en la que se obtienen los resultados de las pruebas, se le invita a revisar y a analizar el siguiente documento.  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Resultados_de_pruebas_de_estres_para_equipo_con_un_nodo.pdf')" target="_blank")
                    span(style="color:initial;") Descargar
                    i.fas.fa-file-download(style="color:initial;")
   



              


   
      
</template>

<script>
export default {
  name: 'Tema2',
  components: {},
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
<style lang="sass">
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_2, .cont_2_2 *
  position: relative
.cont_2_2:before
  content: ''
  position: absolute
  height: 50%
  width: 125%
  left: 15%
  top: 25%
  background: rgb(220,236,254)
  background: linear-gradient(180deg, rgba(220,236,254,1) 0%, rgba(255,255,255,0) 100%)
</style>
