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
        <slot></slot>
      </b-collapse>
    </b-navbar>
  </template>
  
  <script>
  import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse } from 'bootstrap-vue';
  
  export default {
    name: 'AppNavbar',
    components: {
      BNavbar,
      BNavbarBrand,
      BNavbarToggle,
      BCollapse
    }
  }
  </script>
  
  <style scoped>
  /* This makes sure the navbar items are white text */
  /* .nav-link {
    color: white !important;
  } */
  </style>
  