<template>
    <main class="webAppView">
        <div class="fondo-nav"></div>

        <div class="app-unity">
            <iframe 
                ref="iframeRef"
                src="../CeldApp/index.html" 
                width="480"
                scrolling="no"
                style="border: none; min-height: 500px;" 
                allow="fullscreen; autoplay">
            </iframe>
        </div>

        <div class="fondo-footer">
            <Footer/>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Footer from '@/components/Footer.vue'

const iframeRef = ref(null)

const handleIframeResize = (event) => {

    if (event.data.type === 'resize-iframe' && event.data.height) {
        if (iframeRef.value) {
            iframeRef.value.style.height = event.data.height + 'px';
        }
    }
}

onMounted(() => {
    window.addEventListener('message', handleIframeResize)
})

onUnmounted(() => {
    window.removeEventListener('message', handleIframeResize)
})
</script>

<style scoped>
.webAppView {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    z-index: 1;
    background-color: black;
    font-family: "Montserrat", sans-serif;
}

.fondo-nav {
    flex-shrink: 0;
    height: 60px;
    width: 100%;
    background-color: #a8ebf3;
    border-radius: 0px 0px 20px 20px;
    margin-bottom: 0.5vh;
}

.app-unity {
    display: flex;
    justify-content: center;
    flex: 1 0 auto;
    width: 100%;
}

.fondo-footer {
    flex-shrink: 0;
    margin-top: auto;
    padding: 0.5em 0em;
    width: 100%;
    background-color: #a8ebf3;
    border-radius: 20px 20px 0px 0px;
}
</style>