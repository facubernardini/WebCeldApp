<template>
    <div class="home">
        <header>
            <NavBar/>
        </header>

        <main>
            <section class="top-content">
                <h1 class="subtitle">{{ subtitle }}</h1>
                <article class="bottom-description">{{ bottomDescription }}</article>
                <DownloadButton/>   
            </section>

            <section class="cards-container">
                <Card v-for="(card, index) in cards"
                    :key="index"
                    :title="card.title"
                    :background_url="card.background_url"
                    :img_url="card.img_url"
                    :description="card.description"
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
            subtitle: 'Una nueva forma \n de aprender \n ciencia de materiales',
            bottomDescription: 'Una aplicación con el objetivo de ayudarte a entender \n conceptos complejos de forma amigable e interactiva.',
            cards: [
                { title: 'Procesos de Cristalización', img_url: 'Cristalizacion.png', background_url: 'Card1.png', description: 'Genera un simulación con físicas realistas para observar como se cristalizan los diferentes materiales' },
                { title: 'Estructuras Cristalinas', img_url: 'EstructurasCristalinas.png', background_url: 'Card2.png', description: 'Visualiza las diferentes celdas unitarias e interactúa con los Índices de Miller para obtener planos de corte' },
                { title: 'Diagramas de Fase', img_url: 'DiagramasDeFase.png', background_url: 'Card3.png', description: 'Observa los distintos gráficos que describen las fases y puntos de equilibrio para diversas aleaciones' },
                { title: 'Realidad Aumentada', img_url: 'RealidadAumentada.png', background_url: 'Card4.png', description: 'Descrubre la Realidad Aumentada y aprende de forma didáctica e interactiva temas de interés' },
            ],
            bottomContent: '¡Gracias por usar CeldApp!',
            footer: 'Copyright © 2025 CeldApp. Todos los derechos reservados',
        };
    }
};
</script>

<style>
.home {
    text-align: center;
    background-image: url('@/assets/fondo.png');
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    min-height: 100vh;
}

.top-content {
    display: flex;
    height: 88vh;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    flex: 1;
}

.subtitle {
    font-family: "Montserrat", sans-serif;
    font-size: 35px;
    font-weight: bold;
    white-space: pre-line;
    align-content: center;
    text-align: start;
    flex: 6;
    align-self: flex-start;
    margin-left: 28vw;
}

.bottom-description {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 200;
    color: beige;
    white-space: pre-line;
    flex: 1;
    margin-top: 10vh;
}

.cards-container {
    display: flex;
    justify-content: space-evenly;
    margin: 16vh 0;
    flex-wrap: wrap;
}

.bottom-content {
    font-family: "Montserrat", sans-serif;
    font-size: 28px;
    color: white;
    display: flex;
    justify-content: center;
}

.footer {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 16px;
    font-weight: lighter;
    margin-top: 300px;
    padding: 50px;
}
</style>