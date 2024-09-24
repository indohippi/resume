<template>
    <header class="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white p-4 sticky top-0 z-50 transition-all duration-300" :class="{ 'shadow-lg': scrolled }">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">
          <span class="hidden md:inline">Jared Wienen</span>
          <span class="md:hidden">JW</span>
        </h1>
        <nav class="flex items-center">
          <button @click="toggleDarkMode" class="mr-4 focus:outline-none">
            <svg v-if="isDarkMode" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          </button>
          <button @click="toggleMenu" class="md:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul :class="{'hidden': !menuOpen}" class="md:flex space-x-4 mt-4 md:mt-0">
            <li v-for="item in menuItems" :key="item.route">
              <router-link :to="item.route" class="hover:text-yellow-300 transition-colors duration-200" @click="closeMenu">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  export default {
    name: 'HeaderComponent',
    setup() {
      const menuOpen = ref(false)
      const scrolled = ref(false)
      const isDarkMode = ref(false)
  
      const menuItems = [
        { name: 'Home', route: '/' },
        { name: 'About', route: '/about' },
        { name: 'Projects', route: '/projects' },
        { name: 'Experience', route: '/experience' },
        { name: 'Skills', route: '/skills' },
        { name: 'Education', route: '/education' },
        { name: 'Contact', route: '/contact' },
      ]
  
      const toggleMenu = () => {
        menuOpen.value = !menuOpen.value
      }
  
      const closeMenu = () => {
        menuOpen.value = false
      }
  
      const handleScroll = () => {
        scrolled.value = window.scrollY > 50
      }
  
      const toggleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value
        localStorage.setItem('darkMode', isDarkMode.value)
        document.documentElement.classList.toggle('dark')
      }
  
      onMounted(() => {
        window.addEventListener('scroll', handleScroll)
        const savedDarkMode = localStorage.getItem('darkMode')
        if (savedDarkMode !== null) {
          isDarkMode.value = JSON.parse(savedDarkMode)
          if (isDarkMode.value) {
            document.documentElement.classList.add('dark')
          }
        }
      })
  
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
      })
  
      return {
        menuOpen,
        scrolled,
        isDarkMode,
        menuItems,
        toggleMenu,
        closeMenu,
        toggleDarkMode
      }
    }
  }
  </script>