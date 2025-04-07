<template>
    <main class="modulosView">
        <div class="fondo-nav"></div>

        <section class="top-container">
            <a class="nombre-modulos" href="#procesos-cristalizacion">Procesos de Cristalización</a>
            <a class="nombre-modulos" href="#estructuras-cristalinas">Estructuras Cristalinas</a>
            <a class="nombre-modulos" href="#diagramas-fase">Diagramas de Fase</a>
            <a class="nombre-modulos" href="#realidad-aumentada">Realidad Aumentada</a>
        </section>

        <section id="procesos-cristalizacion" class="modulo-container">
            <div class="modulo-descripcion">
                <h2 class="modulo">Procesos de Cristalización</h2>
                <p>En este módulo podrás observar como se generan las regiones denominadas granos en la solidificación de metales, y las zonas límite de las mismas.</p>
                <h3>Funcionalidades principales</h3>
                <ul>
                    <li>Capacidad de generar una simulación para ver el ordenamiento atómico para distintos metales.</li>
                    <li>Posibilidad de seleccionar entre los distintos materiales disponibles y establecer sus proporciones.</li>
                    <li>Observación de los límite de grano formados.</li>
                    <li>Capacidad para hacer zoom logrando una mejor visualización de la simulación obtenida.</li>
                </ul>
                <h3>Observaciones</h3>
                <ul>
                    <li>La simulación genera gran carga computacional en el dispositivo, por lo tanto, puede observar trabas o tirones. <br> Esto es completamente normal, y no pone en riesgo el dispositivo. Solo debes esperar a que pasen unos segundos hasta que se complete la simulación.</li>
                </ul>
            </div>
            <Video :video_url="url_video_cristalizacion"></Video>
        </section>

        <section id="estructuras-cristalinas" class="modulo-container">
            <div class="modulo-descripcion">
                <h2 class="modulo">Estructuras Cristalinas</h2>
                <p>En esta sección podrás interactuar con distintas celdas unitarias, las cuales describen diversas organizaciones de átomos en las estructuras cristalinas, como pueden ser:</p>
                <ul>
                    <li>Cúbica centrada en el cuerpo</li>
                    <li>Cúbica centrada en las caras</li>
                    <li>Hexagonal compacta</li>
                </ul>
                <p>La interfaz te permite modificar los parámetros para visualizar en tiempo real distintos conceptos clave de las estructuras cristalinas.</p>
                <h3>Funcionalidades principales</h3>
                <ul>
                    <li>Rotar y hacer zoom de las estructuras cristalinas.</li>
                    <li>Modificar los puntos de intersección del plano de corte con los ejes cartesianos.</li>
                    <li>Observar los valores de los índices de Miller obtenidos.</li>
                    <li>Generar un corte de la celda unitaria en dirección al plano posicionado anteriormenente.</li>
                    <li>Establecer los índices de Miller (valores X, Y, Z) y generar el plano equivalente a partir de los valores indicados.</li>
                    <li>Activar una vista expandida de la estructura cristalina, para observar como es generada por el apilamiento de los átomos. </li>
                    <li>Visualizar los sistemas de deslizamiento predefinidos para cada celda unitaria.</li>
                </ul>
            </div>
            <Video :video_url="url_video_estructuras_cristalinas"></Video>
        </section>

        <section id="diagramas-fase" class="modulo-container">
            <div class="modulo-descripcion">
                <h2 class="modulo">Diagramas de Fase</h2>
                <p>En este módulo podrás analizar e interactuar con tres tipos de diagramas de fase binarios.</p>
                <ul>
                    <li>Cobre - Níquel</li>
                    <li>Plomo - Estaño</li>
                    <li>Hierro - Carbono</li>
                </ul>
                <p>Serás capaz de modificar distintos parámetros, como la temperatura, para observar el comportamiento de los distintos estados alcanzados por las aleaciones.</p>
                <h3>Funcionalidades principales</h3>
                <ul>
                    <li>Establecer la proporción de los materiales de la aleación seleccionada.</li>
                    <li>Variar la temperatura en que se encuentra.</li>
                    <li>Observar las distintas zonas del gráfico, relacionadas a las fases presentes en la aleación para determinada temperatura y proporción de los materiales.</li>
                    <li>Observar e interpretar el comportamiento de la regla de la palanca de manera dinámica, según la variación de los parámetros.</li>
                    <li>Generación de una tabla de resultados, donde se podrán identificar los porcentajes de los materiales para la fase en la que se encuentran en dicha aleación, como así también su fracción en peso.</li>
                    <li>Capacidad de hacer zoom para observar los gráficos de manera mas óptima.</li>
                </ul>
                <h3>Observaciones</h3>
                <ul>
                    <li>Puede observar algún pequeño error o desvío en cierto valor de los resultados para determinados casos límite.</li>
                </ul>
            </div>
            <Video :video_url="url_video_diagramas_de_fase"></Video>
        </section>

        <section id="realidad-aumentada" class="modulo-container">
            <div class="modulo-descripcion">
                <h2 class="modulo">Realidad Aumentada</h2>
                <p>Este último apartado permitirá reforzar tus conocimientos adquiridos sobre estructuras cristalinas haciendo uso de la realidad aumentada en tu dispositivo móvil. </p>
                <h3>Funcionalidades principales</h3>
                <ul>
                    <li>Capacidad de colocar un objeto 3D en una superficie plana.</li>
                    <li>Rotación y zoom del objeto 3D tocando la pantalla.</li>
                    <li>Interacción con el objeto en realidad aumentada.</li>
                </ul>
                <h3>Observaciones</h3>
                <ul>
                    <li>Deberás asegurarte que la aplicación detectó correctamente una superficie plana para poder colocar el objeto 3D.</li>
                    <li>Es importante que te encuentres en una espacio amplio y con buena luz.</li>
                </ul>
            </div>
            <Video :video_url="url_video_realidad_aumentada"></Video>
        </section>

        <section class="requisitos-container">
            <h2 class="requisitos">Requisitos del Sistema</h2>
            <p>Para un óptimo funcionamiento de la aplicación, se recomienda cumplir con los siguientes requisitos:</p>
            <ul>
                <li><u>Sistema operativo</u>: Android 8.0 o superior</li>
                <li><u>Memoria RAM</u>: 4gb o superior</li>
                <li><u>Espacio libre</u>: 200mb</li>
            </ul>
        </section>

        <div class="fondo-footer">
            <Footer/>
        </div>
    </main>
