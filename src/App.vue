<template>
	<div class="container">
		<Transition name="nav">
			<header v-if="cargado" class="header">
				<NavBar/>
			</header>
		</Transition>

		<router-view></router-view>
		
	</div>

</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import { ref, onMounted } from 'vue';

const cargado = ref(false);

onMounted(() => {
  	setTimeout(() => {
    	cargado.value = true;
  	}, 300);
});
</script>

<style scoped>
.container {
	position: relative;
	display: flex;
	flex-direction: column;
}

.header {
	position: absolute;
	width: 100%;
	z-index: 10;
}

/* Animaciones de entrada */
.nav-enter-active {
    transition: opacity 1s ease-out, transform 0.8s ease-out;
}
.nav-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}
</style>