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

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/12.svg")
      .col-lg-8(data-aos="fade-right")
        AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Tipo 1")
            p Interactúa directamente en equipos que no tienen ningún tipo de sistema operativo y gestiona el computador con el #[em hardware] como las KVM (#[em Kernel Virtual Machine]) que trabajan directamente con el kernel de Linux.
          .row(titulo="Tipo 2")
            p El hipervisor se encuentra alojado en una máquina de host y de ahí mismo se programan sus recursos; luego, se ejecutan en el sistema de #[em hardware]. Dos ejemplos de hipervisores de este tipo son: VMware Workstation y Oracle VirtualBox.
    
    p.mt-4(data-aos="fade-right") De acuerdo con lo que se ha expuesto, es posible preguntar: #[span.text-white.ps-1.pe-1(style="background-color:#273A89;") ¿por qué utilizar las máquinas virtuales?]
    p(data-aos="fade-left") Actualmente, estas máquinas son muy populares en las empresas, porque influyen sustancialmente en el factor económico; en este sentido, evitan invertir en más costos para compra de #[em hardware], teniendo en cuenta que es posible aprovechar las bondades de las MV y utilizar una misma máquina, en la que se incorporen varios servidores, utilizando los recursos #[em hardware] para optimizar el rendimiento. Asimismo, su implementación permite la conmutación de la información en catástrofes, sin incurrir en gastos adicionales.
    p(data-aos="fadde-right") Se debe tener en cuenta lo siguiente:
    .row.mt-4
      .col-lg-10(data-aos="fade-right")
        .p-4(style="background-color:#DCECFE;border-radius:12px;")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/13.svg")
            .col(style="place-self:center;")
              p.mb-0 Las máquinas virtuales generan un entorno aislado de manera que lo que ocurre en este entorno no infiere con el resto de la máquina o #[em host]. En los entornos de desarrollo son muy utilizadas para probar aplicaciones nuevas sin que estas afecten el correcto funcionamiento de otras MV y en sí del #[em hardware] donde se encuentran alojadas.
        p.mt-4 Es muy importante que se considere el #[strong(style="color:#1682FB;") dimensionamiento] cuando se operan las máquinas virtuales, debido a que este es clave para definir el tamaño de nuestra virtualización y el alcance que se le va a dar para que el proyecto tenga la mejor respuesta a los usuarios. Por ello, se debe tener presente que si se realiza un cálculo de dimensionamiento sin datos, los resultados pueden ser inexactos; en este sentido se aconseja hacer este proceso con una carga de datos máxima, con una periodicidad de una hora y, lo más importante, generar una caracterización o perfil de una transacción. Por este motivo, se insiste en determinar el volumen máximo de transacciones por hora o, en el caso de existir varios momentos, se necesitará detallarlos y especificarlos para obtener un dimensionamiento adecuado.
      .col-lg-2.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/14.svg")
    
    p.mt-4(data-aos="fade-right") De acuerdo con lo que se ha tratado, es necesario tener presente que cuando se establece la carga que se realiza a una infraestructura, es importante entender algunos factores que intervienen en ello:

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/15.svg")
      .col-lg-8(data-aos="fade-right")
        AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Transacciones")
            p Por lo general, tienen muchas variaciones durante el día o las semanas. Para realizar un informe exacto, se requiere identificar el tipo de transacción que se está realizando.
          .row(titulo="Número de usuarios simultáneos")
            p Es importante tener en cuenta esta variante, porque gracias a estos datos podemos tener una visión amplia del dimensionamiento. Por ello, la concurrencia máxima que se puede medir será un factor determinante en el resultado del dimensionamiento.
            p Para que se categorice como usuarios simultáneos, se deben cumplir las siguientes características que los identifiquen:
            ul.lista-ul.ps-3.ps-md-4
              li.d-flex
                i.far.fa-file-code(style="color:#1682FB;")
                div Iniciar una sesión.
              li.d-flex
                i.far.fa-file-code(style="color:#1682FB;")
                div Realizar algún tipo de transacción en el momento de las pruebas para definir dimensionamiento.
              li.d-flex
                i.far.fa-file-code(style="color:#1682FB;")
                div No estar con sesiones inactivas.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 Contenedores
    
    p(data-aos="fade-right") El tema de contenedores se relaciona directamente con el de la virtualización de un sistema operativo; así es que en un solo contendedor se puede ejecutar cualquier aplicación, microservicio, aplicativo o algo más robusto.
    .row.mt-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        p Un contenedor contiene los ejecutables, el código binario, bibliotecas y los archivos de configuración, de manera que hay una seria comparación con el propósito de las máquinas virtuales; los contenedores no trabajan con el sistema operativo o por lo menos principalmente, esta característica los hace más rápidos y preferidos, con una utilización del sistema mucho menor. Cuando se ponen a prueba aplicaciones robustas se pueden ejecutar varios contenedores como si fuese un clúster de contenedores, los equipos se pueden administrar mediante un orquestador de contenedores como #[em kubernetes].
      .col-lg-6(data-aos="fade-left")
        figure.m-auto.col-12.col-md-8.col-lg-12
          img(src="@/assets/curso/tema1/16.png")
    
    p.mt-4(data-aos="fade-left") Las ventajas que presentan los contenedores frente a las máquinas virtuales, son las siguientes:

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/17.png")
      .col-lg-8(data-aos="fade-right")
        AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Menos sobrecarga")
            p Los contenedores no requieren tanto recurso de la máquina como las virtuales, debido a que no trabajan con imágenes del sistema operativo.
          .row(titulo="Mayor portabilidad")
            p Todo lo que se ejecuta dentro de un contenedor se puede ejecutar en entornos #[em hardware] y #[em software] diferentes.
          .row(titulo="Funcionamiento constante")
            p Los equipos de desarrollo saben que cuando las aplicaciones se ejecutan en contenedores, presentan el mismo beneficio que en el entorno y lugar en el que se ejecutan, sin ninguna dificultad.
          .row(titulo="Comodidad en el desarrollo")
            p Los esfuerzos realizados por el equipo de desarrollo son recompensados, porque pueden acelerar los ciclos de desarrollo de prueba y ejecución.
    
    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Los contenedores hoy en día son muy conocidos gracias a la aparición de una herramienta de fácil manejo y muy versátil para los desarrolladores alrededor del mundo llamada #[em.fw-bold(style="color:#1682FB;") Docker], que ha logrado integrar muchos desarrolladores geográficamente distantes y trabajar juntos en un mismo proyecto, utilizando las bondades de los contenedores, para realizar la creación, prueba y puesta en marcha optimizadas, a partir de las mismas imágenes de contenedores.
        p Entonces, #[span.text-white.ps-1.pe-1(style="background-color:#273A89;") ¿qué es un docker?]
        .d-flex.pt-2.mt-4.cont_1_2.pb-2.pe-2(style="border-top:1px #3EE2A8 solid;")
          i.fas.fa-quote-left.pe-2(style="color:#3EE2A8;font-size:25px;")
          div.mt-2
            p.mb-0 Según NetApp (2019), #[em Docker] es un popular entorno en tiempo de ejecución que se usa para crear y construir #[em software] dentro de contenedores. Usa imágenes de #[em Docker] (instantáneas de copia en escritura) para poner en marcha aplicaciones o #[em software] en contenedores en varios entornos, desde el desarrollo hasta las pruebas y la producción. Se basa en estándares abiertos y funciona en la mayoría de los entornos operativos más comunes, incluidos Linux, Microsoft Windows y otras.
            .text-end(style="margin-top:-22px;")
              i.fas.fa-quote-right(style="color:#3EE2A8;font-size:25px;")
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/18.svg")
    
    .cont_1_3.mt-4
      p(data-aos="fade-right") Dentro de los entornos de desarrollo, en el mundo de los contenedores, es común encontrar aplicaciones robustas que quizás tengan cientos o miles de contenedores; para que la aplicación pueda cumplir con su objetivo es necesario emplear los famosos orquestadores llamados #[em.fw-bold(style="color:#1682FB;") kubernetes], que es una herramienta diseñada para la ejecución en cadena de varios contenedores de algún #[em software], incluido el #[em.fw-bold(style="color:#1682FB;") Docker].
      .p-3.mt-4(style="background-color:#ADD3FD;border-radius:4px;" data-aos="fade-up")
        p.mb-0 Después de conocer en qué consiste cada uno de estos componentes, se deben revisar las diferencias más significativas entre las máquinas virtuales y los contenedores:
      
      .col-xl-7.m-auto.mt-5
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Figura 1.
          span Comparación entre las máquinas virtuales y los contenedores
        figure.mt-4(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/19.svg" alt="Se presenta una comparación entre una máquina virtual y un contenedor, donde se observa que el contenedor:Tiene ejecutables, código binario, bibliotecas y archivos de configuración. No trabaja con el sistema operativo. Son más rápidos y tienen menor uso del sistema, por lo que son de mayor preferencia. Es posible integrarlos mediante un Docker. Requiere de un orquestador de contenedores como kubernetes.Mientras que una máquina virtual: Tiene su propia memoria, interfaz de red y almacenamiento. Se crean en un sistema de hardware físico y un hipervisor. Ejecución de varios sistemas operativos en un mismo hardware.")

      Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_1_3 1.3  Dimensionamiento de pruebas de escalabilidad
      
      p(data-aos="fade-right") Para probar la escalabilidad, se deben considerar las métricas más importantes tales como el tiempo de respuesta, latencia, rendimiento y utilización de recursos, de manera que se pueda estimar la capacidad de ampliación de la arquitectura, sin perder la calidad de la prestación de los servicios.
      p(data-aos="fade-left") Las métricas de evaluación de escalabilidad seleccionadas son:
      .col-xl-9.m-auto.mt-4
        .tarjeta.tarjeta--azul.p-4.p-lg-5.pt-lg-5.cont_slyder_1_1.mt-4(style="border-radius:0px;")
          SlyderA(tipo="b")
            .row.col-xl-11.m-auto
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4(style="color:#FFCE00;") Tiempo de respuesta
                .text-white
                  p El tiempo transcurrido entre el inicio de una solicitud o comando a un sistema informático y el principio de la respuesta del sistema.
              .col-lg-5(style="place-self:center;")
                figure.m-auto.col-7.col-md-5.col-lg-12
                  img(src='@/assets/curso/tema1/21.svg' alt="")
            .row.col-xl-11.m-auto
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4(style="color:#FFCE00;") Latencia
                .text-white
                  p El tiempo entre la emisión de una solicitud y el comienzo de obras reales de esa petición (la transferencia de datos se comienza).
              .col-lg-5(style="place-self:center;")
                figure.m-auto.col-7.col-md-5.col-lg-12
                  img(src='@/assets/curso/tema1/22.svg' alt="")
            .row.col-xl-11.m-auto
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4(style="color:#FFCE00;font-style:italic;") Throughout
                .text-white
                  p Número de unidades de trabajo que se puede manejar por unidad de tiempo (rendimiento), por ejemplo, las solicitudes por segundo, las solicitudes por día, visitas por segundo informe, por año, etc.
              .col-lg-5(style="place-self:center;")
                figure.m-auto.col-7.col-md-5.col-lg-12
                  img(src='@/assets/curso/tema1/23.svg' alt="")
            .row.col-xl-11.m-auto
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4(style="color:#FFCE00;") Utilización de  recursos
                .text-white
                  p Métrica de un consumo del recurso tecnológico (los recursos principales son el procesador, memoria, disco E/S, y la red I/O).
              .col-lg-5(style="place-self:center;")
                figure.m-auto.col-7.col-md-5.col-lg-12
                  img(src='@/assets/curso/tema1/24.svg' alt="")
    
    p.mt-5(data-aos="fade-right") Una vez se definen las métricas para la estimación de la escalabilidad de una arquitectura, se determinan los tipos de pruebas a establecer, según las recomendaciones Microsoft y Oracle, pero omitiendo las pruebas de funcionalidad conforme con el interés especial del modelado, el diseño de procesos de negocio y la simplicidad de estos procesos diseñados:
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/25.png")
      .col-lg-8(data-aos="fade-right")
        AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Pruebas de carga")
            p Se centran en determinar o validar las características de rendimiento del sistema o la aplicación sometida a una prueba, cuando se enfrenta a diferentes volúmenes de cargas de trabajo, prevista durante las operaciones de producción.
          .row(titulo="Pruebas de <em>stress</em>")
            p Estas pruebas se realizan para evaluar un sistema o componente en y más allá de los límites de sus requisitos especificados. Por lo general, miden los límites de un sistema en máximo número de usuarios simultáneos, máximo volumen de datos o #[em script] procesados.
    
    p.mt-4(data-aos="fade-left") De esta forma, quedan determinadas las métricas y las pruebas de evaluación de escalabilidad en la arquitectura solución.

    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema1/26.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4(style="padding-top:7px;") Metodología para una evaluación de escalabilidad
    
    p(data-aos="fade-left") Según Pinchao (2011), la metodología descrita tanto por Oracle (2010) como por Microsoft (2007) es muy similar en sus procedimientos; sin embargo, por limitantes de recursos tecnológicos y tiempo de la metodología a emplear, no se hace una comparación entre cada una de las iteraciones de las pruebas (como proponen Oracle y Microsoft), dejando el análisis para el conjunto completo de las pruebas. 
    p(data-aos="fade-right") Las fases que componen esta metodología son las que se presentan a continuación:
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-6.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/27.svg")
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Definir la carga de trabajo esperada") Se debe estimar el nivel de carga a aplicar, para tomarla como base de referencia (números de conexiones, solicitudes, etc.).
          p.text-small(numero="2" titulo="Definir los objetivos de rendimiento") Como se perciben desde el punto de vista del usuario, se puede especificar en términos de acuerdos de nivel de servicio.
          p.text-small(numero="3" titulo="Seleccionar los subsistemas para estudiar") Los procesos de negocio pueden tomar varios caminos en la ejecución, es por esto que se debe estimar el flujo de los procesos de negocio a emplear, durante la evaluación.
          p.text-small(numero="4" titulo="Realizar una prueba para crear un punto de referencia inicial (<em>Benchmark</em>)") Tomado de la evaluación de la carga esperada en el sistema, si se compara frente a otro sistema, se toman los valores de la evaluación de este último bajo las mismas características de evaluación que se le aplicarán al sistema a evaluar.
          p.text-small(numero="5" titulo="Seleccione los parámetros para modificar") Concurrencia y recurrencia de la carga.
          p.text-small(numero="6" titulo="Realizar prueba") Realizar la prueba, luego repetir los pasos 5 y 6, y luego analizar los resultados.
    
    p.mt-4(data-aos="fade-right") Se pueden aplicar diferentes tipos de pruebas como las de escalabilidad y las de carga:

    .col-xl-10.m-auto.mt-4
      .cont_1_4.p-4.p-lg-0
          div.d-none.d-lg-block(style="width:100%;top:0;position:absolute;left:0;height:100%;")
            figure
              img(src="@/assets/curso/tema1/28.png")
          .row.m-0.p-0
            .col-lg-auto.col-md-5.col-7.m-auto(style="place-self:center;" data-aos="fade-right")
              figure.mb-2.mb-lg-0
                img(src="@/assets/curso/tema1/29.png")
            .col-lg.col-md-12.col-12.p-0.pe-lg-5.p-md-4(style="place-self:center;" data-aos="fade-left")
              ul.lista-ul.mb-0
                li.d-flex
                  i.far.fa-file-code(style="color:#1682FB;")
                  div #[strong(style="color:#273A89;") Las pruebas de escalabilidad] analizan la forma en la que responde la aplicación ante la concurrencia simultánea de clientes; se busca que las aplicaciones se ajusten a los requerimientos de los usuarios simultáneos y que utilicen los recursos de manera lógica para que la experiencia del usuario sea la mejor frente a la usabilidad del sistema. Así, estas pruebas se pueden implementar en #[em hardware], recursos de red y bases de datos, para analizar su comportamiento en un número de solicitudes simultáneas.
                li.d-flex.mb-0
                  i.far.fa-file-code(style="color:#1682FB;")
                  div #[strong(style="color:#273A89;") En las pruebas de carga] se somete al sistema a diferentes tipos de carga; cuando se realizan las pruebas de carga al sistema, se evalúa la escalabilidad del mismo a varios niveles de carga que se le proporcionan, esta última prueba es importante porque es común utilizarla en los ya conocidos entornos en contenedores.
    
    p.mt-4(data-aos="fade-right") El dimensionamiento de las pruebas de escalabilidad se puede llevar a cabo a nivel de #[em hardware], #[em software] o base de datos; los datos o parámetros que se utilizan para la medición difieren de una solicitud a otra, por ejemplo, para una página #[em web], podría ser la cantidad de usuarios, CPU o la red; en cambio a un servidor #[em web] se le mediría el número de solicitudes procesadas.
    p(data-aos="fade-left") Los atributos que se manejan en una prueba de escalabilidad para determinar su dimensionamiento, son los siguientes:

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Tiempo de respuesta")
            p Es el tiempo que se toma la aplicación en responder un requerimiento del usuario, también se identifica la respuesta del servidor bajo una carga mínima, en la carga umbral y en la carga máxima, para saber el punto en el que la aplicación se revienta. Estos tiempos de respuestas pueden variar según la carga de usuarios, lo normal es que se reduzcan a medida que la carga es mayor. 
            p Cuando la aplicación realiza el mismo tiempo de respuesta en diferentes cargas de usuarios, se determina que es escalable.
            p También es importante en los entornos agrupados, que las pruebas puedan medir hasta qué punto un servidor está ocupado y envía carga a otro mediante el equilibrador de carga, para que este trabaje de manera óptima sin sobrecargar a uno de los servidores.
          .row(titulo="Rendimiento")
            p Hace referencia a una serie de órdenes medidas en determinado tiempo, es decir, el rendimiento se mide en función del tiempo con el número de solicitudes enviadas por el usuario.
            p Se considera su escalabilidad si la aplicación tiene el mismo rendimiento a pesar de los diferentes niveles de carga que se le proporciona, con lo cual se verifica su funcionalidad relacionada con las aplicaciones internas, #[em hardware] y bases de datos.
          .row(titulo="Uso de CPU")
            p La prueba de uso de la CPU mide un evento por aplicación y su unidad de medida es el Mega Hertz (MHz).  Normalmente, se considera que cuanto más optimizado sea el código de la aplicación, mejor será el uso de la CPU. Para llegar a este nivel, los equipos de desarrollo se valen de las mejores prácticas en programación de aplicaciones.
          .row(titulo="Uso de memoria")
            p Esta prueba mide el uso de una aplicación a la memoria RAM, se determina la cantidad de recurso que esta ocupa, porque de eso depende que el sistema no incurra en desbordamientos de memoria generando perdida de información y otros problemas referentes al funcionamiento del sistema operativo. Como en el caso anterior, todas las pruebas de hardware y su respectivo uso considerable de recurso, se minimiza desarrollando las aplicaciones con las mejores prácticas en programación.
          .row(titulo="Uso de la red")
            p Cuando hablamos de las pruebas de la red, consideramos la cantidad de consumo que realiza una aplicación, la cual es medida en #[em bytes] por segundo, tramas por segundo, segmentos recibido y enviados por segundos.
            p Se establece que una aplicación es escalable si puede utilizar el mínimo de una red y ofrecer un alto rendimiento.
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/35.png")
    
    p.mt-4(data-aos="fade-right") Al realizar esta prueba, se comprenderá el comportamiento del cliente cuando se le asigna la carga máxima y qué formas existen para resolverlo, también permite conocer el desgaste del servidor y los tiempos de respuesta frente a la cantidad de usuarios de la aplicación. 
    p(data-aos="fade-left") Ahora, es necesario identificar algunos aspectos importantes que se deben tener en cuenta para la creación de escenarios, para probar la escalabilidad de una aplicación:

    .tarjeta.tarjeta--azul.p-4.p-lg-5.pt-lg-5.cont_slyder_1_1.mt-4(style="border-radius:0px;")
      SlyderA(tipo="b")
        .row.col-xl-11.m-auto
          .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
            figure.m-auto.col-7.col-md-5.col-lg-12
              img(src='@/assets/curso/tema1/31.svg' alt="")
          .col-lg-8(style="place-self:center;")
            h4(style="color:#FFCE00;") Aspecto 1
            .text-white
              p Se recomienda crear escenarios de prueba repetibles para cada uno de los atributos de prueba de escalabilidad. También, probar la aplicación en distintos niveles de carga como cargas bajas, medias y altas, además de monitorear el comportamiento de la aplicación.
        .row.col-xl-11.m-auto
          .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
            figure.m-auto.col-7.col-md-5.col-lg-12
              img(src='@/assets/curso/tema1/32.svg' alt="")
          .col-lg-8(style="place-self:center;")
            h4(style="color:#FFCE00;") Aspecto 2
            .text-white
              p El entorno de prueba que se desee crear debe ser lo suficientemente estable para soportar todo el ciclo de prueba de escalabilidad. En este sentido, se debe configurar el #[em hardware] para realizar las pruebas. 
        .row.col-xl-11.m-auto
          .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
            figure.m-auto.col-7.col-md-5.col-lg-12
              img(src='@/assets/curso/tema1/33.svg' alt="")
          .col-lg-8(style="place-self:center;")
            h4(style="color:#FFCE00;") Aspecto 3
            .text-white
              p Se debe definir un conjunto de usuarios virtuales para estudiar las variaciones de la aplicación con una carga de usuarios variable. Además, realizar repeticiones de los diferentes escenarios de prueba para usuarios en diferentes condiciones de aplicaciones internas, #[em hardware] y cambios en la base de datos.
        .row.col-xl-11.m-auto
          .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
            figure.m-auto.col-7.col-md-5.col-lg-12
              img(src='@/assets/curso/tema1/34.svg' alt="")
          .col-lg-8(style="place-self:center;")
            h4(style="color:#FFCE00;") Aspecto 4
            .text-white
              p En el caso de un entorno en servidores, se requiere verificar si el equilibrador de carga está distribuyendo las órdenes del usuario a varios servidores, para asegurarse que ninguno de ellos esté sobrecargado por una serie de órdenes.




              


   
      
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
.acordion1 .acordion__accion__btn--b, .acordion2 .acordion__accion__btn--b
  border: 1px solid #111e61
  background-color: #FFCE00
  border-color: #FFCE00
  box-shadow: 0px 0px 10px rgba(0,0,0,.2)
.acordion1 .tarjeta--azul
  background-color: #DCECFE !important
.acordion1 .tarjeta.tarjeta--azul.acordion__activo
  background-color: #E1F6EF !important
.acordion1 .acordion__accion__btn--a
  background-color: #FFCE00
.acordion2 .tarjeta--azul
  background-color: #E1F6EF !important
.acordion2 .tarjeta.tarjeta--azul.acordion__activo
  background-color: #DCECFE !important
.acordion2 .acordion__accion__btn--a
  background-color: #FFCE00
.cont_1_2, .cont_1_2 *
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 90%
  height: 60%
  bottom: 0
  right: 0
  background-color: #E1F6EF
.cont_1_3, .cont_1_3 *
  position: relative
.cont_1_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: rgb(255,255,255)
  background: linear-gradient(180deg, rgba(255,255,255,0.006127450980392135) 0%, rgba(220,236,254,1) 40%, rgba(220,236,254,1) 60%, rgba(249,250,252,0) 100%)
.slyder-a__bullets__item
  background-color: rgba(255, 255, 255, .35)
  border: 0px
.slyder-a__bullets__item--active
  background-color: #fff !important
  border-color: #fff !important
.cont_slyder_1_1
  background: url(../assets/curso/tema1/20.png)
  background-size: cover
  background-position: center
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #FFCE00
  border: 1px solid #FFCE00
.linea-tiempo-d__item.linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #E1F6EF
.linea-tiempo-d.color-acento-botones .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  color: #12263F
  font-weight: bold
.cont_1_4, .cont_1_4 *
 position: relative
.cont_1_4:before
  position: absolute
  content: ''
  width: 100%
  left: 0
  top: 0
  height: 100%
  background-color: #DCECFE
  border-radius: 17px
</style>