</template>

<script setup>
import Video from '@/components/Video.vue';
import Footer from '@/components/Footer.vue'

const url_video_cristalizacion = 'Cristalizacion.mp4';
const url_video_estructuras_cristalinas = 'EstructurasCristalinas.mp4';
const url_video_diagramas_de_fase = 'DiagramasDeFase.mp4';
const url_video_realidad_aumentada = 'RealidadAumentada.mp4';
</script>

<style scoped>
.modulosView {
    position: relative;
    z-index: 1;
    background-color: black;
    font-family: "Montserrat", sans-serif;
    min-height: 100vh;
}

.top-container {
    justify-self: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    width: 60vw;
    text-align: center;
    margin-top: 1.5em;
}

.nombre-modulos {
    background-color: rgb(35, 35, 35);
    font-size: 1em;
    margin: 0.7em;
    color: white;
    padding: 0.45em 0.6em;
    border-radius: 1em;
    text-decoration: none;
    transition: 0.3s;
}

.nombre-modulos:hover {
    background-color: white;
    color: rgb(35, 35, 35);
}

.requisitos-container {
    justify-self: center;
    border: solid white;
    border-width: 0em 0.15em 0em 0.15em;
    padding: 1vh 3vh;
    height: auto;
    margin: 4vh;
    border-radius: 0.4em;
    transition: 0.3s;
}

.requisitos {
    color: white;
    font-weight: bold;
    margin-bottom: 2vh;
}

.modulo-container {
    display: flex;
    justify-content: space-between;
    background-color: rgb(35, 35, 35);
    padding: 3vh 6vw 3vh 3vh;
    height: auto;
    margin: 4vh;
    border-radius: 10px;
}

.modulo {
    color: white;
    font-weight: bold;
    margin-bottom: 2vh;
}

.modulo-descripcion {
    width: 100%;
    padding-right: 5vw;
}

p {
    margin: 2vh 0vh;
    color: white;
}

h3 {
    margin: 2vh 0vh;
    color: white;
}

ul li {
    margin: 1vh 1.5vw;
    color: white;
}

.fondo-nav {
    position: relative;
    height: 60px;
    width: 100%;
    background-color: #a8ebf3;
    border-radius: 0px 0px 20px 20px;
    margin-bottom: 2vh;
}

.fondo-footer {
    position: relative;
    padding: 0.5em 0em;
    width: 100%;
    background-color: #a8ebf3;
    border-radius: 20px 20px 0px 0px;
}

@media(max-width: 800px){
    
    .requisitos-container {
        margin: 2vh;
    }

    .modulo-container {
        flex-direction: column;
        padding-right: 3vh;
        margin: 5vh 2vh;
    }

    .modulo-descripcion {
        padding-right: 0vw;
        padding-bottom: 3vh;
    }

}
</style>