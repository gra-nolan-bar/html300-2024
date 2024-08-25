<script setup>
import { ref, onMounted } from 'vue'

const apiData = ref(null)
const loading = ref(false)
const errorMessage = ref(null)

onMounted(async () => {
  loading.value = true
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    apiData.value = data
  } catch (error) {
    console.error('Error:', error)
    errorMessage.value = error.message
    loading.value = false
  } finally {
    loading.value = false
  }
  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data)
  //     apiData.value = data
  //     loading.value = false
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error)
  //     loading.value = false
  //     errorMessage.value = error.message
  //   })
  //   .finally(() => {
  //     console.log('API call completed.')
  //   })
})
</script>

<template>
  <div>
    <h1>API Lesson</h1>
    <p v-if="loading">Loading...</p>
    <p v-if="errorMessage">Error: {{ errorMessage }}</p>
    <ul>
      <li v-for="user in apiData" :key="user.id">
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
