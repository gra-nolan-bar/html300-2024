import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ImagePage from '@/components/ImagesPage.vue'
import AccordionPage from '@/components/AccordionPage.vue'
import GridPage from '@/components/GridPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // Removes the hash from the URL
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/images', name: 'Images', component: ImagePage },
    { path: '/accordion', name: 'Accordion', component: AccordionPage },
    { path: '/grid', name:'Grid', component: GridPage }
  ]
})
