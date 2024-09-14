<template>
  <div @click="toggleBorder" :class="{ 'bordered': hasBorder }">
    <!-- Image with props for src, alt, and title -->
    <img
      :src="src"
      :alt="alt"
      :title="title"
      class="img-fluid"
    />
  </div>
</template>

<script>
// Import the mixin to toggle the border
import toggleBorderMixin from '../mixins/toggleBorderMixin';

export default {
  name: 'ImageComponent',
  mixins: [toggleBorderMixin], // Mixin to toggle border
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      hasBorder: false, // State to track if the image has a border
    };
  },
  methods: {
    toggleBorder() {
      this.hasBorder = !this.hasBorder; // Toggle border on/off
    },
  },
};
</script>

<style scoped>
/* CSS class for the border */
.bordered {
  border: 2px solid #007bff; /* Bootstrap primary blue */
  padding: 10px;
}
</style>
