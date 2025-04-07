<template>
    <main class="webAppView">
        <div class="fondo-nav"></div>

        <div class="app-unity">
            <iframe src="../CeldApp/index.html" width="480" height="1400" style="border: none;" allow="fullscreen"></iframe>
        </div>

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
    display: flex;
    justify-content: center;
    height: 100vh;
    width: auto;
    overflow: hidden;
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