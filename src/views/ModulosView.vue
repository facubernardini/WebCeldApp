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
                </ul>
                <h3>Observaciones</h3>
                <p>La simulación genera gran carga computacional en el dispositivo, por lo tanto, puede observar trabas o tirones.</p>
                <p>Esto es completamente normal, y no pone en riesgo el dispositivo. Solo debes esperar a que pasen unos segundos hasta que se complete la simulación.</p>
            </div>
            <Video :video_url="url_video_cristalizacion"></Video>
        </section>

        <section id="estructuras-cristalinas" class="modulo-container">
            <h2 class="modulo">Estructuras Cristalinas</h2>
        </section>

        <section id="diagramas-fase" class="modulo-container">
            <h2 class="modulo">Diagramas de Fase</h2>
        </section>

        <section id="realidad-aumentada" class="modulo-container">
            <h2 class="modulo">Realidad Aumentada</h2>
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