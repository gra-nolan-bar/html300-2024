<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Main Content -->
    <main class="container mt-4 flex-grow-1">
      <h1>Images Page</h1>
      <!-- Iterate through images array to display each image -->
      <div>
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="img-fluid mt-2 mb-2"
        />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ImagesPage',
  data() {
    return {
      // Array of images with their source and alt text
      images: [
        {
          src: require('../assets/dinosaur-t-rex-1280.jpg'),
          alt: 'T-Rex dinosaur in a forest'
        },
        {
          src: require('../assets/dinosaur-pterosaur-masosaur-1280.png'),
          alt: 'Pterosaur flying over the ocean with a masosaur attacking from the water'
        },
        {
          src: require('../assets/dinosaur-mosasaurus.jpg'),
          alt: 'Masosaurus swimming underwater'
        }
      ]
    };
  }
}
</script>

<style scoped>
/* Ensuring nav-links appear white for better visibility */
/* .nav-link {
  color: white !important;
} */
</style>
