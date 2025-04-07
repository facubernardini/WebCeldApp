<template>
    <main class="webAppView">
        <div class="fondo-nav"></div>

        <iframe class="app-unity" src="../CeldApp/index.html" width="100%" height="1280px" style="border: none;" allow="fullscreen"></iframe>

        <div class="fondo-footer">
            <Footer/>
        </div>
    </main>
</template>

<script setup>
import Footer from '@/components/Footer.vue'

</script>

<style scoped>
.webAppView {
    position: relative;
    z-index: 1;
    background-color: black;
    font-family: "Montserrat", sans-serif;
    min-height: 100vh;
}

.fondo-nav {
    position: relative;
    height: 60px;
    width: 100%;
    background-color: #a8ebf3;
    border-radius: 0px 0px 20px 20px;
    margin-bottom: 2vh;
}

.app-unity {
    min-height: 150vh;
}

.fondo-footer {
    position: relative;
    padding: 0.5em 0em;
    width: 100%;
    background-color: #a8ebf3;
    border-radius: 20px 20px 0px 0px;
}

@media(max-width: 800px){
    

}
</style>