<template>
  <div id="app" :class="{ 'dark': isDarkMode }" class="min-h-screen flex flex-col">
    <HeaderComponent @toggle-dark-mode="toggleDarkMode" />
    <main class="flex-grow bg-white dark:bg-gray-900 text-black dark:text-white">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="bg-gray-200 dark:bg-gray-800 text-black dark:text-white py-4 text-center">
      <p>&copy; {{ new Date().getFullYear() }} Jared Wienen. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  setup() {
    const isDarkMode = ref(false)

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value
      localStorage.setItem('darkMode', isDarkMode.value)
    }

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
      isDarkMode.value = true
    }

    return {
      isDarkMode,
      toggleDarkMode
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>