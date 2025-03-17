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
                <p>{{ bottomContent }}</p>
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
                { card_title: 'Procesos de Cristalización', img_url: 'Cristalizacion.png', background_url: 'Card1.png', card_description: 'Genera un simulación con físicas realistas para observar como se cristalizan los diferentes materiales' },
                { card_title: 'Estructuras Cristalinas', img_url: 'EstructurasCristalinas.png', background_url: 'Card2.png', card_description: 'Visualiza las diferentes celdas unitarias e interactúa con los Índices de Miller para obtener planos de corte' },
                { card_title: 'Diagramas de Fase', img_url: 'DiagramasDeFase.png', background_url: 'Card3.png', card_description: 'Observa los distintos gráficos que describen las fases y puntos de equilibrio para diversas aleaciones' },
                { card_title: 'Realidad Aumentada', img_url: 'RealidadAumentada.png', background_url: 'Card4.png', card_description: 'Descrubre la Realidad Aumentada y aprende de forma didáctica e interactiva temas de interés' },
            ],
            bottomContent: '¡Gracias por usar CeldApp!',
            footer: 'Copyright © 2025 CeldApp. Todos los derechos reservados',
        };
    }
};
</script>

<style>

.home {
    background-image: url('@/assets/fondo.png');
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    min-height: 100svh;
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
    font-family: "Montserrat", sans-serif;
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
    font-family: "Montserrat", sans-serif;
    font-size: clamp(0.85em, 3vw, 1.1em);
    font-weight: 200;
    color: beige;
    white-space: pre-line;
    flex: 1;
    margin-top: 10svh;
}

.cards-container {
    display: flex;
    justify-content: space-evenly;
    margin: 16svh 0;
    flex-wrap: wrap;
}

.bottom-content {
    font-family: "Montserrat", sans-serif;
    font-size: clamp(1.4em, 3vw, 1.8em);
    color: white;
    display: flex;
    justify-content: center;
}

.footer {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: clamp(0.7em, 3vw, 1em);
    font-weight: lighter;
    text-align: center;
    margin-top: 300px;
    padding: 2svh 0svw;
}

@media(max-width: 800px){
    
    .home {
        background-color: black;
        background-image: url('@/assets/fondoMobile.png');
        background-size: contain;
    }

    .title {
        align-content: flex-start;
        text-align: center;
        flex: 5;
        align-self: center;
        margin: auto;
        padding-top: 5svh;
    }

    .subtitle {
        white-space: pre-line;
        flex: 1;
        margin-top: 10svh;
    }

    .footer {
        background-color: #8cccd9;
    }

}
</style>