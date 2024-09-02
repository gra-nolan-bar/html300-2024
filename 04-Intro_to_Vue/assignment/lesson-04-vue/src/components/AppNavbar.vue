<template>
    <b-navbar toggleable="lg" variant="success" class="sticky-top">
      <b-navbar-brand to="/" class="text-white">
        <img
          src="../assets/pterodactyl.svg"
          alt="Brand Logo"
          width="50"
          height="50"
          class="d-inline-block"
        />
        Dinosaurs
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-3">
          <b-nav-item to="/" class="text-white">Home</b-nav-item>
          <b-nav-item to="/images" class="text-white">Images</b-nav-item>
          <b-nav-item to="/accordion" class="text-white">Age of Dinosaurs</b-nav-item>
          <b-nav-item to="/grid" class="text-white">Species of Dinosaur</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </template>
  
  <script>
  import { BNavbar, BNavbarBrand, BNavbarToggle, BNavbarNav, BNavItem, BCollapse } from 'bootstrap-vue';
  
  export default {
    name: 'AppNavbar',
    components: {
      BNavbar,
      BNavbarBrand,
      BNavbarToggle,
      BNavbarNav,
      BNavItem,
      BCollapse
    }
  }
  </script>
  
  <style scoped>
  /* This makes sure the navbar items are white text */
  .nav-link {
    color: white !important;
  }
  </style>
  