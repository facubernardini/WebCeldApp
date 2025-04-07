<template>
    <main class="mainView">
        <section class="top-content">
            <Transition name="fade">
            <h1 v-if="cargado" class="title">{{ title }}</h1>
            </Transition>

            <article v-if="cargado" class="subtitle">{{ subtitle }}</article>
            
            <div class="contenedor-botones-descarga">
                <DownloadButtonAndroid class="download-btn"/>
                <ExecuteAppButton class="download-btn"/>
            </div>
        </section>

        <section id="about" class="about-project-container">
            <h3 class="about-project">Sobre este proyecto</h3>
            <p class="project-description"> <strong>CeldApp</strong> es una plataforma diseñada para facilitar la comprensión de los conceptos fundamentales de la estructura de los materiales. </p>
            <p class="project-description"> Su <strong>objetivo principal</strong> es proporcionar una herramienta accesible e interactiva que ayude a visualizar y estudiar los principios básicos de la ciencia de materiales. </p>
            <p class="project-description"> A través de este espacio, es posible explorar <strong>temas esenciales</strong> como los procesos de cristalización, los diagramas de fase binarios, las celdas unitarias y los índices de Miller. Además, el framework incorpora un módulo de <strong>realidad aumentada</strong>, que permite interactuar con modelos tridimensionales para mejorar la comprensión de estructuras cristalinas y sus propiedades. </p>
            <p class="project-description"> Pensado tanto para quienes se inician en el estudio de los materiales como para quienes buscan reforzar sus conocimientos, esta herramienta busca hacer más <strong>accesible</strong> y <strong>visual</strong> el aprendizaje de la cristalografía y sus aplicaciones. </p>
        </section>

        <section class="cards-container">
            <Card v-for="(card, index) in cards"
                :key="index"
                :card_title="card.card_title"
                :background_url="card.background_url"
                :img_url="card.img_url"
                :card_description="card.card_description"
                @click="goToModulo(card.hash)"
            />
        </section>

        <section class="bottom-content">
            <p> La <strong>ciencia de los materiales</strong> es un campo en constante evolución, y cada nuevo conocimiento abre puertas a innovaciones y descubrimientos. Esperamos que este espacio contribuya a tu aprendizaje y te <strong>inspire</strong> a seguir explorando el fascinante mundo de los materiales y sus estructuras. <br> <br> <br> ¡El futuro de la ciencia siempre comienza con la <strong>curiosidad</strong> y el deseo de <strong>aprender</strong>!</p>
        </section>

        <Footer/>
    </main>
</template>

<script setup>
import Card from '@/components/Card.vue';
import DownloadButtonAndroid from '@/components/DownloadButtonAndroid.vue'
import ExecuteAppButton from '@/components/ExecuteAppButton.vue'
import Footer from '@/components/Footer.vue'
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const cargado = ref(false);

onMounted(() => {
    cargado.value = true; 
});

const goToModulo = (hash) => {
    let ruta = "/modulos#" + hash;
    router.push(ruta);
};

const title =  'Una nueva forma \n de aprender \n ciencia de materiales';
const subtitle = 'Una aplicación con el objetivo de ayudarte a entender \n conceptos complejos de forma amigable e interactiva.';
const cards = [
    { card_title: 'Procesos de Cristalización', img_url: 'cristalizacion.png', background_url: 'Card1.png', card_description: 'Genera una simulación con físicas realistas para observar como se cristalizan los diferentes materiales', hash: 'procesos-cristalizacion' },
    { card_title: 'Estructuras Cristalinas', img_url: 'estructurasCristalinas.png', background_url: 'Card2.png', card_description: 'Visualiza las diferentes celdas unitarias e interactúa con los índices de Miller para obtener planos de corte', hash: 'estructuras-cristalinas' },
    { card_title: 'Diagramas de Fase', img_url: 'diagramasDeFase.png', background_url: 'Card3.png', card_description: 'Observa los distintos gráficos que describen las fases y puntos de equilibrio para diversas aleaciones', hash: 'diagramas-fase' },
    { card_title: 'Realidad Aumentada', img_url: 'realidadAumentada.png', background_url: 'Card4.png', card_description: 'Descubre la Realidad Aumentada y aprende de forma didáctica e interactiva temas de interés', hash: 'realidad-aumentada' },
]
</script>

<style>
.mainView {
    position: relative;
    z-index: 1;
    background-color: black;
    background-image: url('@/assets/fondoDesktopTop.png'), url('@/assets/fondoDesktopBot.png');
    background-size: contain, contain;
    background-position: top, bottom;
    background-repeat: no-repeat, no-repeat;
    font-family: "Montserrat", sans-serif;
    padding-top: 6vh;
}

.top-content {
    display: flex;
    height: 92svh;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    flex: 1;
}

.title {
    font-size: clamp(1.8em, 3vw, 2.5em);
    font-weight: bold;
    white-space: pre-line;
    align-content: center;
    text-align: start;
    align-self: flex-start;
    margin-left: 28svw;
    padding-top: clamp(2vh, 10vw, 20vh);
}

.subtitle {
    font-size: clamp(0.85em, 3vw, 1.1em);
    font-weight: 200;
    color: white;
    white-space: pre-line;
    margin-top: 28svh;
}

.contenedor-botones-descarga {
    display: flex;
    padding-top: 2vh;
}

.download-btn {
    height: 4.2em;
    width: 4.2em;
    padding: 1em;
    margin: 2vh;
}

.about-project-container {
    display: flex;
    flex-direction: column;
    margin-top: 12vh;
    padding: 10vh 15vw 0vh;
    color: white;
    text-align: center;
}

.about-project {
    font-size: 1.6em;
    padding-bottom: 5vh;
}

.project-description {
    font-size: clamp(0.95em, 3vw, 1.1em);
    font-weight: 200;
    line-height: 1.6;
    padding: 3vh 0vh;
}

.cards-container {
    display: flex;
    justify-content: space-evenly;
    margin: 12svh 0;
    flex-wrap: wrap;
}

.bottom-content {
    font-size: clamp(0.95em, 3vw, 1.1em);
    font-weight: 200;
    line-height: 1.6;
    color: white;
    text-align: center;
    padding: 5vh 3vw;
    margin: 0vh 20vw 50vh;
    border: solid white;
    border-width: 0.15em 0px 0.15em 0px;
}

/* Animaciones de entrada */
.fade-enter-active {
    transition: opacity 1s ease-out, transform 0.8s ease-out;
}
.fade-enter-from {
    opacity: 0;
    transform: translateX(40px);
}

@media(max-width: 800px){
    
    .mainView {
        background-image: url('@/assets/fondoMobileTop.png'), url('@/assets/fondoMobileBot.png');
    }

    .title {
        align-content: flex-start;
        text-align: center;
        flex: 6;
        align-self: center;
        margin: auto;
        padding-top: 5svh;
    }

    .subtitle {
        white-space: pre-line;
        flex: 1;
        margin-top: 40svh;
    }
}
</style>