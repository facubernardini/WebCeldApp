<template>
    <main class="homeAboutView">
        <div class="fondo-nav"></div>

        <section class="top-container">
            <h1 class="modulos-titulo">Módulos</h1>
            <a class="indice" href="#procesos-cristalizacion">Procesos de Cristalización</a>
            <a class="indice" href="#estructuras-cristalinas">Estructuras Cristalinas</a>
            <a class="indice" href="#diagramas-fase">Diagramas de Fase</a>
            <a class="indice" href="#realidad-aumentada">Realidad Aumentada</a>
        </section>

        <section class="requisitos-container">
            <h2 class="requisitos">Requisitos del Sistema</h2>
            <p>Para un óptimo funcionamiento de la aplicación, asegúrate de cumplir con los siguientes requisitos:</p>
            <ul>
                <li><u>Sistema operativo</u>: Android 8.0 o superior</li>
                <li><u>Memoria RAM</u>: 4gb o superior</li>
                <li><u>Espacio libre</u>: 200mb</li>
            </ul>
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
                <p>La simulación genera gran carga computacional en el dispositivo, por lo tanto, puede observar trabas o tirones.</p>
                <p>Esto es completamente normal, y no pone en riesgo el dispositivo. Solo debes esperar a que pasen unos segundos hasta que se complete la simulación.</p>
            </div>
            <Video :video_url="url_video_cristalizacion"></Video>
        </section>

        <section id="estructuras-cristalinas" class="modulo-container">
            <div class="modulo-descripcion">
                <h2 class="modulo">Estructuras Cristalinas</h2>
                <p>En esta sección podrás interactuar con distintas celdas unitarias, las cuales describen diversas organizaciones de átomos en las estructuras cristalinas.</p>
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
                <p>Puede observar algún pequeño error o desvío en los resultados para ciertos casos límite.</p>
            </div>
            <Video :video_url="url_video_diagramas_de_fase"></Video>
        </section>

        <section id="realidad-aumentada" class="modulo-container">
            <div class="modulo-descripcion">
                <h2 class="modulo">Realidad Aumentada</h2>
                <p>Este último apartado permitirá reforzar tus conocimientos adquiridos sobre estructuras cristalinas haciendo uso de la realidad aumentada. </p>
                <h3>Funcionalidades principales</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h3>Observaciones</h3>
                <p>Deberas asegurarte que la aplicación detectó correctamente una superficie plana para poder colocar el objeto 3D.</p>
                <p>Es importante que te encuentres en una espacio amplio y con buena luz.</p>
            </div>
            <Video :video_url="url_video_realidad_aumentada"></Video>
        </section>

        <div class="fondo-footer"></div>
    </main>
</template>

<script setup>
import Video from '@/components/Video.vue';

const url_video_cristalizacion = 'Cristalizacion.mp4';
const url_video_estructuras_cristalinas = 'EstructurasCristalinas.mp4';
const url_video_diagramas_de_fase = 'DiagramasDeFase.mp4';
const url_video_realidad_aumentada = 'RealidadAumentada.mp4';
</script>

<style scoped>
.homeAboutView {
    position: relative;
    z-index: 1;
    background-color: black;
    font-family: "Montserrat", sans-serif;
    min-height: 100dvh;
}

.top-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    text-align: center;
    background-color: black;
    border-radius: 10px;
}

.modulos-titulo {
    font-size: 1.4em;
    width: 100%;
    margin: 2vh 0vh;
    color: white;
}

.indice {
    font-size: 0.9em;
    margin: 2vh 3vw;
    color: white;
}

.requisitos-container {
    background-color: white;
    border-radius: 10px;
    padding: 3vh;
    height: auto;
    margin: 4vh 2vh;
    border-radius: 10px;
}

.requisitos {
    color: black;
    font-weight: bold;
    margin-bottom: 2vh;
}

.modulo-container {
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 3vh 6vw 3vh 3vh;
    height: auto;
    margin: 4vh 2vh;
    border-radius: 10px;
}

.modulo {
    color: black;
    font-weight: bold;
    margin-bottom: 2vh;
}

.modulo-descripcion {
    width: 100%;
    padding-right: 5vw;
}

p {
    margin-bottom: 2vh;
}

h3 {
    margin: 2vh 0vh;
}

ul li {
    margin: 1vh 1.5vw;
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
    height: 55px;
    width: 100%;
    background-color: #a8ebf3;
    border-radius: 20px 20px 0px 0px;
}

@media(max-width: 800px){
    
    .modulo-container {
        flex-direction: column;
        padding-right: 3vh;
    }

    .modulo-descripcion {
        padding-right: 0vw;
        padding-bottom: 3vh;
    }

}
</style>