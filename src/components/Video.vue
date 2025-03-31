<template>
    <div class="container">
        <video class="video" controls muted>
            <source :src="video_url" type="video/mp4">
            Tu navegador no soporta la reproducción de videos.
        </video>
    </div>
</template>

<script setup>
    defineProps({
        video_url: String,
    });
</script>

<style scoped>
.container {
    box-shadow: 0 0 6px 3px rgba(100, 100, 100, 0.5);
    border-radius: 0.5vh;
    align-self: center;
    overflow: hidden;
    width: 100%;
    max-width: 35vh;
    margin: 0 auto;
}

.video {
    width: 100%;
    height: auto;
    display: block;
}
</style>