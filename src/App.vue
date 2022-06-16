<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
	import { loginStore as useLoginStore} from '@/stores/login'

	const loginStore = useLoginStore()
</script>

<template>
	<main>
		<nav class="navbar fixed-top navbar-expand navbar-dark">
			<div class="container-fluid">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item"><router-link class="nav-link" :to="{ name: 'home'}">Me découvrir</router-link></li>
					<li class="nav-item"><router-link class="nav-link" :to="{ name: 'projects'}">Mes projets</router-link></li>
				</ul>
			</div>
		</nav>

		<RouterView />
	</main>
</template>

<style>
	html {
		scroll-behavior: smooth;
	}

	html, body, #app, main {
		min-height: 100%;
		height: 100%;
	}

	nav .navbar-nav li a{
		color: white !important;
	}

	.page {
		height: 100%;
		min-height: 100%;
	}
</style>
