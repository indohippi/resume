<template>
    <div class="projects container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Projects</h1>
      <div class="mb-4">
        <input v-model="search" placeholder="Search projects..." class="w-full p-2 border rounded">
      </div>
      <transition-group name="list" tag="div" class="grid md:grid-cols-2 gap-6">
        <div v-for="project in filteredProjects" :key="project.id" class="project-card bg-white shadow-md rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
          <h2 class="text-2xl font-bold mb-2">{{ project.name }}</h2>
          <p class="mb-4">{{ project.description }}</p>
          <ul class="list-disc list-inside mb-4">
            <li v-for="(feature, index) in project.features" :key="index">{{ feature }}</li>
          </ul>
          <div class="flex space-x-4">
            <a :href="project.github" target="_blank" class="text-blue-500 hover:underline">View on GitHub</a>
            <a v-if="project.demo" :href="project.demo" target="_blank" class="text-blue-500 hover:underline">View Live Demo</a>
          </div>
        </div>
      </transition-group>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  
  export default {
    name: 'ProjectsView',
    setup() {
      const search = ref('')
      const projects = ref([
        {
          id: 1,
          name: 'Prayer Generator',
          description: 'An app generating personalized prayers using user inputs and ChatGPT API.',
          features: [
            'Implemented responsive UI with JavaScript, React, CSS, HTML, and Bootstrap',
            'Solved dynamic content creation using API integration',
            'Tools: Javascript, React, CSS, HTML, Bootstrap, APIs, Python (backend)'
          ],
          github: 'https://github.com/your-github/prayer-generator',
          demo: null
        },
        {
          id: 2,
          name: 'ACC Capstone',
          description: 'A comprehensive capstone project for ACC.',
          features: [
            'Employed JavaScript, React, CSS, HTML, and Bootstrap for full-stack development',
            'Integrated APIs to enhance functionality and user interaction',
            'Created a user-friendly ecommerce platform using dynamic web technologies',
            'Tools: Javascript, React, CSS, HTML, Bootstrap, APIs, PostgreSQL, Python (backend)'
          ],
          github: 'https://github.com/your-github/acc-capstone',
          demo: 'https://your-deployed-project-url.com'
        }
      ])
  
      const filteredProjects = computed(() => {
        return projects.value.filter(project => 
          project.name.toLowerCase().includes(search.value.toLowerCase()) ||
          project.description.toLowerCase().includes(search.value.toLowerCase())
        )
      })
  
      return {
        search,
        filteredProjects
      }
    }
  }
  </script>
  
  <style scoped>
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  </style>