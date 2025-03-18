<template>
    <div class="home">
        <header>
            <NavBar/>
        </header>

        <main>
            <section class="top-content">
                <h1 class="title">{{ title }}</h1>
                <article class="subtitle">{{ subtitle }}</article>
                <DownloadButton/>   
            </section>

            <section class="about-project-container">
                <h3 class="about-project">Sobre este proyecto</h3>
                <p class="project-description"> <strong>CeldApp</strong> es una plataforma diseñada para facilitar la comprensión de los conceptos fundamentales de la estructura de los materiales. <br> <br> Su <strong>objetivo principal</strong> es proporcionar una herramienta accesible e interactiva que ayude a visualizar y estudiar los principios básicos de la ciencia de materiales. <br> <br>
                    A través de este espacio, es posible explorar <strong>temas esenciales</strong> como los procesos de cristalización, los diagramas de fase binarios, las celdas unitarias y los índices de Miller. Además, el framework incorpora un módulo de <strong>realidad aumentada</strong>, que permite interactuar con modelos tridimensionales para mejorar la comprensión de estructuras cristalinas y sus propiedades. <br> <br>
                    Pensado tanto para quienes se inician en el estudio de los materiales como para quienes buscan reforzar sus conocimientos, esta herramienta busca hacer más <strong>accesible</strong> y <strong>visual</strong> el aprendizaje de la cristalografía y sus aplicaciones. 
                </p>
            </section>

            <section class="cards-container">
                <Card v-for="(card, index) in cards"
                    :key="index"
                    :card_title="card.card_title"
                    :background_url="card.background_url"
                    :img_url="card.img_url"
                    :card_description="card.card_description"
                />
            </section>

            <section class="bottom-content">
                <p> La <strong>ciencia de los materiales</strong> es un campo en constante evolución, y cada nuevo conocimiento abre puertas a innovaciones y descubrimientos. Esperamos que este espacio contribuya a tu aprendizaje y te <strong>inspire</strong> a seguir explorando el fascinante mundo de los materiales y sus estructuras. <br> <br> ¡El futuro de la ciencia siempre comienza con la <strong>curiosidad</strong> y el deseo de <strong>aprender</strong>!</p>
            </section>
        </main>

        <footer>
            <article>
                <h2 class="footer">{{ footer }}</h2>
            </article>
        </footer>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
import DownloadButton from '@/components/DownloadButton.vue'
import NavBar from '@/components/NavBar.vue'

export default {
    components: { Card, DownloadButton, NavBar },
    data() {
        return {
            title: 'Una nueva forma \n de aprender \n ciencia de materiales',
            subtitle: 'Una aplicación con el objetivo de ayudarte a entender \n conceptos complejos de forma amigable e interactiva.',
            cards: [
                { card_title: 'Procesos de Cristalización', img_url: 'cristalizacion.png', background_url: 'Card1.png', card_description: 'Genera un simulación con físicas realistas para observar como se cristalizan los diferentes materiales' },
                { card_title: 'Estructuras Cristalinas', img_url: 'estructurasCristalinas.png', background_url: 'Card2.png', card_description: 'Visualiza las diferentes celdas unitarias e interactúa con los Índices de Miller para obtener planos de corte' },
                { card_title: 'Diagramas de Fase', img_url: 'diagramasDeFase.png', background_url: 'Card3.png', card_description: 'Observa los distintos gráficos que describen las fases y puntos de equilibrio para diversas aleaciones' },
                { card_title: 'Realidad Aumentada', img_url: 'realidadAumentada.png', background_url: 'Card4.png', card_description: 'Descrubre la Realidad Aumentada y aprende de forma didáctica e interactiva temas de interés' },
            ],
            footer: '© 2025 CeldApp. Todos los derechos reservados',
        };
    }
};
</script>

<style>

.home {
    background-color: black;
    background-image: url('@/assets/fondoDesktopTop.png'), url('@/assets/fondoDesktopBot.png');
    background-size: contain, contain;
    background-position: top, bottom;
    background-repeat: no-repeat, no-repeat;
    font-family: "Montserrat", sans-serif;
}

.top-content {
    display: flex;
    height: 88svh;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    flex: 1;
}

.title {
    font-size: clamp(1.8em, 5vw, 2.5em);
    font-weight: bold;
    white-space: pre-line;
    align-content: center;
    text-align: start;
    flex: 6;
    align-self: flex-start;
    margin-left: 28svw;
}

.subtitle {
    font-size: clamp(0.85em, 3vw, 1.1em);
    font-weight: 200;
    color: beige;
    white-space: pre-line;
    flex: 1;
    margin-top: 10svh;
}

.about-project-container {
    display: flex;
    flex-direction: column;
    padding: 40vh 15vw 0vh;
    color: white;
    text-align: center;
}

.about-project {
    font-size: 1.6em;
}

.project-description {
    font-size: clamp(0.95em, 3vw, 1.1em);
    font-weight: 200;
    line-height: 1.6;
    padding: 5vh 0vh;
}

.cards-container {
    display: flex;
    justify-content: space-evenly;
    margin: 16svh 0;
    flex-wrap: wrap;
}

.bottom-content {
    font-size: clamp(0.95em, 3vw, 1.1em);
    font-weight: 200;
    line-height: 1.6;
    color: white;
    
    text-align: center;
    padding: 12vh 20vw;
}

.footer {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: clamp(0.7em, 3vw, 1em);
    font-weight: lighter;
    text-align: center;
    margin-top: 300px;
    padding: 1.6svh 0svw;
}

@media(max-width: 800px){
    
    .home {
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
        margin-top: 10svh;
    }

}
</style>