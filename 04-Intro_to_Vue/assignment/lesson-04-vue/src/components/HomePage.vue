<template>
  <div>
    <!-- Main Content -->
    <main class="container mt-4 flex-grow-1">
      <h1>Welcome to the Dinosaur Page</h1>
      <p>
        Dinosaurs are a diverse group of reptiles that dominated the Earth
        during the Mesozoic Era, living for over 180 million years. They ranged
        from small, bird-like creatures to massive giants like the
        <span
          v-b-tooltip="'Tyrannosaurus rex, often known as T. rex, was a large carnivorous dinosaur.'"
        >
          Tyrannosaurus rex
        </span>
        , a fearsome predator.
      </p>
      <p>
        The age of dinosaurs began in the Triassic Period and ended in the
        Cretaceous Period, when a mass extinction event led to their demise.
        Scientists study fossils to understand how these creatures lived and
        evolved over millions of years.
      </p>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
/* only if needed */
</style>
