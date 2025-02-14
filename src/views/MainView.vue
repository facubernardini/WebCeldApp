<template>
    <div class="home">
        <header>
            <NavBar></NavBar>
        </header>

        <main>
            <section class="top-content">
                <h1 class="subtitle">{{ subtitle }}</h1>
                <article class="bottom-description">{{ bottomDescription }}</article>
                <DownloadButton></DownloadButton>   
            </section>

            <section class="cards-container">
                <Card 
                    v-for="(card, index) in cards"
                    :key="index"
                    :title="card.title"
                    :description="card.description"
                />
            </section>

            <section class="bottom-content">
                <p>Contenido inferior a las cards</p>
            </section>
        </main>

        <footer>
            <article class="footer">
                <h2>Pie de página</h2>
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
            subtitle: 'UNA NUEVA FORMA \n DE APRENDER \n CIENCIA DE MATERIALES',
            bottomDescription: 'Una aplicación con el objetivo de ayudarte a entender \n conceptos complejos de forma amigable e interactiva.',
            cards: [
                { title: 'Card 1', description: 'Descripción 1' },
                { title: 'Card 2', description: 'Descripción 2' },
                { title: 'Card 3', description: 'Descripción 3' },
                { title: 'Card 4', description: 'Descripción 4' },
            ],
        };
    },
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
    height: 85vh;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    flex: 1;
}

.subtitle {
    font-family: Verdana;
    font-weight: bold;
    white-space: pre-line;
    font-size: 25px;
    align-content: center;
    text-align: start;
    flex: 6;
    align-self: flex-start;
    margin-left: 28%;
}

.bottom-description {
    font-family: Verdana;
    font-weight: 100;
    color: beige;
    white-space: pre-line;
    flex: 1;
    margin-top: 150px;
}

.cards-container {
    display: flex;
    gap: 100px;
    justify-content: center;
    margin: 350px 0;
}

.bottom-content {
    color: white;
    display: flex;
    justify-content: center;
    margin: 350px 0;
}

.footer {
    margin-top: 1200px;
}
</style>