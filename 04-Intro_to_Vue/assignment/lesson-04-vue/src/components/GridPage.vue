<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <AppNavbar />

    <!-- Main Content -->
    <main class="container mt-4 flex-grow-1">
      <h1>Species of Dinosaurs</h1>
      <b-row>
        <!-- Grid Item #1 -->
        <b-col cols="12" sm="6" md="4" class="mb-4">
          <b-card title="Triceratops" class="border-light bg-light p-3">
            <p class="card-text">
              <strong>Triceratops horridus</strong> was a large herbivorous
              dinosaur that lived in the late Cretaceous period. Its name
              means 'three-horned face,' which is fitting because it had three
              distinct facial horns. These dinosaurs were quite large,
              reaching up to 9 meters in length. They were known for their
              impressive frills and horns, which likely played a role in
              defense and display.
            </p>
          </b-card>
        </b-col>
        <!-- Grid Item #2 -->
        <b-col cols="12" sm="6" md="4" class="mb-4">
          <b-card title="Tyrannosaurus Rex" class="border-light bg-light p-3">
            <p class="card-text">
              <strong>Tyrannosaurus Rex</strong>, often abbreviated as T. rex,
              is one of the most famous dinosaurs. It lived during the late
              Cretaceous period and was a fierce predator. T. rex had large,
              serrated teeth and powerful jaws, which made it a top predator
              in its ecosystem. It could grow up to 12 meters in length and
              weigh up to 8 tons.
            </p>
          </b-card>
        </b-col>
        <!-- Grid Item #3 -->
        <b-col cols="12" md="4" class="mb-4">
          <b-card title="Brachiosaurus" class="border-light bg-light p-3">
            <p class="card-text">
              <strong>Brachiosaurus altithorax</strong> was a large,
              long-necked dinosaur that lived in the late Jurassic period. It
              was characterized by its long neck, which allowed it to reach
              high vegetation. Unlike many other sauropods, Brachiosaurus had
              longer front legs than back legs, giving it a unique posture
              among dinosaurs. It could grow up to 25 meters long and weighed
              around 50 tons.
            </p>
          </b-card>
        </b-col>
      </b-row>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'GridPage'
}
</script>

<style scoped>
.card-title {
  font-size: 1.5rem;
}

.card-text {
  font-size: 1rem;
}

/* .nav-link {
  color: white !important;
}

.bg-success {
  background-color: #198754 !important;
} */
</style>
