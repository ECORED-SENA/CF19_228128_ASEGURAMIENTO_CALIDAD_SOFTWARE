<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Entorno de pruebas
    
    .row
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/1.png")
      .col-lg-7(data-aos="fade-left" style="place-self:center;")
        p El término automatización, es un concepto que se refiere a la ejecución de tareas repetitivas de manera más ágil y eficientemente, con lo cual es posible ahorrar tiempo y dinero; se busca automatizar las pruebas para identificar los fallos de aplicación y corregir a tiempo alguna irregularidad en los sistemas. Para tomar la decisión de automatizar es necesario conocer tanto el contexto de la empresa como las herramientas y las técnicas apropiadas, para que este proceso arroje los resultados esperados. En este sentido, se revisarán los entornos de pruebas.
        .p-4.mt-4(style="background-color:#DCECFE;border-radius:12px;")
          p.mb-0 Según Choucair (2022), los ambientes de prueba y datos bien administrados son la base para implementar soluciones de negocio; son claves dentro de las operaciones de tecnología e información (TI) y facilitan la entrega de productos al mercado, de manera ágil y con calidad.
        p.mt-4 Estos entornos utilizan dispositivos #[em hardware] y #[em software] para probar los productos en desarrollo, por lo general se cuenta con una réplica exacta de la aplicación que se quiere testear, con la cual es posible generar los resultados deseados y compararlos con los resultados esperados. Así, los entornos de prueba juegan un rol importante en la mitigación de grandes costos en una compañía y se pueden configurar según la prueba seleccionada. 
    
    .cont_1_1.pt-5
      p(data-aos="fade-right") Existen dos formas de clasificar un entorno de prueba que están marcando la pauta a nivel mundial:
      .row.mt-4.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="fade-right")
          .h-100.p-4.p-lg-5.text-white(style="background-color:#273A89;position:relative;")
            .cont_fondo_1
            figure
              img(src="@/assets/curso/tema1/3.svg" style="max-width:100px;")
            h4.mt-4 #[em Test Environment Management] (TEM)
            p.mt-4 En este tipo de clasificación, se propone la creación de una administración de ambientes de prueba en el que se monitorea y proporciona mantenimiento para dar solución a las situaciones que se presenten. Se designa a una persona responsable para realizar esta actividad.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="fade-left")
          .h-100.p-4.p-lg-5.text-white(style="background-color:#273A89;position:relative;")
            .cont_fondo_1
            figure
              img(src="@/assets/curso/tema1/4.svg" style="max-width:100px;")
            h4.mt-4 #[em Test Data Management] (TDM)
            p.mt-4 En este modelo se propone que el ambiente tenga todo lo necesario para realizar las pruebas tales como dispositivos hardware, que garanticen la velocidad, la eficiencia y el despliegue continuo de aplicaciones.
      p.mt-5(data-aos="fade-right") Los métodos de prueba que se utilizan en el ambiente de pruebas, dependerán de los objetivos que se quieren alcanzar. Por ejemplo, el equipo de desarrollo ágil de #[em software] se apoya en varias cajas de arena en el ambiente de prueba, incluyendo la caja de arena para el aseguramiento de la calidad, una para pruebas y otra para demostraciones. 
      p(data-aos="fade-left") Otras propuestas de prueba son las siguientes:
    
    .row.mt-4
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-4.text-center.cont_hover_1(style="background-color:#3EE2A8;border-radius:12px;cursor:pointer;")
          figure
            img(src="@/assets/curso/tema1/5.svg" style="display:inline;max-width:100px;")
          p.mt-2.mb-0 Desarrollo de prototipos.
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-4.text-center.cont_hover_1(style="background-color:#3EE2A8;border-radius:12px;cursor:pointer;")
          figure
            img(src="@/assets/curso/tema1/6.svg" style="display:inline;max-width:100px;")
          p.mt-2.mb-0 Scrum.
      .col-lg.mb-4.mb-md-0.col-md-6(data-aos="zoom-in")
        .h-100.p-4.text-center.cont_hover_1(style="background-color:#3EE2A8;border-radius:12px;cursor:pointer;")
          figure
            img(src="@/assets/curso/tema1/7.svg" style="display:inline;max-width:100px;")
          p.mt-2.mb-0 Modelo en espiral. 
      .col-lg.col-md-6(data-aos="zoom-in")
        .h-100.p-4.text-center.cont_hover_1(style="background-color:#3EE2A8;border-radius:12px;cursor:pointer;")
          figure
            img(src="@/assets/curso/tema1/8.svg" style="display:inline;max-width:100px;")
          p.mt-2.mb-0 Modelo en cascada.
    
    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Además, la relevancia de la implementación de un ambiente retarda según los requerimientos de los clientes, cuando las empresas son grandes y su infraestructura tecnológica es robusta, la exigencia de implementar un buen entorno de prueba es mucho más alta, por lo que las personas involucradas en el proyecto se deben acoplar y sintonizar para el desarrollo armónico de las pruebas, que se pueden configurar mediante una gestión del entorno de prueba (TEM).
        p A continuación, se presentan los diferentes componentes que hacen parte del entorno de pruebas.
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/9.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1 Máquinas virtuales
    
    p(data-aos="fade-right") Una máquina virtual es un sistema operativo virtual con su propia memoria, interfaz de red y almacenamiento; estas máquinas se crean en un sistema de #[em hardware] físico y un hipervisor. 

    .p-4.pb-lg-5(style="background-color:#ADD3FD;border-radius:7px;")
      .col-xl-10.m-auto
        .row
          .col-lg-auto(data-aos="fade-right" style="place-self:center;")
            figure.mb-4.mb-lg-0.col-9.col-md-7.col-lg-12
              img(src="@/assets/curso/tema1/10.svg")
          .col-lg(data-aos="fade-left" style="place-self:center;")
            p Pero, #[span.text-white.ps-1.pe-1(style="background-color:#273A89;") ¿qué se entiende por hipervisor y cómo funciona este sistema?]
            ul.lista-ul.ps-3.ps-md-4
              li.d-flex
                i.far.fa-file-code(style="color:#1682FB;")
                div #[em.fw-bold Host:] las máquinas físicas que se equipan con el hipervisor, se denominan #[em host].
              li.d-flex
                i.far.fa-file-code(style="color:#1682FB;")
                div #[strong Hipervisor:] es el #[em software] utilizado para la separación de los recursos #[em hardware], que posteriormente utilizará la máquina virtual.
              li.d-flex
                i.far.fa-file-code(style="color:#1682FB;")
                div #[em.fw-bold Guest:] se denomina #[em guest] a las diversas máquinas virtuales que utilizan los recursos.
    
    p.mt-4(data-aos="fade-right") Así, los #[em.fw-bold(style="color:#1682FB;") hosts] utilizan los recursos #[em hardware] del computador para redistribuirlos entre los #[em.fw-bold(style="color:#1682FB;") i] existentes o las nuevas máquinas virtuales. 
    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Una de las características de las máquinas virtuales es la ejecución de varios sistemas operativos en un mismo #[em hardware], por ejemplo, alguna distribución de Linux en un portátil con sistema operativo MacOS, de manera que la experiencia final del usuario es como si estuviera trabajando directamente en un computador físico con su propio sistema operativo.
        p La virtualización tiene la propiedad de compartir un sistema completo con varios entornos virtuales, de allí que el hipervisor juegue un papel muy importante, debido a que es el encargado de administrar los entornos físicos de las máquinas virtuales, según la demanda desde este entorno físico, hasta la máquina virtual; tiene la capacidad de agendar las solicitudes de las máquinas virtuales y de acceder a más recursos físicos solicitados y asignarlos según la urgencia.
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/11.png")
    
    p.mt-4(data-aos="fade-left") Estás máquinas pueden estar aisladas del resto del sistema, pero también pueden coexistir en una misma computadora como un servidor, por lo cual se mencionan dos tipos de hipervisores:





              


   
      
</template>

<script>
export default {
  name: 'Tema1',
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
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: rgb(255,255,255)
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(220,236,254,1) 25%, rgba(220,236,254,1) 55%, rgba(220,236,254,1) 75%, rgba(249,250,252,1) 100%)
.cont_fondo_1
  background: url(../assets/curso/tema1/2.png)
  background-size: 100% 100%
  background-position: center
  height: 100%
  position: absolute
  width: 100%
  left: 0
  top: 0
.cont_hover_1:hover
  background-color: #273A89 !important
.cont_hover_1:hover *
  color: #fff !important
</style>
