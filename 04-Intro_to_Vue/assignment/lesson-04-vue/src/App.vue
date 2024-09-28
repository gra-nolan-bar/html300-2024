<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Navbar will be globally accessible -->
    <AppNavbar>
      <b-navbar-nav class="mr-3">
        <b-nav-item to="/" class="text-white">Home</b-nav-item>
        <b-nav-item to="/images" class="text-white">Images</b-nav-item>
        <b-nav-item to="/accordion" class="text-white">Age of Dinosaurs</b-nav-item>
        <b-nav-item to="/grid" class="text-white">Species of Dinosaur</b-nav-item>
      </b-navbar-nav>
    </AppNavbar>

    <!-- Routed components will be rendered here -->
    <router-view class="flex-grow-1"></router-view>

    <!-- Footer will be globally accessible -->
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes up at least the full viewport height */
}

.router-view {
  flex-grow: 1; /* Allows the content area to expand and push the footer down */
}

 /* This makes sure the navbar items are white text */
 .nav-link {
    color: white !important;
  }
</style>
